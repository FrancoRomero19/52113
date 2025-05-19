grammar gramatica;

//gramatica
regex: term('|'term)*;
term: factor+;
factor: base quantifier?;
base: CHAR
    |group
    |charclass;
group: '('regex')';
charclass: '['('^')?(range|CHAR)+']';
range: (CHAR | NUMBER) '-' (CHAR | NUMBER) ;
quantifier: '*'
        |'+'
        |'?'
        |'{'NUMBER(','NUMBER?)?'}';

//Lexemas

LPAREN      : '(' ;
RPAREN      : ')' ;
LBRACK      : '[' ;
RBRACK      : ']' ;
LBRACE      : '{' ;
RBRACE      : '}' ;
PIPE        : '|' ;
DASH        : '-' ;
PLUS        : '+' ;
QUESTION    : '?' ;
STAR        : '*' ;
COMMA       : ',' ;
QUOTE       : '"' ;

CHAR        : [a-zA-Z] ;         // cualquier letra
NUMBER      : [0-9]+ ;

WS          : [ \t\r\n]+ -> skip ;
