function print() {
  console.log("hello");
}

print();

//function as expression..
let printme = function () {
  console.log("printme");
};
printme();

//function and arguments..
function sum(a, b) {
  let res = a + b;
  //console.log(res);
  return res;
}

let s = sum(10, 2);
console.log(s);

//default parameter
function calc(a, b = 0) {
  return 2 * (a + b);
}

let varres = calc(2);
console.log(varres); //gives NAN AS output coz something went parameter are not sent correclty..

//rest parameters..
function calthis(a, b, ...rest) {
  console.log(a, b, rest);
}

calthis(1, 2, 4, 5, 6, 7, 8);

//nested function..

function outer() {
  console.log("outer");

  return function inner() {
    console.log("inner");
  };

  //inner();
}

let out = outer();

//call back functions

function foo(func) {
  console.log("foo");

  func();
}

//passing function has as a paramter..
foo(function () {
  console.log("func");
});

//pure functions..

greetingmsg = "hola";

function greeting(name) {
  return greetingmsg + name;
}

console.log(greeting("srishti"));
console.log(greeting("srishti"));
greetingmsg = "hii";
console.log(greeting("srishti"));
console.log(greeting("srishti"));

//higher -order function
function getCamera(cam) {
  cam();
}

getCamera(function () {
  console.log("sony");
});

function constFun() {
  return function () {
    console.log("return function");
  };
}

const f = constFun();
console.log(f); // output ƒ () {
//     console.log("return function");
//   }
