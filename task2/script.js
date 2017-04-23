function draw() {
  document.getElementById("display").innerHTML = "";   //reset the div whenever new input draw request comes
  var num = document.getElementById("input").value;
  var count;
  var newLine = document.createElement("br");
  for(var i = 1; i <= num; i++)
  {
    count = (i-1)*2+1;
    for(var x = 0; x < count; x++)
    {
      document.getElementById("display").innerHTML += i;         // writing the number
    }
    document.getElementById("display").appendChild(newLine);        //breaking line
  }
  document.getElementById('display').setAttribute("align","center");     //setting the div to center
}
