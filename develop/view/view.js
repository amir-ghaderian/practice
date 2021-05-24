var attendees =
  '{"workers" :[' +
  '{"firstName":"ahmad" , "lastName":"mohammadi" , "age":23},' +
  '{"firstName":"hossein" , "lastName":"ahmadi" , "age":13},]}';
var obj = JSON.parse(attendees);
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

