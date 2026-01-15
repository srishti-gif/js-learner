//var and can be hoisted..
console.log("my name is", name);

var name = "srishti";

console.log("my name is", name);

// let gives an reference error when hoisted
// //because memory is allocated and in temporal dead zone..
// //temporal dead zone - an area where we cannot access a varible before its initlization..
console.log("my age is", age);

let age;
age = 12;
console.log(age);

// let gives an reference error when hoisted
// because memory is allocated and in temporal dead zone..
// temporal dead zone - an area where we cannot access a varible before its initlization..
console.log("i live in", city);

const city = "delhi";

console.log(city);

//functional hoisting..
sum(2, 3);
console.log(sum);

function sum(a, b) {
  console.log(a + b);
}

sum(2, 3);
console.log();

// var hoisting..
// age();
// var age = function () {
//   console.log("my age is", age);
// };
// age();
// output Uncaught TypeError: age is not a function
// at app.js:31:1

// let hoisting..
// check();
let check = function () {
  console.log("i am a check function");
};

check();

// const hoisiting..
check2();

const check2 = function () {
  console.log("i am a const check function");
};

check2();
