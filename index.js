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
    theme: "dracula"
  });
}
function getScript () {
  let input = document.getElementById("mainInput")
}
