function hello(){
alert("Hello ");
}

function hello1(){
x=prompt("Enter your name:");
alert("Welcome " + x +".");
}

function goodbye(){
alert("Are you sure to leave?");
alert("Good bye");
}


function pop(){
alert("Yuo just click me !");
}

function calculate(){
var x = parseInt(document.getElementById("value1").value);
var y = parseInt(document.getElementById("value2").value);

document.getElementById("add").value = (x+y);
document.getElementById("sub").value = (x-y);
document.getElementById("mul").value = (x*y);
document.getElementById("div").value = (x/y);
document.getElementById("mod").value = (x%y);
document.getElementById("sqr").value = (x*x);
document.getElementById("sqr1").value = (y*y);
}

function clr(){
document.getElementById("add").value = "";
document.getElementById("sub").value = "";
document.getElementById("mul").value = "";
document.getElementById("div").value = "";
document.getElementById("mod").value = "";
document.getElementById("sqr").value = "";
document.getElementById("sqr1").value = "";
document.getElementById("value1").value = "";
document.getElementById("value2").value = "";
}
