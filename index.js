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


/*----------shuffle an array---------- 

let cards =["A","1","2","3","4","5","6","7","8","9","10"];
shuffle(cards);
//console.log(cards);
cards.forEach(card=>console.log(card));


function shuffle(array){
  let currentIndex = array.length;

  while(currentIndex !=0){
    let randomIndex = Math.floor(Math.random()* array.length);
    currentIndex -=1;

    let temp = array[currentIndex];
    array[currentIndex]= array[randomIndex];
    array[randomIndex]= temp;
  }
  return array;
}
 */

/*----------Map---------- 

const store = new Map([
  ["short", 30],
  ["shirt",30],
  ["pants", 30],
  ["socks",30],

]);

let shoppingCart =0;

store.set("hat",40);
store.delete("hat");
console.log(store.size);

store.forEach((value,key)=>console.log(`${key} $${value}`));

*/

/*----------objects--------- 


const car ={
 model: "benz",
  color : "red",
  year: 2020,

  drive : function(){
    console.log("driving");
  },

  paddle : function(){
    console.log("padle");
  }
}

const car22 ={
  model: "benz1",
   color : "red1",
   year: 2021,
 
   drive : function(){
     console.log("driving");
   },
 
   paddle : function(){
     console.log("padle");
   }
 }

car22.paddle();
*/

/*----------class--------- 

// class = a blueprint for creating objects define what properties and methods they have
//            use a constructor for unique properties.


class Player{
  score = 0;
  pause(){
    console.log("you passed the game");
  }
  exit(){
    console.log("You exited the game");
  }
}

const player1 = new Player();
const player2 = new Player();

player1.score +=1;

console.log(player1.score);
console.log(player2.score);

player1.pause();
player2.exit();
*/

/*----------constructors--------- 
// a special type of a class, accepts arguments and assign properties

class students{
  constructor(name,age,gpa){
    this.name=name;
    this.age=age;
    this.gpa= gpa;
  }
  study(){
    console.log(`${this.name} is studying`);
  }
}

const student1 = new students("dds",30,3.83);
const student2 = new students("desilva",22,3.93);

console.log(student2.name);
console.log(student2.age);
console.log(student2.gpa);

student2.study();
*/


/*----------inheritance--------- 
// a child class can inherit all the methods and roperties from another class


class animal{
  alive= true;
  eat(){
    console.log(`this ${this.name} eat`);
   }
   sleep(){
    console.log(`this ${this.name} sleep`);
   }
}

class Rabbit extends animal{

  name= "rabbit";

 run(){
  console.log(`this ${this.name} run`);
 }

}
 class Fish extends animal{
 
  name= "sam";

 
 swim(){
  console.log(`this ${this.name} swim`);
 }

}

const rabbit = new Rabbit();
const fish = new Fish();

console.log(rabbit.alive);
rabbit.eat();
rabbit.run();
fish.eat();
console.log(fish.alive);
fish.swim();

*/

/*----------super keyword--------- 

//    refers to the parent class.
//    commonly used to invoke constructor of a parent class

class animal{
 constructor(name,age){
  this.name= name;
  this.age=age;
 }
 
}

class Rabbit extends animal{
    constructor(name,age,speed){
      super(name,age);
      this.speed= speed;    
    }
 

}
 class Fish extends animal{
 
 constructor(name,age,fast){
  super(name,age);
  this.fast=fast;
 }

}

const rabbit= new Rabbit("ha ha",10,20);
const fish= new Fish("ha",20,30);
console.log(fish.name);
console.log(rabbit.speed);
*/

/*----------getters and setters--------- 

// get = binds an object property to a function 
//          when that property is accessed
// set = binds an object property to a function
//          when that property is assigned a value

class Car{
  constructor(power){
      this._gas = 25;
      this._power = power;
  }
  get power(){
      return `${this._power}hp`;
  }
  get gas(){
      return `${this._gas}L (${this._gas / 50 * 100}%)`;
  }
  set gas(value){
      if(value > 50){
          value = 50;
      }
      else if(value < 0){
          value = 0;
      }
      this._gas = value;
  }
}

let car = new Car(400);

car.gas = 100;

console.log(car.power);
console.log(car.gas);
*/


