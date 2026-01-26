/*
1. Create Your First Promise
Create a Promise that resolves with the string "Hello, Promises!" after 1 second.
Log the result using .then().
*/

const firstPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello Promise!");
  }, 5000);
});

firstPromise.then((result) => {
  console.log(result);
});

/*
2. Reject a Promise
Create a Promise that immediately rejects with the message "Something went wrong!".
Handle the error using .catch().
*/

const rejectPromise = new Promise((resolve, reject) => {
  reject("Something went wrong!");
});

rejectPromise.catch((err) => {
  console.log(err);
});

/*
3. Simulate Coin Toss
Return a Promise that randomly resolves to "Heads" or "Tails" after 1 second.
*/

function createToss() {
  let lastValue = true;

  return function coinToss() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (lastValue) {
          resolve("Head");
          lastValue = false;
        } else {
          resolve("Tail");
          lastValue = true;
        }
      }, 1000);
    });
  };
}

const coinResult = createToss(); //doubt
coinResult().then((result) => {
  console.log(result);
});
coinResult().then((result) => {
  console.log(result);
});

/*
4. Promise with Condition
Create a function checkAge(age) that returns a Promise.
Resolve if age >= 18, reject otherwise.
*/

function checkAge(age) {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      resolve("Eligible to vote");
    } else {
      reject("Not eligible to vote");
    }
  });
}

const checkEligiblity = checkAge(0);

checkEligiblity.then((result) => {
  console.log(result);
});
checkEligiblity.catch((err) => {
  console.log(err);
});

/*
5. Chain Promises Sequentially
Create three Promises that log:
"Step 1 done"
"Step 2 done"
"Step 3 done"
Chain them using .then().
*/

function step1() {
  return new Promise((resolve, reject) => {
    resolve("step1 done");
  });
}

function step2() {
  return new Promise((resolve, reject) => {
    resolve("step2 done");
  });
}

function step3() {
  return new Promise((resolve, reject) => {
    resolve("step3 done");
  });
}

// step1()
//   .then((result) => {
//     console.log(result);
//     return step2();
//   })
//   .then((result) => {
//     console.log(result);
//     return step3();
//   })
//   .then((result) => {
//     console.log(result);
//   });

const s1 = step1();
const s2 = step2();
const s3 = step3();

Promise.all([s1, s2, s3])
  .then((res) => {
    console.log("resolved!");
    console.log(res);
  })
  .catch((err) => {
    console.log("not resolved!");
  });

/*
6. Value Transformation in Chain
Create a Promise that resolves with 5.
Chain .then() handlers to double it, then square it.
Final output should be 100.
*/

function doubleTheNumber(number) {
  return new Promise((resolve, reject) => {
    resolve(number * 2);
  });
}

function squareTheNumber(number) {
  return new Promise((resolve, reject) => {
    resolve(number * number);
  });
}

doubleTheNumber(5)
  .then((result) => {
    console.log(result);
    return squareTheNumber(result);
  })
  .then((result) => {
    console.log(result);
  });

/*
7. Chain with Random Rejection
First .then() resolves to "Start".
Second .then() randomly throws an error or returns "Continue".
Handle rejection gracefully.
*/

function start() {
  return new Promise((resolve, reject) => {
    resolve("start");
  });
}

function randomErrormsgGenerator() {
  return new Promise((resolve, reject) => {
    const values = ["!error", "continue"];
    const msg = values[Math.floor(Math.random() * values.length)];
    if (msg === "!error") {
      reject("!error");
    } else {
      resolve("continue");
    }
  });
}

const fun = start();
fun
  .then((result) => {
    console.log(result);
    return randomErrormsgGenerator();
  })
  .then((result) => {
    console.log(result);
  });

/*
8. Multiple then() calls on same Promise
Create a single resolved Promise.
Attach two different .then() handlers to it.
Explain that both run independently.
*/

const samePromise = Promise.resolve("Shared result");

samePromise.then((msg) => {
  console.log("First handler:", msg);
});

samePromise.then((msg) => {
  console.log("Second handler:", msg);
});

/*
-Dono .then() independent hain
- Promise ek baar resolve hota hai, par multiple handlers use ho sakte hain
*/

/*
9. Return New Promises in .then()
Chain multiple .then() where each returns a new Promise with a delay and logs:
“First”
“Second”
“Third”
*/

Promise.resolve()
  .then(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("first");
        resolve();
      }, 1000);
    });
  })
  .then(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("second");
        resolve();
      }, 1000);
    });
  })
  .then(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("third");
        resolve();
      }, 1000);
    });
  });

/*
10. Implement fakeDBQuery()
Create a function that simulates a DB query with a random delay and returns data.
Chain multiple fake queries.
*/
