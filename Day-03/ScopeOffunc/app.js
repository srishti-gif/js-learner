// What will be the output of the following code and why?
let user = "Alice";

function outer() {
  function inner() {
    console.log(user);
  }
  let user = "Bob";
  inner();
}

outer(); //output :bob

//2. What is the mistake in the code below?
let total = 0; // Global, bad practice

function add(num) {
  total += num;
}

add(5);
add(10);
console.log(total);

//3. Create a function with a nested function and log a variable from the parent function.
function parentfunc() {
  let parentVaribale = "hello";

  function childFunction() {
    console.log(parentVaribale);
  }

  childFunction();
}

parentfunc();

//4.4. Use a loop inside a function and declare a variable inside the loop. Can you access it outside?

function loopFunc() {
  //   for (let i = 0; i < 5; i++) {
  //     let accessLet = i;
  //   }

  //   console.log(accessLet); //cant be accessed as it is let cannot be accessed outside its scope

  //   for (let i = 0; i < 5; i++) {
  //     var acessVar = i;
  //   }

  //   console.log(acessVar); // output = 4 : can be accessed as var is a functional scope

  for (let i = 0; i < 5; i++) {
    const accessConst = i;
  }

  // console.log(accessConst); //reference error!
}
loopFunc();

//guess the output..
function counter() {
  let count = 0;
  return function () {
    count--;
    console.log(count);
  };
}

const reduce = counter();
reduce(); //-1
reduce(); //-1
