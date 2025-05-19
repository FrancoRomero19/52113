import antlr4, { CharStreams, CommonTokenStream }  from "antlr4";
import gramaticaLexer from "./gramaticaLexer.js";
import gramaticaParser from "./gramaticaParser.js";
import CustomgramaticaListener from './CustomgramaticaListener.js';
import CustomgramaticaVisitor from "./CustomgramaticaVisitor.js";
import readline from 'readline';
import fs from 'fs';

async function main() {
    
    let input;

    // Intento leer la entrada desde el archivo input - en forma sincrónica.
    try {
        input = fs.readFileSync('input_correcto1.txt', 'utf8');
    } catch (err) {
        // Si no es posible leer el archivo, solicitar la entrada del usuario por teclado
        input = await leerCadena(); // Simula lectura síncrona
        console.log(input);
    }

    // Proceso la entrada con el analizador para obtener el lexer
    let inputStream = CharStreams.fromString(input);
    let lexer = new gramaticaLexer(inputStream);
    
    //Verificar si el lexer está generando tokens 
    console.log("Verificando tokens generados por el lexer...");
    const tokens = lexer.getAllTokens();
    if (tokens.length === 0) {
        console.error("No se generaron tokens. Verifica la entrada y la gramática.");
        return;
    }

    //Mostrar la tabla de tokens y lexemas
    console.log("\nTabla de Tokens y Lexemas:");
    console.log("--------------------------------------------------");
    console.log("| Lexema         | Token                         |");
    console.log("--------------------------------------------------");

    // Recorrer todos los tokens generados por el lexer
    for (let token of tokens) {
        // Obtener el nombre simbólico del token
        const tokenType = gramaticaLexer.symbolicNames[token.type] || `UNKNOWN (${token.type})`;
        const lexema = token.text; // Obtener el lexema (texto del token)
        console.log(`| ${lexema.padEnd(14)} | ${tokenType.padEnd(30)}|`);
    }
    console.log("--------------------------------------------------"); 

    /* Vuelve a procesar la entrada, obtener el lexer, el código tokenizado y el parser 
     * Es necesario volver a procesar la entrada porque la función getAllTokens() consume
     * todos los tokens reconocidos y vacía el lexer. */
    inputStream = CharStreams.fromString(input);
    lexer = new gramaticaLexer(inputStream);
    let tokenStream = new CommonTokenStream(lexer);
    let parser = new gramaticaParser(tokenStream);
    let tree = parser.regex();

    // Verificar si se produjeron errores sintácticos
    if (parser.syntaxErrorsCount > 0) {
        console.error("\nSe encontraron errores de sintaxis en la entrada.");
    } else {
        console.log("\nEntrada válida.");
        const cadena_tree = tree.toStringTree(parser.ruleNames);
        console.log(`Árbol de derivación: ${cadena_tree}`);

    }

    // Usa el visitor para traducir a JS
try {
const visitor = new CustomgramaticaVisitor();
const regexStr = visitor.visit(tree);
console.log(`Regex generado: ${regexStr}`);

if (regexStr) {
    // Crear objeto RegExp desde la cadena
    const regexJS = new RegExp(regexStr);
    console.log("Expresión regular compilada:", regexJS);

    const testStr = "aab";
    console.log(`Probando con "${testStr}":`, regexJS.test(testStr));
} else {
    console.error("No se pudo generar la expresión regular");
}
}catch (e) {
    console.error("Error durante la interpretación:", e);
}
}
function leerCadena() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => {
        rl.question("Ingrese una cadena: ", (answer) => {
            rl.close();
            resolve(answer);
        });
    });  
}

// Ejecuta la función principal
main();
