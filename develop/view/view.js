var paragraph = document.createElement("p1");
var node = document.createTextNode("This is new p ");
paragraph.appendChild(node);
var element = document.getElementById("div1");
element.appendChild(paragraph);

var para = document.createElement("p3");
var node1 = document.createTextNode("wellcome");
para.insertBefore(node1);
var trick = document.getElementById("slight");
trick.insertBefore(para,child);
