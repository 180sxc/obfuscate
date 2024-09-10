function init () {
  var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
    lineNumbers: true,
    mode: "javascript",
    indentUnit: 4,
    indentWithTabs: true,
    tabSize: 4,
    autoCloseBrackets: true,
    matchBrackets: true,
    styleActiveLine: true,
    theme: "nord"
  });
}
init();
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
   const variables = {};

   let match;
   while ((match = regex.exec(code)) !== null) {
     const variableName = match[2];
     const initialValue = match[4];
     variables[variableName] = initialValue;
   }
   return variables;
  }
}
function obfuscate (code) {
}
