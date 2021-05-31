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
