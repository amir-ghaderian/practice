function myValue() {
  var details = document.getElementsByClassName("details")[0].value;
  alert(details);
}

function myBox() {
  var box = (document.getElementById("box").style.background = "red");
}

function myMouse() {
  var box = (document.getElementById("box").style.background = "aqua");
}
function myBox2() {
  var box2 = (document.getElementById("box2").style.background = "black");
}

function myMouse2() {
  var box2 = (document.getElementById("box2").style.background = "pink");
}
function myFocus() {
  var example = (document.getElementById("example").style.background = "blue");
}
function myFocus2() {
  var example = (document.getElementById("example").style.background = "white");
}
function myText() {
  alert(1);
}
function newText() {
  alert(2);
}

var cars = ["audi", "BMW", "Benz", "ferrari"];
console.log(cars);

var foods = ["pizza", "sandwich", "soup"];
console.log(foods);

var workers = ["ali", "hasan", "hosein"];
console.log(workers);

var Specifications = {
  firstName: "ida",
  lastName: "amiri",
  age: 19,
  homeTown: "Iran",
};
console.log(Specifications);

var homeTown = "Iran";

if (homeTown == "America") {
  console.log("you are qualafied");
} else if (homeTown == "Germany") {
  console.log("you are qualafied");
} else {
  console.log("you are not qualafied");
}
var i = "4";
while (i.length < 14) {
  i = i + "@";
  console.log(i);
}

var aArray = ["mohammad", "amin", "hasan", "hosein"];
console.log(aArray);

var bArray = ["mohammad", "amin", "hasan", "hosein"];
console.log(bArray.pop());

var cArray = ["mohammad", "amin", "hasan", "hosein"];
cArray.push("ali");
console.log(cArray);

var dArray = ["mohammad", "amin", "hasan", "hosein"];
console.log(cArray.shift());

var eArray = ["mohammad", "amin", "hasan", "hosein"];
eArray.shift(eArray);
console.log(eArray);

var fArray = ["mohammad", "amin", "hasan", "hosein"];
fArray.pop(fArray);
console.log(fArray);

var gArray = ["mohammad", "amin", "hasan", "hosein"];
gArray.unshift("amir");
console.log(gArray);

var hArray = ["mohammad", "amin", "hasan", "hosein"];
delete hArray[1];
console.log(hArray);

var iArray = ["mohammad", "amin", "hasan", "hosein"];
iArray.reverse(iArray);
console.log(iArray);

var jArray = ["mohammad", "amin", "hasan", "hosein"];
jArray.push("hamid");
console.log(jArray.sort());

var kArray = ["mohammad", "amin", "hasan", "hosein"];
kArray.push("ida");
kArray.reverse(kArray);
console.log(kArray.slice(2));

var mArray = ["mohammad", "amin", "hasan", "hosein"];
var nArray = ["volvo", "ferrari", "benz", "BMW"];
console.log(mArray.concat(nArray));

function aFunction() {
  var z = x + y;
  console.log(z);
}
aFunction((x = 4), (y = 7));

var a = (document.getElementById("try").innerHTML = 'hello');
console.log(a);
