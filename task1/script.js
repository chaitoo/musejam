function cleared() {
  $('#textbox').removeClass('wrong');
  $('#textbox').removeClass('correct');
  document.getElementById("response").innerHTML = "" ;
  document.getElementById("textbox").value= "";
}
function check() {
  var message = document.getElementById("response")
  var text = document.getElementById("textbox").value;
  var regex = /\w+a\wr\w+/
  /*
    Here we are checking that a_r is present inside the string .
    \w+ ensures that any alphanumeric comes any number of times.
  */
  if(regex.test(text))
  {
    $('#textbox').removeClass('wrong');
    $('#textbox').addClass('correct');

    message.innerHTML = "String entered is in correct format" ;
  }
  else {
    $('#textbox').removeClass('correct');
    $('#textbox').addClass('wrong');
    message.innerHTML = "Please enter the name which contains a_r" ;
  }
}
