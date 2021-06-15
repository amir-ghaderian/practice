//var myDay = Date();
//document.write(myDay);
//function myDay1(myCar, myPlace) {
//let myCar = "BMW";
//let myPlace = "Melborn";
//console.log("my car is" + myCar + "and i drive to " + myPlace + ;
//}
//function myNewInterval() {
//window.alert("hi");
//}
//window.setInterval("myNewInterval", 10000);
var myLi = document.getElementById("myLi");
var liNode = document.createElement("li");
var newLi = document.createTextNode("6");
liNode.appendChild(newLi);
myList.appendChild(liNode);
var insertHere = document.getElementById("insertHere");
myList.insertBefore(liNode, insertHere);
function myRemove() {
  var max = document.getElementById("max");
  max.remove();
}
