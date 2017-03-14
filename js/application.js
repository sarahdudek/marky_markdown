$(document).ready(function(){
  init();
});

function init(){
  $(".input").on("keyup", runMD);
}

function runMD(e){
  e.preventDefault();
  var md_content = $(this).val();
  // var md_content = transform(rawInput);
  html_content = markdown.toHTML( md_content );

  $(".output").html(html_content);
}

// function transform(input) {
//   var myBoldRegexp = /(\*\*)([^\*]*)(\*\*)/g;
//   var myUnderlineRegexp = /(\_)([^\*]*)(\_|\z)/g;
//   var myItalicsRegexp = /(\*)([^\*]*)(\*|\z)/g;

//   var firstComparison = input.replace(myBoldRegexp, "<b>$2</b>");
//   var secondComparison = firstComparison.replace(myUnderlineRegexp, "<u>$2</u>");
//   var newStr = secondComparison.replace(myItalicsRegexp, "<i>$2</i>");

//   return newStr
// }

// md_content = "Hello.\n\n* This is markdown.\n* It is fun\n* Love it or leave it."
// html_content = markdown.toHTML( md_content );

