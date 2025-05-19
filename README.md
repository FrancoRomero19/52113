# Proyecto de Analizador

Este proyecto utiliza una gramática ANTLR4 para reconocer expresiones regulares definidas según la gramática proporcionada.
## Archivos de ejemplo
En la carpeta encontrarás cuatro archivos de texto con expresiones regulares para probar la aplicación:
- `archivo_correcto_1.txt` y `archivo_correcto_4.txt`: ejemplos válidos.
- `archivo_incorrecto_1.txt` y `archivo_incorrecto_2.txt`: ejemplos inválidos.

## Requisitos previos
- Tener instalado Node.js, ANTLR4 y configurado el entorno para ejecutar tu parser con JavaScript.
- Tener VisualStudioCode
- Descargar la carpeta subida a GITHUB.

## Cómo ejecutar la aplicación
Abrimos VS Code y desde ahí abrimos el proyecto ya descargado.
Luego en la terminal pondremos lo siguiente: “node index.js”, que sirve para ejecutar el analizador.
Ahí mismo en la terminal se ejecutara quedando algo como lo siguiente:
Verificando tokens generados por el lexer...

Tabla de Tokens y Lexemas:
--------------------------------------------------
| Lexema         | Token                         |
--------------------------------------------------
| a              | CHAR                          |
| (              | LPAREN                        |
| a              | CHAR                          |
| b              | CHAR                          |
| +              | PLUS                          |
| c              | CHAR                          |
| ?              | QUESTION                      |
| )              | RPAREN                        |
| [              | LBRACK                        |
| x              | CHAR                          |
| -              | DASH                          |
| z              | CHAR                          |
| ]              | RBRACK                        |
| {              | LBRACE                        |
| 3              | NUMBER                        |
| ,              | COMMA                         |
| 5              | NUMBER                        |
| }              | RBRACE                        |
| |              | PIPE                          |
| g              | CHAR                          |
| h              | CHAR                          |
| *              | STAR                          |
| i              | CHAR                          |
| +              | PLUS                          |
--------------------------------------------------

Entrada válida.
Árbol de derivación: (regex (term (factor (base a)) (factor (base (group ( (regex (term (factor (base a)) (factor (base b) (quantifier +)) (factor (base c) (quantifier ?)))) )))) (factor (base (charclass [ (range x - z) ])) (quantifier { 3 , 5 }))) | (term (factor (base g)) (factor (base h) (quantifier *)) (factor (base i) (quantifier +))))
const regex = /ab+c?/;
const regex = /a(ab+c?)[x-z]{3,5}|gh*i+/;
Regex generado: a(ab+c?)[x-z]{3,5}|gh*i+
Expresión regular compilada: /a(ab+c?)[x-z]{3,5}|gh*i+/
Probando con "aab": false

Este código muestra todo lo pedido, la tabla de tokens y lexemas, el árbol, y el cambio del input a JS.

