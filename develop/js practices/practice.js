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

var refresh = "refresh this page";
document.write(refresh);
console.log(refresh);

function myFunc() {
  alert(4);
}