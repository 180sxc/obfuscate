addEventListener("DOMContentLoaded", (event) => {
  console.log(`DOM loaded and is ready`)
  function getScript() {
    let input = document.getElementById("mainInput");
    let code = input?.value;
    return code;
  }

  class V1 {
    constructor(code) {
      this.code = code
      this.variables = {};
    }
    getVariables(code) {
      const regex = /\b(var|let|const)\s+([\w$]+)(\s*=\s*(.*))?;/g;
      let tmpVar = code.match(regex);
      tmpVar.forEach(e => {
        this.variables[e] = 1
      })
      return this.variables;
    }
    skimmed(code) {
      return code.replaceAll("\n", ";")
    }
    obfus(code){
      let splitChar = function(e){
        let tmpArr = []
        e.forEach(char => {
          tmpArr.push(char)
        })
      }
    }
    output() {
      let tmp = this.code;
      let skim = this.skimmed(tmp);
      return skim;
    }
  }
  function obfuscate(code) {
    let newCode = new V1(code);
    return newCode.output();
  }
  document.getElementById("start").onclick = function() {
    let code = getScript();
    let obfuscated = obfuscate(code);
    document.getElementById("mainInput").value = obfuscated;
  }
});