/*----------objects as arguments--------- 

class Car{

  constructor(model, year, color){
      this.model = model;
      this.year = year;
      this.color = color;
  }
}

const car1 = new Car("Mustang", 2023, "red",);
const car2 = new Car("Corvette", 2024, "blue");
const car3 = new Car("Lambo", 2022, "yellow",);

changeColor(car3, "gold");
displayInfo(car3);

function displayInfo(car){
  console.log(car.model);
  console.log(car.year);
  console.log(car.color);
}
function changeColor(car, color){
  car.color = color;
}

*/

/*----------Anonymous Objects--------- 

class Card{
    constructor(value, suit){
        this.value = value;
        this.suit = suit;
    }
}

let cards = [new Card("A", "Hearts"), 
             new Card("A", "Spades"), 
             new Card("A", "Diamonds"), 
             new Card("A", "Clubs"), 
             new Card("2", "Hearts"), 
             new Card("2", "Spades"), 
             new Card("2", "Diamonds"), 
             new Card("2", "Clubs")];

cards.forEach(card => console.log(`${card.value} ${card.suit}`));
*/


/*----------Error Handling--------- 

// error = object with a description of 
//             something that went wrong

// throw = executes a user-defined error

try{
  let x = window.prompt("Enter a #");
  x = Number(x);

  if(isNaN(x)) throw "That wasn't a number!";
  if(x == "") throw "That was empty!";

  console.log(`${x} is a number`);
}
catch(error){
  console.log(error);
}
finally{
  console.log("This always executes");
}

*/

/*----------SetTimeout()--------- 

// setTimeout() = invokes a function after a number of milliseconds            
//                            asynchronous function (doesn't pause execution) 

let item = "cryptocurrency";
let price = 420.69;

let timer1 = setTimeout(firstMessage, 3000, item, price);
let timer2 = setTimeout(secondMessage, 6000);
let timer3 = setTimeout(thirdMessage, 9000);

function firstMessage(item, price){
    alert(`Buy this ${item} for $${price}`);
}
function secondMessage(){
    alert(`This is not a scam!`);
}
function thirdMessage(){
    alert(`DO ITT!`);
}
document.getElementById("myButton").onclick = function(){
    clearTimeout(timer1);
    clearTimeout(timer2);
    clearTimeout(timer3);
    alert(`Thanks for buying!`);
}

*/

/*----------setInterval()--------- 

// setInterval() = invokes a function repeatedly after no. of milliseconds
//                          asynchronous function (doesn't pause execution)

let count =0;
let max = window.prompt("Enter the #");
max= Number(max);

setInterval(countUp,1000);

function countUp(){
  count+=1;
  console.log(count);
  if(count>=max){
    clearInterval(myTimer);
  }
}
*/

/*----------Date Objects--------- 
// The Date object is used to work with dates & times

let date = new Date();
//let date = new Date(0);
//let date = new Date(2023, 0, 1, 2, 3, 4, 5);
//let date = new Date("January 1, 2023 00:00:00");
/*
let year = date.getFullYear();
let dayOfMonth = date.getDate();
let dayOfWeek = date.getDay();
let month = date.getMonth();
let hour = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let ms = date.getMilliseconds();
*/
/*
date.setFullYear(2024);
date.setMonth(11);
date.setDate(31);
date.setHours(23);
date.setMinutes(1);
date.setSeconds(30);
date.setMilliseconds(0);


//date = date.toLocaleString();
document.getElementById("myLabel").innerHTML = formatTime(date);

function formatDate(date){
  let year= date.getFullYear();
  let month =  date.getMonth()+1;
  let day= date.getDate();

  return `${month}/${day}/${year}`
}

function formatTime(date){
  let hours= date.getHours();
  let minutes =  date.getMinutes()+1;
  let seconds= date.getSeconds();
  let amOrPm = (hours % 12) || 12;

  return `${hours}:${minutes}:${seconds} ${amOrPm}`
}
*/

/*----------asynchronous and synchronous --------- 

// synchronous code = In an ordered sequence.
//                                      Step-by-step linear instructions
//                                     (start now, finish now)
 
// asynchronous code = Out of sequence.
//                     Ex. Access a database
//                            Fetch a file
//                            Tasks that take time
//                     (start now, finish sometime later)


console.log("start");
setTimeout(()=>console.log("This is asynchronus"),5000);
console.log("END");
*/

