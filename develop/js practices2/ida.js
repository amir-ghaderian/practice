var iPro = Math.pow(2, 3);
console.log(iPro);

var myMark = prompt("enter a number between 0 to 20");
if (myMark > 10) {
  console.log(" qualafied");
} else {
  console.log("not qualafied");
}
console.log(myMark);

var date = new Date();
var today = date.getDay();
switch (today) {
  case 1:
    console.log("mon");
    break;
  case 2:
    document.write("tus");
    break;
  case 3:
    document.write("wen");
    break;
  case 4:
    document.write("tur");
    break;
  case 5:
    document.write("fri");
    break;
  case 6:
    document.write("sat");
    break;
  case 7:
    document.write("sun");
    break;
  default:
    document.write("error");
}
console.log(console.log);

for (let count = 0; count < 20; count += 1) {
  document.write("Hola <br>");
}

for (let myLOgo = 0; myLOgo < 7; myLOgo++) {
  document.write("your exam was" + myLOgo + "<br />");
}

let b = 0;
while (b <= 6) {
  document.write("the number is :" + b);
  document.write("<br />");
  b++;
}

var f = 0;
do {
  console.log("new test");
  f++;
} while (f <= 4);

window.onload = function () {
  window.alert("I'm done loading now!");
};

let members = ["hassan", "hosein"];

let memberObj = { age: 30, name: "hassan", grade: 3 };
console.log(
  memberObj.name + " is " + memberObj.age + " from grade " + memberObj.grade
);

var t = 4;
var q = "amber";
var z = t + q;
console.log(z);

function check() {
  var age = document.getElementsByClassName("age")[0].value;
  var myError = document.getElementById("error");

  try {
    if (isNaN(age)) throw "invalid";
    age = Number(age);
    if (age < 18) throw "not allowed to join";
  } catch (error) {
    myError.innerHTML = error;
  } finally {
  }
}
