var attendees =
  '{"workers" :[' +
  '{"firstName":"ahmad" , "lastName":"mohammadi" , "age":23},' +
  '{"firstName":"hossein" , "lastName":"ahmadi" , "age":13}]}';
var obj = JSON.parse(attendees);

console.log(obj);

//  workers[1]
document.getElementById("max").innerHTML =
  obj.workers[1].firstName + "  last name is:  " + obj.workers[1].lastName;

class trick {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}
myTrick = new trick("ida", 2001);
document.getElementById("grand").innerHTML = myTrick.name + "" + myTrick.year;

//  {"players":
//  [ "book": "mohakeme",
//   "name": "hassan"]
// };

var d = new Date(1400/3/5);
document.getElementById("crave").innerHTML = d;

document.getElementById("crave1").innerHTML = Math.random();

document.getElementById("crave1").innerHTML =Math.floor( Math.random()*8);

function myWidth(){document.getElementById("type").value;
if (isNaN){alert("undefined");}}

