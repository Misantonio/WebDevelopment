document.write("<h1>Hello world!</h1>");
document.writeln("Hello world!<br><br>");
var x=100.55;
document.writeln(x,"<br><br>");

var name='Misael Antonio';
document.writeln(name,"<br><br>");

var saludo="Hello world! \'I am a JavaScript programmer\' ";
document.writeln(saludo,"<br><br>");

var i=2*3;
document.writeln(i,"<br><br>");

var age = 18;
var isAdult = (age<18)? "Too young":"Old enough";
document.write(isAdult,"<br><br>");

var cond1=true;
var hola=true;

function myAlert(name){
    alert("This is an alert box. \n"+name);
}

if (hola==cond1){
    document.write(9.0===9,"<br><br>");
    myAlert("Misael");
}

var user = prompt("What's your name","Type your name here");

if (user==null || user=="Type your name here"){
    alert("You are not allowed to see the content of the page.");
} else {
    alert("Welcome "+user);
}

var result = confirm("Want to leave?");
if(result==true){
    alert("Thanks for visiting");
    open();
    close();
    
} else {
    alert("Thanks for staying");
}

function person(name,age,color){
    this.name = name;
    this.age = age;
    this.color = color;
    this.changeName = function(name){
        this.name = name;
    }
}

var p1 = new person("John",42,"Green");
var p2 = new person("Amy",21,"red");

document.write(p1.age,"<br><br>");
document.write(p2.name,"<br><br>");
p2.changeName("Misael");
document.write(p2.name,"<br><br>");

var courses = new Array("HTML","CSS","JS","PHP");
var other_courses = ["HTML","CSS","JS","PHP"];
var persona=[];
persona["nombre"]="John";
persona["age"]=23;

document.write(Math.PI,"<br><br>");

function printTime(){
    var d=new Date();
    var hours=d.getHours();
    var mins=d.getMinutes();
    var sec=d.getSeconds();
    //document.body.innerHTML=hours+":"+mins+":"+sec;
}
setInterval(printTime,1000);