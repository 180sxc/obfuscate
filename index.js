function init() {
  var editor = CodeMirror.fromTextArea(document.getElementById("mainInput"), {
    lineNumbers: true,
    mode: "javascript",
    indentUnit: 4,
    indentWithTabs: true,
    tabSize: 4,
    autoCloseBrackets: true,
    matchBrackets: true,
    styleActiveLine: true,
    theme: "dracula"
  });
}
init()
function getScript () {
  let input = document.getElementById("mainInput")
}

class V1 {
  constructor (code){
    this.code = code
    this.variables = {};
  }
  getVariables (code) {
    const regex = /\b(var|let|const)\s+([\w$]+)(\s*=\s*(.*))?;/g;
    let tmpVar = code.match(regex);
    tmpVar.forEach(e => {
      this.variables[e] = 1
    })
   return this.variables;
  }
}
function obfuscate (code) {
}
