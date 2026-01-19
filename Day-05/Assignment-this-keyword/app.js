/*
1. Create a table of two columns, situation and value. Now add the rows for every situations and the value of this in that situation. Please cover the following situations
At the Global
Inside an Object Method
Inside the Satandalone non-Arrow Function
Inside an Arrow Function(standalone)
Inside an Arrow Function(as object method)
Inside an object created with the Constructor Function
Please add examples for each of the scenarios.
*/

//At the Global
console.log(this); //window

//Inside an Object Method
let emp = {
  name: "srishti",

  getName: function () {
    console.log("my name is", this.name);
  },
};

console.log(emp.getName()); // my name is srishti

//Inside the Satandalone non-Arrow Function
function outer(a) {
  console.log("i am a outer function", this.a);

  return function inner(b) {
    console.log("i am a inner function", this.b);
  };
}

console.log(outer(5)(3)); //undefined,undefined why? because standalone function mai this refer to global level

//Inside an Arrow Function(as object method)
const fn = () => {
  console.log("hi i am an arrow function", this);
};
fn(); //refer to window object

//Inside an object created with the Constructor Function
function Fruite(name, color, taste) {
  this.name = name;
  this.color = color;
  this.taste = taste;

  this.getTaste = function () {
    console.log(`${this.name} tastes ${this.taste}`);
  };
}

let apple = new Fruite("apple", "red", "sweet");
let banana = new Fruite("banana", "yellow", "sweet");

apple.getTaste(); // apple tastes sweet
banana.getTaste(); // banana tastes sweet

/*
2. What is the problem here? Fix it to log the correct name and explain the fix
const user = {
  name: "tapaScript",
  greet: () => {
    console.log(`Hello, ${this.name}!`);
  },
};

user.greet()
*/

const user = {
  name: "tapaScript",

  greetOuter: function () {
    const greet = () => {
      console.log(`hi ${this.name}`);
    };

    greet();
  },
};

user.greetOuter();

/*
What is the problem with the following code? Why isn't it logging the name correctly?
*/

// const user1 = {
//   name: "Alex",

//   greet: function () {
//     function inner() {
//       console.log(`Hello, ${this.name}!`);
//     }
//     inner();
//   },

// };

// user1.greet();

const user1 = {
  name: "Alex",

  greet: function () {
    const inner = () => {
      console.log(`hello, ${this.name}`);
    };
    inner();
  },
};

user1.greet();

/*
5. Create a Sports constructor function that takes name and number of players as arguments and assigns them using this keyword. Then, create two sports instances and log their details
*/

function Sports(name, numberOfPlayer) {
  this.name = name;
  this.numberOfPlayer = numberOfPlayer;
}

let football = new Sports("football", 5);
let cricket = new Sports("Cricket", 4);
console.log(football.name, football.numberOfPlayer);
console.log(cricket.name, cricket.numberOfPlayer);

/*
Can you attach the car1's describe() method to car2 object? Give all possible solutions that you can think of
*/
const car1 = {
  brand: "Audi",
  model: "A8",
  describe: function () {
    console.log(`This car is a ${this.brand} ${this.model}.`);
  },
};

const car2 = {
  brand: "BMW",
  model: "X1",
};
//call
car1.describe.call(car2);
//apply
car1.describe.apply(car2);

//bind
let car = car1.describe.bind(car2);
car();

const person = {
  name: "Charlie",
  sayHello: function () {
    console.log(this.name);
  },
  sayHelloArrow: () => {
    console.log(this.name);
  },
};

person.sayHello();
person.sayHelloArrow();
