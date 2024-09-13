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
      this.atxt = [
  " ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/",
  "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ":", ";", "<", "=", ">",
  "?", "@", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
  "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "[", "\\",
  "]", "^", "_", "`", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
  "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
  "{", "|", "}", "~"
];
      this.variables = {};
      this.fArr = [];
      this.finalTxt = "";
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
          tmpArr.push({char: char})
        })
        return tmpArr;
      }//get link
      let splitc = splitChar(code)
      for(let i = 0; i<splitc.length; i++){
        let link = splitc[i];//
        let obfusChar = this.atxt.find(e=> e == link.char)
        let fChar = this.atxt.indexOf(obfusChar);
        this.fArr.push(fChar);
      }
    }
    makeid(length) {
      let result = '';
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const charactersLength = characters.length;
      let counter = 0;
      while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
      }
      return result;
    }
    getOutput(Arr){
      function setVariable () {
        let newAtxt = "let x01"+this.makeid(24)+" = "+this.atxt;
        return newAtxt;
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
