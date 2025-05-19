// Generated from gramatica.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,17,77,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,
12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,
3,1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,7,1,8,1,8,1,9,1,9,1,10,1,10,1,11,1,11,1,
12,1,12,1,13,1,13,1,14,1,14,1,15,4,15,67,8,15,11,15,12,15,68,1,16,4,16,72,
8,16,11,16,12,16,73,1,16,1,16,0,0,17,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,
17,9,19,10,21,11,23,12,25,13,27,14,29,15,31,16,33,17,1,0,3,2,0,65,90,97,
122,1,0,48,57,3,0,9,10,13,13,32,32,78,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,
0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,
0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,
29,1,0,0,0,0,31,1,0,0,0,0,33,1,0,0,0,1,35,1,0,0,0,3,37,1,0,0,0,5,39,1,0,
0,0,7,41,1,0,0,0,9,43,1,0,0,0,11,45,1,0,0,0,13,47,1,0,0,0,15,49,1,0,0,0,
17,51,1,0,0,0,19,53,1,0,0,0,21,55,1,0,0,0,23,57,1,0,0,0,25,59,1,0,0,0,27,
61,1,0,0,0,29,63,1,0,0,0,31,66,1,0,0,0,33,71,1,0,0,0,35,36,5,94,0,0,36,2,
1,0,0,0,37,38,5,40,0,0,38,4,1,0,0,0,39,40,5,41,0,0,40,6,1,0,0,0,41,42,5,
91,0,0,42,8,1,0,0,0,43,44,5,93,0,0,44,10,1,0,0,0,45,46,5,123,0,0,46,12,1,
0,0,0,47,48,5,125,0,0,48,14,1,0,0,0,49,50,5,124,0,0,50,16,1,0,0,0,51,52,
5,45,0,0,52,18,1,0,0,0,53,54,5,43,0,0,54,20,1,0,0,0,55,56,5,63,0,0,56,22,
1,0,0,0,57,58,5,42,0,0,58,24,1,0,0,0,59,60,5,44,0,0,60,26,1,0,0,0,61,62,
5,34,0,0,62,28,1,0,0,0,63,64,7,0,0,0,64,30,1,0,0,0,65,67,7,1,0,0,66,65,1,
0,0,0,67,68,1,0,0,0,68,66,1,0,0,0,68,69,1,0,0,0,69,32,1,0,0,0,70,72,7,2,
0,0,71,70,1,0,0,0,72,73,1,0,0,0,73,71,1,0,0,0,73,74,1,0,0,0,74,75,1,0,0,
0,75,76,6,16,0,0,76,34,1,0,0,0,3,0,68,73,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class gramaticaLexer extends antlr4.Lexer {

    static grammarFileName = "gramatica.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'^'", "'('", "')'", "'['", "']'", "'{'", 
                         "'}'", "'|'", "'-'", "'+'", "'?'", "'*'", "','", 
                         "'\"'" ];
	static symbolicNames = [ null, null, "LPAREN", "RPAREN", "LBRACK", "RBRACK", 
                          "LBRACE", "RBRACE", "PIPE", "DASH", "PLUS", "QUESTION", 
                          "STAR", "COMMA", "QUOTE", "CHAR", "NUMBER", "WS" ];
	static ruleNames = [ "T__0", "LPAREN", "RPAREN", "LBRACK", "RBRACK", "LBRACE", 
                      "RBRACE", "PIPE", "DASH", "PLUS", "QUESTION", "STAR", 
                      "COMMA", "QUOTE", "CHAR", "NUMBER", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

gramaticaLexer.EOF = antlr4.Token.EOF;
gramaticaLexer.T__0 = 1;
gramaticaLexer.LPAREN = 2;
gramaticaLexer.RPAREN = 3;
gramaticaLexer.LBRACK = 4;
gramaticaLexer.RBRACK = 5;
gramaticaLexer.LBRACE = 6;
gramaticaLexer.RBRACE = 7;
gramaticaLexer.PIPE = 8;
gramaticaLexer.DASH = 9;
gramaticaLexer.PLUS = 10;
gramaticaLexer.QUESTION = 11;
gramaticaLexer.STAR = 12;
gramaticaLexer.COMMA = 13;
gramaticaLexer.QUOTE = 14;
gramaticaLexer.CHAR = 15;
gramaticaLexer.NUMBER = 16;
gramaticaLexer.WS = 17;



