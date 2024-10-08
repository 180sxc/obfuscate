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
      this.atxt = [" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ":", ";", "<", "=", ">", "?", "@", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M","N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "[", "\\","]", "^", "_", "`", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k","l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z","{", "|", "}", "~"];
      this.variables = {};
    }
    skimmed(code) {
      return code.replaceAll("\n", ";")
    }
    obfus(code){
      let farr = [];
      let splitChar = function(e){
        let tmpArr = []
        for(let i = 0; i < e.length; i++){
          let char = e[i]
          tmpArr.push({char: char})
        }
        console.log(tmpArr)
        return tmpArr;
      }//get link
      let splitc = splitChar(code)
      for(let i = 0; i<splitc.length; i++){
        let link = splitc[i];//
        let obfusChar = this.atxt.find(e=> e == link.char)
        let fChar = this.atxt.indexOf(obfusChar);
        farr.push(fChar);
      }
      console.log(farr)
      return farr;
    }
    makeid(length) {
      let result = '';
      const characters = "কখগঘঙচছজঝঞটঠডঢণনধদথতপফবভমহসষশলরযয়ড়ঢ়"//'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const charactersLength = characters.length;
      let counter = 0;
      while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
      }
      return result;
    }
    getOutput(Arr){
      const setVariable = () => {
        let vri = this.makeid(24)
        let newAtxt = "x01" + vri
        return newAtxt;
      }
      const getObfusLink = () => {//sigma
        let vari = setVariable()
        let chunk = "";
        for(let i = 0; i < Arr.length; i++){
          let indexes = Arr[i];
          let str = vari + "[" + indexes +"]"
          chunk += str;
          if (i < Arr.length - 1) {
            chunk += "+";
          }
        }
        let im = '"`"'
        let variableggwpsigmaohiorizz = `let ${vari} = [" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ":", ";", "<", "=", ">", "?", "@", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M","N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "[", "\\","]", "^", "_", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k","l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z","{", "|", "}", "~"];`
        return [chunk, variableggwpsigmaohiorizz]
      }
      return getObfusLink();
    }
    output() {
      let tmp = this.code;
      let t = this.getOutput(this.obfus(tmp))
      return t;
    }
  }
  function obfuscate(code) {
    let newCode = new V1(code);
    return newCode.output();
  }
  document.getElementById("start").onclick = function() {
    let code = getScript();
    let obfuscated = obfuscate(code);
    document.getElementById("mainOutput").value = obfuscated[0];
    document.getElementById("variable").value = obfuscated[1];
  }
});
