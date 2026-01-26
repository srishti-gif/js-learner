/*
1. Create a function wait(ms) that 
returns a promise which resolves 
after ms milliseconds. Use async/await to 
log messages before and after the delay
*/

function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

async function run() {
  console.log("Before delay");

  await wait(1000); // 1 second wait

  console.log("After delay");
}

run();

/*
2. Using async/await, log "One", then 
after 1 second log "Two", then "Three" 
after another 2 seconds. 
No setTimeout outside of promises

*/

async function logmsg() {
  console.log("starting log msgs");

  const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("one");
    }, 1000);
  });
  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("two");
    }, 2000);
  });
  const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("three");
    }, 3000);
  });

  return Promise.all([p1, p2, p3]);
}

async function result() {
  const [p1, p2, p3] = await logmsg();
  // const {p1,p2,p3} = await logmsg();
  console.log(p1, p2, p3);
}
result();
