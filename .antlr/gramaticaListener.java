// Generated from c:/Users/Usuario/Documents/programacion/Nueva carpeta/gramatica.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link gramaticaParser}.
 */
public interface gramaticaListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link gramaticaParser#regex}.
	 * @param ctx the parse tree
	 */
	void enterRegex(gramaticaParser.RegexContext ctx);
	/**
	 * Exit a parse tree produced by {@link gramaticaParser#regex}.
	 * @param ctx the parse tree
	 */
	void exitRegex(gramaticaParser.RegexContext ctx);
	/**
	 * Enter a parse tree produced by {@link gramaticaParser#term}.
	 * @param ctx the parse tree
	 */
	void enterTerm(gramaticaParser.TermContext ctx);
	/**
	 * Exit a parse tree produced by {@link gramaticaParser#term}.
	 * @param ctx the parse tree
	 */
	void exitTerm(gramaticaParser.TermContext ctx);
	/**
	 * Enter a parse tree produced by {@link gramaticaParser#factor}.
	 * @param ctx the parse tree
	 */
	void enterFactor(gramaticaParser.FactorContext ctx);
	/**
	 * Exit a parse tree produced by {@link gramaticaParser#factor}.
	 * @param ctx the parse tree
	 */
	void exitFactor(gramaticaParser.FactorContext ctx);
	/**
	 * Enter a parse tree produced by {@link gramaticaParser#base}.
	 * @param ctx the parse tree
	 */
	void enterBase(gramaticaParser.BaseContext ctx);
	/**
	 * Exit a parse tree produced by {@link gramaticaParser#base}.
	 * @param ctx the parse tree
	 */
	void exitBase(gramaticaParser.BaseContext ctx);
	/**
	 * Enter a parse tree produced by {@link gramaticaParser#group}.
	 * @param ctx the parse tree
	 */
	void enterGroup(gramaticaParser.GroupContext ctx);
	/**
	 * Exit a parse tree produced by {@link gramaticaParser#group}.
	 * @param ctx the parse tree
	 */
	void exitGroup(gramaticaParser.GroupContext ctx);
	/**
	 * Enter a parse tree produced by {@link gramaticaParser#charclass}.
	 * @param ctx the parse tree
	 */
	void enterCharclass(gramaticaParser.CharclassContext ctx);
	/**
	 * Exit a parse tree produced by {@link gramaticaParser#charclass}.
	 * @param ctx the parse tree
	 */
	void exitCharclass(gramaticaParser.CharclassContext ctx);
	/**
	 * Enter a parse tree produced by {@link gramaticaParser#range}.
	 * @param ctx the parse tree
	 */
	void enterRange(gramaticaParser.RangeContext ctx);
	/**
	 * Exit a parse tree produced by {@link gramaticaParser#range}.
	 * @param ctx the parse tree
	 */
	void exitRange(gramaticaParser.RangeContext ctx);
	/**
	 * Enter a parse tree produced by {@link gramaticaParser#quantifier}.
	 * @param ctx the parse tree
	 */
	void enterQuantifier(gramaticaParser.QuantifierContext ctx);
	/**
	 * Exit a parse tree produced by {@link gramaticaParser#quantifier}.
	 * @param ctx the parse tree
	 */
	void exitQuantifier(gramaticaParser.QuantifierContext ctx);
}