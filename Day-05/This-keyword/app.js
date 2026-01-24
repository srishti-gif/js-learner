"use strict";
/*
-this keyword used to refer to the current objects 
- this depends on where it is being called globally it refer to the browser's window object
*/
console.log(`this is a ${this} keyword`); //this is a [object Window] keyword

/*
-inside an object
*/

let employe = {
  name: "srishti",
  age: 21,

  getAge: function () {
    return this.age;
  },
};

console.log(employe.getAge());

// example 2:
let tom = {
  name: "tom",
  age: 3,

  returnThis: function () {
    return this;
  },
};

let jerry = {
  name: "jerry",
  age: 4,

  returnThis: function () {
    return this;
  },
};

console.log(tom.returnThis()); // refers to tom's object
console.log(jerry.returnThis()); // refers to jerry's object

function getInfo(obj) {
  obj.logMessage = function () {
    console.log(`My Name is ${this.name} and I am ${this.age} years old`);
  };

  console.log(obj);
}

getInfo(tom);
tom.logMessage(); //My Name is tom and I am 3 years old

getInfo(jerry);
jerry.logMessage(); //My Name is jerry and I am 4 years old

/*Inside a stand-alone function.
-- in stand-alone function this keyword refers to where they are defined.
*/
function sayName() {
  console.log(`my name is`, this);
}
sayName();

/*
--
*/

function outer(a) {
  console.log("my outer functions takes value", this.a);
  return function inner(b) {
    console.log(`my inner function takes outers`, this.b);
  };
}

const out = outer(5);
out(3);

const getFood = () => this;
console.log(`this refers to global scope`, this);

const food = {
  name: "mango",
  color: "yellow",

  //getDesc: () => console.log(`${this.name} is of ${this.color}`), //undefined

  getDesc: function () {
    console.log(`${this.name} is of color ${this.color}`); //mango is of color yellow
  },
  //why ? because arrow function phele apne scope mai
  // dhekega kha defined hai uske baad it will look for its parent scope and parent ka data leta hai
};

console.log(food.getDesc());

//Explicit binding.. - call, bind , apply.

//call -method : used to refer a specific object to a function
function greetings() {
  console.log(`${this.name} lives in ${this.city}`);
}

let person = {
  name: "srishti",
  city: "delhi",
};

greetings.call(person);

//function with parameter..
likes = function (hobby1, hobby2) {
  console.log(`${this.name} likes ` + hobby1 + " and " + hobby2);
};

likes.call(person, "sleeping", "eating"); //srishti likes sleeping and eating

//apply -method used when we need to pass large number of arguments rest works same as call method
const hobbiesToApply = ["sleeping", "eating"];
likes.apply(person, hobbiesToApply); //srishti likes sleeping and eating

//bind(): is used when we want to exceute the function later point in point based on some condition

newFunction = likes.bind(person, "sleeping", "eating");

//bind - returns a new function
newFunction();

const user = {
  name: "Alex",
  greet() {
    return () => {
      console.log(this.name);
    };
  },
};

const fn = user.greet();
fn(); //Alex ? because arrow function does not have there own this they copy this from there parent

function greet() {
  console.log(this.name);
}

const user1 = {
  name: "Alex",
};

const boundGreet = greet.bind(user1);

boundGreet.call({ name: "Bob" });
/*
Alex"
Why?
bind(person) permanently fixes this
Once bound, call / apply cannot change it
*/
