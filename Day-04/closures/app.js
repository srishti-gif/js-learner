function parentFunc() {
  return function childFunc() {
    console.log("i am a child function");
  };
}

let func = parentFunc();
//console.log(func());   // we are consuming the func value iss liye output is i am a child function
// undefined

func(); // here only function exectuion is happeing that is why only i am a child function.

// closures functions :that take all the data from their parent function.
function counter() {
  let count = 0;

  return function increaseCount() {
    count++;
    console.log(count);
  };
}

let cnt = counter(); // function is called once after that at every
// inner function execution the count start from its last closed value

cnt(); // 1
cnt(); //2
cnt(); //3

/*real world example 
creating a simple banking system..
*/

function createBankSystem(initailBalance) {
  let bal = initailBalance;

  return {
    Deposite: (amount) => {
      bal = bal + amount;
      console.log("you have successfully deposited amount", amount);
    },

    checkBalance: () => {
      console.log("Your total balance is", bal);
    },

    withDraw: (amount) => {
      if (bal - amount < 0) {
        console.log("insufficient balance");
      } else {
        bal = bal - amount;
        console.log("you have successfully withdraw the amount", amount);
      }
    },
  };
}

let bankSystem = createBankSystem(100);
console.log(bankSystem); // print the object.

bankSystem.Deposite(10);
bankSystem.checkBalance();
bankSystem.withDraw(10);
bankSystem.checkBalance();
