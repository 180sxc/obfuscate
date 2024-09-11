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
function getScript () {
  let input = document.getElementById("mainInput");
  let code = input?.value;
  return code;
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
  skimmed (code) {
    return code.replaceAll("\n", ";")
  }
  output () {
    let tmp = this.code;
    let skim = this.skimmed(tmp);
    return skim;
  }
}
function obfuscate (code) {
  let newCode = new V1(code);
  return newCode.output();
}
document.getElementById("start").onclick = function(){
  let code = getScript();
  let obfuscated = obfuscate(code);
  document.getElementById("mainInput").value = obfuscated;
}
