function mySub() {
  var x = document.getElementById("xid").value;
  document.getElementsByClassName("animate")[0].style.right = x + "px";
  var y = document.getElementById("yid").value;
  document.getElementsByClassName("animate")[0].style.bottom = y + "px";
  var z = document.getElementById("zid").value;
  document.getElementsByClassName("animate")[0].style.left = z + "px";
  var j = document.getElementById("jid").value;
  document.getElementsByClassName("animate")[0].style.top = j + "px";
}
//var myVar = setInterval(myClick, 1000);
