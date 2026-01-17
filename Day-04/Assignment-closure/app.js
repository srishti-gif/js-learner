/*
Create a button dynamically and attach a click event handler using a closure. 
The handler should count and log how many times the button was clicked.
*/
function countClicks() {
  let count = 0;

  const button = document.createElement("button");
  button.textContent = "click-Me";

  button.addEventListener("click", function () {
    count++;
    console.log(`you clicked at me ${count} times`);
  });

  document.body.appendChild(button);
}

countClicks();

/*
Write a function createMultiplier(multiplier)
that returns another function to multiply numbers.
*/
function createMultiplier(initalNumber) {
  let x = initalNumber;

  return function mutltiplyNumber() {
    return x * x;
  };
}

let multiplierNum = createMultiplier(3);
console.log(multiplierNum());

/*
Write a function factory of counter to increment, decrement, and reset a counter. 
Use closure to refer the count value across the functuions.
*/
function countFactory(Intialcount) {
  count = Intialcount;

  return {
    increament: () => {
      count++;
      console.log(count);
    },

    decreament: () => {
      count--;
      console.log(count);
    },

    reSet: () => {
      count = Intialcount;
      console.log(count);
    },
  };
}

let counter = countFactory(7);

counter.increament();
counter.decreament();
