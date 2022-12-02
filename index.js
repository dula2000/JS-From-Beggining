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

/*---------template literals---------- 

let username ="dds";
let items = 20;
let price= 30;

console.log('hello ${username}');
console.log('you have ${items} in your bag');
*/
/*------------format currency----------------- 


let myNum= 123;

myNum = myNum.toLocaleString(undefined,{style:"unit", unit:"celsius"});

console.log(myNum);

*/

/*----------Number Guessing Game---------- 

const answer= Math.floor(Math.random()*10 +1);
let guesses=0;

document.getElementById("submit").onclick= function(){
  let guess = document.getElementById("guessing").value
  guesses+=1;

  if(guess== answer){
    alert(`${answer} is the #. It took you ${guesses} guess`);
  }
  else if(guess<answer){
    alert("Too small");
  }
  else{
    alert("Too large");
  }

}
*/

/*-------temperature conversion--------- 

document.getElementById("submit").onclick= function(){

let temp;
if(document.getElementById("cbutton").checked){
   temp= document.getElementById("textBox").value;
   temp= Number(temp);
   temp = toCelsius(temp);
   document.getElementById("tempLabel").innerHTML= temp + "°C";

  }
else if(document.getElementById("fbutton").checked){
  temp= document.getElementById("textBox").value;
  temp= Number(temp);
  temp = toFahrenheit(temp);
  document.getElementById("tempLabel").innerHTML= temp + "°F";
}
else{
  document.getElementById("tempLabel").innerHTML= "Select a Unit";
}

}

function toCelsius(temp){
  return (temp-32) * (5/9);
}

function toFahrenheit(temp){
  return temp * 9/5 +32;
}
*/

/*-------------arrays------------ 

 let fruits= ["banana","apple","mango"];
 fruits.push("lemon");
 fruits.pop();
 fruits.unshift("orange"); //add values to beggining
 fruits.shift();  //removes values from beggining
 let index= fruits.indexOf("apple");
 console.log(fruits);
 console.log(index);
 fruits = fruits.sort().reverse();
for(let fruit of fruits){
 console.log(fruit);
}


let fruits= ["banana","apple","mango"];
let veg= ["carrots","potatoes","onions"];
let meats= ["beef","chicken","fish"];

let groceryList = [fruits,veg,meats];
groceryList[2][0] = "steak";

for(let list of groceryList){
  for(let food of list){
  console.log(food);
  }
}


//--------rest parameters-------

let a=4;
let b=3;
let c=2;
let d=1;

function sum(...numbers){
  let total=0;
  for(let number of numbers){
  total += number
  }
  return total
}
console.log(sum(a,b,c,d));


sum(2,3,displayDOM);

function sum(x,y,callBack){
  let result = x+y;
  callBack(result);
}

function displayConsole(output){
  console.log(output);
}
function displayDOM(output){
  document.getElementById("112").innerHTML= output;
}
*/

/*----------array.forEach()-------- 
let students = ["spongebob","pattrick","nissan"];
students.forEach(capitalize);
students.forEach(print);

function capitalize(element,index,array){
  array[index] = element[0].toUpperCase()+element.substring();

}

function print(element){
  console.log(element);
}
*/


/*----------array.map()-------- 

let numbers = [1,2,3,4,5];
let squares = numbers.map(square);
let cubes = numbers.map(cube);

cubes.forEach(print);

function square(element){
  return Math.pow(element,2);
}
function cube(element){
  return Math.pow(element,3);
}
function print(element){
  console.log(element);
}
*/


/*----------array.filters()-------- 

let ages=[18,20,12,34];
let adults= ages.filter(checkAge);

adults.forEach(print);

function checkAge(element){
  return element>=18;
}

function print(element){
  console.log(element);
}

*/

/*----------array.reduce()----------- 

let prices =[5,10,15,20];
let total = prices.reduce(checkOut);

console.log(`The total is: ${total}`);

function checkOut(total,element){
  return total+element;
}
*/


/*----------sort of an array number----------- 

let grades =[100,20,30,50,70,25];

grades = grades.sort(acendingSort);
grades.forEach(print);

function decendingSort(x,y){
  return y-x;
}

function acendingSort(x,y){
  return x-y;
}
function print(element){
  console.log(element);
}

*/


/*----------function expression---------- 

let count = 0;

document.getElementById("increase").onclick = function(){
  count+=1;
  document.getElementById("label").innerHTML=count;
}
document.getElementById("decrease").onclick = function(){
  count-=1;
  document.getElementById("label").innerHTML=count;
}
*/

/*----------arrow expression---------- 

// const greeting = (userName)=> console.log(`hello ${userName}`);
// greeting("duka");

const precent = (x,y)=> x/y *100;
 

console.log(`${precent(45,50)}`);
*/


/*----------shuffle an array---------- */
