// var a=2;
// for(var i=0 ; i < 5; i++){
// a++
// }
// alert(a);
// var x=Math.round(3.657758);
// console.log(x);
// var x=Math.pow(2,4);
// alert(x);
// var x= Math.min(1,43,7,68,7,98,8,0,90,9,9,0,0,9,076,8,67,5,6,7,);
// console.log(x);
// var h=Math.floor(h=Math.random(23)*14);
// console.log(h);
// var txt='amir hast ye oshgool';
// console.log(txt.indexOf('oshgool'));

// console.log(txt.search('اداری'));
// console.log(txt.slice(-42,-7));
// console.log(txt.substring(5,34));
// console.log(txt.toLocaleUpperCase())
// console.log(txt.trim(3,6));
// var txt = ["انواع مانتو جدید ارزان قیمت شیک رسمی اسپرت اداری پاییزه بهاره مدل کوتاه بلند گرم 'کیفیت', بی نظیر وارداتی کم هزینه 'استانبول', گرگا"] 
// document.write("امیرخان قادری خان خان ها");
 var txt ="امیرخان قادری خان خان ";
document.write(txt);
var doci = document.getElementsByTagName("p");
console.log(doci);
 var myptag = document.getElementsByClassName("x");
 console.log(myptag);
 var myptag = document.getElementById("y")
 console.log(myptag);
 document.getElementById("y").innerHTML = "یا سید آل محمد";
 var mypcolor = document.getElementById("x");
 document.getElementById("y").style.color = "red";
 document.getElementById("y").style.fontSize = "2em";
 document.getElementById("y").align = "center";
 var mycont = document.querySelectorAll(".container");
 console.log(mycont);
 var jj = document.querySelectorAll(".x");
 console.log(jj);
 document.getElementById("y").setAttribute("display","");
 function asghar() {
     alert("خطا");
 }
 function myvalue() {
     var name =document.getElementsByClassName("name")[0].value ;
    ElementById("y").innerHTML = name;
     document.getElementsByClassName("name")[0].value="";
 }
 function MouseOver() {
     document.getElementById("box4").style.background = "red";
 }
 function MouseOut() {
     document.getElementById("box4").style.background = "yellow";
 }
 function Mousedown() {
     document.getElementById("box5").style.background = "yellow";
 }
 function MouseUp() {
     document.getElementById("box5").style.background = "red";
 }
function FocusIn() {
    document.getElementById("name1").style.background = "pink";
}
function FocusOut() {
    document.getElementById("name1").style.background = "red";
}
function KayUp() {
    var box5 = document.getElementById("name1").value;
   var name =  document.getElementById("y").innerHTML = box5;
}
function check() {
    var myForm = document.forms["checkFrom"];
    var myName = myForm["name"].value;
   if (myName.lenght=="") {
       alert("نام")
   }
}
