// comments are just with slash
console.log("ida");
console.log(2 + 3);

let girlsName = "martina";
girlsName = "sara";
girlsName = "fateme";
console.log(girlsName);

const boyName = "amir";
//boyName = "ali"; const never changes
console.log(boyName);

let age = 32;

//types: string and number
// bool and undefined and null

let admin = true;
console.log(admin);

let myName = null;
console.log(myName);

console.log(typeof myName);
console.log(typeof boyName);
console.log(typeof admin);
console.log(typeof age);

let fName;
console.log(fName);

let student = {
  name: "ali",
  age: 35,
  job: "asshole",
};
console.log(student);
console.log(student["job"]);
console.log(student.age);

let emploees = ["mahmood", "hamed"];
console.log(emploees);
console.log(emploees[0]);
emploees[2] = "amirhossein";
emploees[0] = "andy";
emploees[3] = "56";
emploees[4] = "true";
console.log(emploees);
console.log(emploees.length);

function greet(foroshande, kharidar) {
  let car = "BMW";
  console.log(car);
  console.log(kharidar + " is is buying a " + car);
}
greet("client", "ali");

function square(number) {
  return Number * Number;
}
let newCalc = square(4);
console.log(newCalc);

function person1(input) {
  return input;
}
let max1 = person1(3);
console.log(max1);
