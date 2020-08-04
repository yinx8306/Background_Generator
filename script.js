var css=document.querySelector("h3");
var Leftcolor=document.querySelector(".leftcolor");
var Rightcolor=document.querySelector(".rightcolor");
var body=document.getElementById("background");

setbackgroungcolor()

function setbackgroungcolor(){
body.style.background="linear-gradient(to right,"+ Leftcolor.value +","+Rightcolor.value+")";
css.innerHTML=body.style.background;
}

Leftcolor.addEventListener("input", setbackgroungcolor)
Rightcolor.addEventListener("input", setbackgroungcolor)