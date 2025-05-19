import { Parser } from "antlr4";
import gramaticaVisitor from './gramaticaVisitor.js';

export default class CustomgramaticaVisitor extends gramaticaVisitor {
    visit(ctx) {
        return super.visit(ctx);
    }

    visitRegex(ctx) {
        const terms = ctx.term();
        const pattern = terms.map(term => this.visitTerm(term)).join('|');
        console.log(`const regex = /${pattern}/;`);
        // Devuelve cadena, no RegExp, para poder manipular después
        return pattern;
    }

    visitTerm(ctx) {
        return ctx.factor().map(factor => this.visitFactor(factor)).join('');
    }

    visitFactor(ctx) {
        const base = this.visitBase(ctx.base());
        const quantifier = ctx.quantifier() ? this.visitQuantifier(ctx.quantifier()) : '';
        return base + quantifier;
    }

    visitBase(ctx) {
        if (ctx.CHAR()) {
            return this.escapeRegExp(ctx.CHAR().getText());
        } else if (ctx.group()) {
            return '(' + this.visitRegex(ctx.group().regex()) + ')';
        } else if (ctx.charclass()) {
            return this.visitCharclass(ctx.charclass());
        }
        return '';
    }

    visitCharclass(ctx) {
        // Primer token puede ser '[' o '[^'
        let children = ctx.children || [];
        let negated = false;
        let startIndex = 1; // por defecto, después de '['

        if (children.length > 1 && children[1].getText() === '^') {
            negated = true;
            startIndex = 2; // después de '[^'
        }

        // Último token es siempre ']'
        const endIndex = children.length - 1;

        let contentParts = [];

        for (let i = startIndex; i < endIndex; i++) {
            const child = children[i];

            if (child.ruleContext) {
                // Si es un range
                if (child.ruleContext.constructor.name === "RangeContext") {
                    contentParts.push(this.visitRange(child.ruleContext));
                } else {
                    // Otros contextos (por si acaso)
                    contentParts.push(child.getText());
                }
            } else {
                // Token simple (CHAR o DASH)
                const text = child.getText();
                // No escapas '-', que es válido en charclass
                contentParts.push(text);
            }
        }

        return `[${negated ? '^' : ''}${contentParts.join('')}]`;
    }

    visitRange(ctx) {
        if (!ctx.children || ctx.children.length !== 3) {
            console.error("visitRange: estructura inesperada", ctx.children);
            return "";
        }
        const startChar = ctx.children[0].getText();
        const dash = ctx.children[1].getText();
        const endChar = ctx.children[2].getText();

        return startChar + dash + endChar;
    }

    visitQuantifier(ctx) {
        if (ctx.getChild(0).getText() === '{') {
            const numbers = ctx.NUMBER();
            if (numbers.length === 1) {
                return `{${numbers[0].getText()}}`;
            } else {
                return `{${numbers[0].getText()},${numbers[1] ? numbers[1].getText() : ''}}`;
            }
        }
        return ctx.getChild(0).getText();
    }

    escapeRegExp(string) {
        // Escapa caracteres especiales excepto los usados en charclass (ej. '-')
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
}
