function mySub() {
  let myBallPlace = [22, 51, 53, 77, 3];
  let randomPlace = myBallPlace[Math.floor(Math.random() * myBallPlace.length)];

  var x = document.getElementById("xid").value;
  document.getElementsByClassName("ball")[0].style.right = x + "px";

  var y = document.getElementById("yid").value;
  document.getElementsByClassName("ball")[0].style.bottom = y + "px";
}
//var myVar = setInterval(myClick, 1000);
function plan() {
  let myBallCollors = [
    "red",
    "blue",
    "pink",
    "white",
    "black",
    "yellow",
    "green",
  ];
  let randomColor =
    myBallCollors[Math.floor(Math.random() * myBallCollors.length)];
  document.getElementsByClassName("ball")[0].style.background = randomColor;
}