/*----------console.time() --------- 

// console.time() = Starts a timer you can use to 
//                  track how long an operation takes
//                  Give each timer a unique name.

//start
console.time("Response time");

alert("CLICK THE OK BUTTON!");

//end
console.timeEnd("Response time");
Transcript
*/

/*----------promises--------- 

// promise = object that encapsulates the result of an asynchronous operation
//                   let asynchronous methods return values like synchronous methods
//                   "I promise to return something in the future"

//           the STATE is 'pending' then: 'fulfilled' or 'rejected'
//           the RESULT is what can be returned
//           2 parts producing & consuming

// ------------- Example 1 -------------
const promise = new Promise((resolve, reject) => {
 
  let fileLoaded = false;

  if(fileLoaded){
      resolve("File loaded");
  }
  else{
      reject("File NOT loaded");
  }
});

promise.then(value => console.log(value))
            .catch(error => console.log(error));

// ------------- Example 2 -------------
/*
const wait = time => new Promise(resolve => {
  setTimeout(resolve, time);
});

wait(3000).then(() => console.log("Thanks for waiting!"));
*/

/*----------async and await--------- 

// async = makes a function return a Promise
// await = makes a function wait for a Promise
 
async function loadFile(){
const promise = new Promise((resolve,reject)=>{
  let fileLoaded = true;

  if(fileLoaded){
      resolve("File loaded");
  }
  else{
       reject ("File NOT loaded");
  }
})

try{
  document.getElementById("myH1").innerHTML=await promise();
}
catch(error){
  document.getElementById("myH1").innerHTML=error;
}
}
loadFile();
*/


/*----------ES6 Module--------- */
//import {PI, getCircumference, getArea} from "./math_util.js";
import * as MathUtil from "./math_util.js";

console.log(MathUtil.PI);

let circumference = MathUtil.getCircumference(10);
console.log(circumference);

let area = MathUtil.getArea(10);
console.log(area);

/*----------CSS Element selector--------- */


/*
let element = document.getElementById("myTitle");
element.style.backgroundColor = "lightgreen";
*/
/*
let fruits = document.getElementsByName("fruits");
fruits.forEach(fruit => {
    if(fruit.checked){
        console.log(fruit.value);
    }
})
*/
/*
let vegetables = document.getElementsByTagName("li");
vegetables[0].style.backgroundColor = "lightgreen";
*/
/*
let desserts = document.getElementsByClassName("desserts");
desserts[0].style.backgroundColor = "lightgreen";
*/
/*
let element = document.querySelector("[for]");
element.style.backgroundColor = "lightgreen";
*/
/*
let elements = document.querySelectorAll("[for]");
elements.forEach(element => {
    element.style.backgroundColor = "lightgreen";
})
*/

/*----------add/change HTML selectors--------- 

// add/change HTML elements
// .innerHTML (vulnerable to XSS attacks)
// .textContent (more secure)

const nameTag = document.createElement("h1");
nameTag.textContent = window.prompt("enter your name");
document.body.append(nameTag);

//const myList = document.querySelector("#fruit");
//const listItem = document.createElement("li");
//listItem.textContent = "mango";
//myList.append(listItem);
//myList.prepend(listItem);
//myList.insertBefore(listItem, myList.getElementsByTagName("li")[1]);
*/

/*----------events-------- 

//const element = document.getElementById("myButton");
//const element = document.body;
//const element = document.getElementById("myText");
const element = document.getElementById("myDiv");

//element.onclick = doSomething;
//element.onload = doSomething;
//element.onchange = doSomething;
//element.onmouseover = doSomething;
//element.onmouseout = doSomethingElse;
element.onmousedown = doSomething;
element.onmouseup = doSomethingElse;

function doSomething(){
    //alert("You did something!");
    element.style.backgroundColor = "red";
}
function doSomethingElse(){
    //alert("You did something!");
    element.style.backgroundColor = "lightgreen";
}
*/

/*----------addEventListener()-------- */

// .addEventListener(event, function, useCapture)
// You can add many event handlers to one element.
// Even the same event that invokes different functions

const innerDiv = document.getElementById("innerDiv");
const outerDiv = document.getElementById("outerDiv");

innerDiv.addEventListener("click", changeBlue);
outerDiv.addEventListener("click", changeBlue, true);

function changeBlue(){
    alert(`You selected ${this.id}`);
    this.style.backgroundColor = "lightblue"
}


