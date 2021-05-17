var myptag = document.getElementsByTagName("p");
console.log(myptag);
console.log(myptag.item(1).innerHTML);
console.log(myptag.length);
console.log(myptag.namedItem("mytxt"));
var x=myptag.namedItem("mytxt");
console.log(x);
console.log(document.getElementsByTagName("*"));
function myDown(event) {
   // var txt =document.getElementById("name");
    txt.innerHTML=event.code;
    console.log(event);
    console.log(event.target);
    console.log(event.target.nodeName);
}
function myClick() {
    var txt =document.getElementById("box");
    // console.log(event);
    // console.log(event.screenX);
    txt.innerHTML=event.clientX;
}