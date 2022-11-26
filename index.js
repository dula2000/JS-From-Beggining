//window.alert("I love pizza");

/*  --------01. variable----------


1. declarations (var,let,const)



let name="dds";
let age = 22;
let studentage= 25;

console.log("Hello machan",name);
console.log("I am" ,age, "years old");
console.log(studentage);

document.getElementById("p1").innerHTML = "Hello " + name;
document.getElementById("p2").innerHTML = "Hello, I'm " +age+ " years old";
document.getElementById("p3").innerHTML = "student age is " +studentage;
*/

/* ----------02. User Inputs----------- 
 
  let username= window.prompt("Enter Your Name");

  window.alert("Your name is "+username);

*/
let userName;

document.getElementById("button1").onclick= function(){
    userName= document.getElementById("name1").value;
    window.alert(userName);
    document.getElementById("label1").innerHTML= "hello "+userName;
}