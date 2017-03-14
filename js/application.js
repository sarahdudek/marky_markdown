// view for boxes
// rawSide -->
// mdSide
console.log("hi")
 // bind something to input area keyup
 // function to check the text markdownability (AJAX stuff)
// for italics (\*|\_)([^\*]*)(\*|\_|\z)
// specs: *, _, **

// function mdChecker(textInput) {
//   if (){

//   } else if (){

//   } else if(){

//   }
// }

$(document).ready(function(){
  init();
});

function init(){
  $(".input").on("keyup", runMD);
}

// for bold /(\*\*)([^\*]*)(\*\*|\z)

function runMD(e){
  e.preventDefault();
  var rawInput = $(this).val();
  var input = transform(rawInput);
  $(".output").html(input);
}

function transform(input) {
  var myBoldRegexp = /(\*\*)([^\*]*)(\*\*)/g;
  var myUnderlineRegexp = /(\_)([^\*]*)(\_|\z)/g;
  var myItalicsRegexp = /(\*)([^\*]*)(\*|\z)/g;
  // var match = input.match(myBoldRegexp)
  //     // var match = myRegexp.exec(input);
  //     debugger
  // var newstr = input.replace(match, "!")
  // return newstr;

  var firstComparison = input.replace(myBoldRegexp, "<b>$2</b>");
  var secondComparison = firstComparison.replace(myUnderlineRegexp, "<u>$2</u>");
  var newStr = secondComparison.replace(myItalicsRegexp, "<i>$2</i>");

  return newStr
}


// Hello *Al* nice day, **right**? _poop_
