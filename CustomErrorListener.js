class ErrorListener {
  syntaxError() {}
  reportAmbiguity() {}
  reportAttemptingFullContext() {}
  reportContextSensitivity() {}
}

class CustomErrorListener extends ErrorListener {
  syntaxError(recognizer, offendingSymbol, line, column, msg, err) {
    throw new Error(`Error de sintaxis en línea ${line}, columna ${column}: ${msg}`);
  }
}

module.exports = CustomErrorListener;

