function myFunction() {
  var copyText = document.getElementById("email");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
  
  var copy_tool = document.getElementById("copy_tool");
  copy_tool.innerHTML = "Copied: " + copyText.value;
}

function outFunc() {
  var copy_tool = document.getElementById("copy_tool");
  copy_tool.innerHTML = "Copy to clipboard";
}