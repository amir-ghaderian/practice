
var attendees =
  '{"workers" :[' +
  '{"firstName":"ahmad" , "lastName":"mohammadi" , "age":23},' +
  '{"firstName":"hossein" , "lastName":"ahmadi" , "age":13},]}';
  var obj = JSON.parse(attendees);
  document.getElementById("max").innerHTML =
    obj.workers[1].firstName + "  last name is:  " + obj.workers[1].lastName;