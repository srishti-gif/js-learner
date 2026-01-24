/*
1. Pass a function to greet a user and then thank them..
*/

function Thankyou() {
  console.log("Thank you user!");
}

function greet(callback) {
  console.log("Hello user!");
  callback();
}

greet(Thankyou);

/*
2. Implement a calculator function that accepts two numbers and a callback to perform operations like add, subtract
function calculator(a, b, operationCallback) {
  // Complete this function
}

function add(x, y) {
  return x + y;
}

// Test calculator(5, 3, add);


*/

function calculator(a, b, operationCallback) {
  // Complete this function
  console.log("Operation starting..");
  const sum = operationCallback(a, b);
  return sum;
}

function add(x, y) {
  return x + y;
}

const sum = calculator;
console.log("sum", sum(2, 3, add));

/*
3. Create a delayedMessage function that prints a message after a delay using setTimeout
function delayedMessage(message, delay, callback) {
  // Your code here
}

// delayedMessage("Task complete", 2000, () => console.log("Callback Fired!"))

*/

function delayedMessage(message, delay, callback) {
  console.log("sorry your msg is delayed!!");
  setTimeout(() => {
    console.log(message);
    callback();
  }, delay);
}

delayedMessage("hey", 20000, Thankyou);

/*
4. Implement a function that filters numbers in an array based on a condition provided via callback
function filterNumbers(arr, conditionCallback) {
  // Use loop and callback to return filtered array
}

// Example: filterNumbers([1, 2, 3, 4], n => n > 2) // should return [3, 4]

*/
function filterNumbers(arr, conditionCallback) {
  console.log(`Print numbers greater than 2`);
  const filteredArr = conditionCallback(arr, 2);

  return filteredArr;
}

function conditionCallback(arr, n) {
  return arr.filter((nums) => {
    return nums > n;
  });
}

const nums = filterNumbers([1, 2, 3, 4, 5], conditionCallback);
console.log(nums);

/*
5. Execute a sequence of tasks one after another using callbacks
function task1(callback) {
  console.log("Task 1 done");
  callback();
}

function task2(callback) {
  console.log("Task 2 done");
  callback();
}

function task3() {
  console.log("Task 3 done");
}

// Call them in sequence using nested callbacks

*/

function task1(callback) {
  console.log("Task 1 done");
  callback();
}

function task2(callback) {
  console.log("Task 2 done");
  callback();
}

function task3() {
  console.log("Task 3 done");
}

task1(() => task2(task3));
