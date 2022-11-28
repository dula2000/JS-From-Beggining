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


let userName;

document.getElementById("button1").onclick= function(){
    userName= document.getElementById("name1").value;
    window.alert(userName);
    document.getElementById("label1").innerHTML= "hello "+userName;
}
*/
/* --------hypentenuse calculation------------

let a;
let b;
let c;

a= window.prompt("Enter the height ");
a= Number(a);

b=window.prompt("Enter the width ");
b=Number(b);

c= Math.sqrt(Math.pow(a,2) + Math.pow(b,2));


//Another way by using html tags
document.getElementById("button1").onclick = function(){
    let a;
let b;
let c;

a= document.getElementById("a").value;
a= Number(a);

b= document.getElementById("b").value;
b=Number(b);

c= Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
document.getElementById("label1").innerHTML =  +c;

}
*/

/* ----------Counter Program------------

let Count =0;

document.getElementById("decrease").onclick = function(){
  Count-=1;
  document.getElementById("counter").innerHTML=Count;
}

document.getElementById("increase").onclick = function(){
  Count+=1;
  document.getElementById("counter").innerHTML=Count;
}

document.getElementById("reset").onclick = function(){
  Count=0;
  document.getElementById("counter").innerHTML=Count;
}

*/

/*---------Checked Property------------- 

document.getElementById("subcribe").onclick = function(){

  const myCheckBox= document.getElementById("mycheck");
  const visa= document.getElementById("visa");
  const master= document.getElementById("master");

  if(mycheck.checked){
     window.alert("You are subcribe");
  }
  else{
window.alert("You are not");
  }
if(visa.checked){
  window.alert("visa");
}
else if(master.checked){
window.alert("master");
}
else{
  window.alert("none of select")
}

}
*/
/*-----------Switches---------- 

let grade=95;
switch(true){
  case grade>=90:
    window.alert("You have A");
    break;
  case grade>=80:
      window.alert("You have B");
      break;
  case grade>=70:
        window.alert("You have C");
        break;
  case grade>=60:
          window.alert("You have D");
          break;
  case grade>=50:
            window.alert("You have F");
            break;
  default:
    window.alert("no");

}
*/