var a = document.getElementById("inicio");
a.innerHTML = "La primera con HTML, CSS y JS";

var article1 = document.getElementById("article1");
len = article1.childNodes.length;

/*function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}*/

var debug = document.getElementById("debug");
var variable = a;
debug.innerHTML = variable.attributes.item(0).nodeValue;

var fig_cap = document.getElementsByTagName("figcaption");
var imgs = document.getElementsByTagName("img");
var img1 = imgs[0];
var img2 = imgs[1];

function myFunction1(){
    fig_cap[0].innerHTML = "clicked";
}

function myFunction(){
    alert("akjsdf");
}

img1.addEventListener("click", myFunction);
img2.addEventListener("click", myFunction1);