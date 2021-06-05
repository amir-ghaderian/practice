//var myPTag = document.createElement("p");
//var myText = document.createTextNode("hello every body");
//myPTag.appendChild(myText);

//var firstText = document.body.getElementsByTagName("p")[0];
//document.body.removeChild(firstText);

var rainBow = new Date();
var myDay = rainBow.getHours();
document.write(myDay);
var mins = rainBow.getMinutes();
document.write(mins);
var sec = rainBow.getSeconds();
document.write(sec);

var truck;
function openWindow() {
  truck = window.open(
    "https://www.w3schools.com",
    "w3school",
    "width=500px",
    "height=500px"
  );
}
function resizeWindow() {
  truck.resizeTo(500, 800);
}

function closeWindow() {
  if (truck) {
    truck.close;
  }
}
function windowPrint() {
  window.print();
}
function windowLoad() {
  window.location.reload();
}
function goToSchoolSite() {
  window.location.replace("https://www.w3schools.com");
}
var ball = new Date();
console.log(ball);

var ball2 = new Date();
ball2.setFullYear(2002);
console.log(ball2.getFullYear());

var ball2 = new Date();
ball2.setFullYear(2002);
console.log(typeof ball2.getFullYear());

function userTime() {
  var ball = new Date();
  if (ball.getMinutes() < 28) {
    console.log("you can use course");
  } else {
    console.log("you can not use course");
  }
}
var userSetInterval = setInterval("userTime()", 1000);
