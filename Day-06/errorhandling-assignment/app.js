/*
1. Write a function processPayment(amount) that checks if the 
amount is positive and not exceeding balance. If any condition fails, 
throw appropriate errors
*/

function processPayment(amount) {
  let balance = 100;

  try {
    if (amount <= 0) {
      throw new Error("Amount must be greater than 0");
    }

    if (amount >= balance) {
      throw new Error("Insufficient Balance");
    }

    balance -= amount;
    console.log(`${amount} deductted successfully!`);
    console.log(`Your remaining balance is ${balance}`);
  } catch (err) {
    console.log("Error", err.message);
  }
}

processPayment(-5); //Error: Amount must be greater than 0
processPayment(120); //Error: Insufficient Balance
processPayment(4); //4 deductted successfully!
//app.js:21 Your remaining balance is 96

/*
Divide Two Numbers
*/

function DivideNumber(a, b) {
  try {
    if (b == 0) {
      throw new Error("Error: cannot divide a number by 0");
    }
    console.log(a / b);
  } catch (err) {
    console.log(err.message);
  }
}

DivideNumber(3, 0);

/*
Access Undefined Variable (ONLY try–catch)
*/
function UndefinedErr() {
  try {
    console.log(x);
  } catch (err) {
    console.log(err.name);
    console.log(err.message);
  }
}

UndefinedErr();

//age validity check
function validAge(age) {
  try {
    if (age <= 0) {
      throw new Error("Invalid Age!");
    }
    if (age < 18) {
      throw new Error("Under Age!");
    }
    console.log("Acess graunted!");
  } catch (err) {
    console.log("Error:", err.message);
  }
}

validAge(-5); //Error: Invalid Age!
validAge(15); //Error: Under Age!
validAge(87); //Acess graunted!

/*
3. Implement a custom error handling system for an e-commerce website that 
categorizes errors as
UserError
PaymentError
ServerError
EmailError
*/

function loginCheck(username, password) {
  // name : username;
  try {
    if (!username) {
      throw new Error("please enter a valid username");
    }

    if (!password) {
      throw new Error("pkease enter a valid password");
    } else if (password.length < 6) {
      throw new Error("Please enter a password with more than 6 digits");
    }
    console.log(`${username} you have logged in successfully!`);
  } catch (err) {
    console.log(err.message);
  }
}

loginCheck("", "");
loginCheck("srishti", "12344");
loginCheck("srishti", "1234567");

//PaymentError
function PaymentCheck(amount) {
  let balance = 100;
  try {
    if (amount <= 0) {
      throw new Error("Please Enter a Valid Payment");
    } else if (amount > balance) {
      throw new Error("Insufficient Balance");
    }
    balance -= amount;
    console.log(`Your current balance is ${balance}`);
  } catch (err) {
    console.log(err.message);
  }
}

PaymentCheck(20); //Your current balance is 80
PaymentCheck(-5); //Please Enter a Valid Payment
PaymentCheck(200); //Insufficient Balance

//ServerError
function ServerCheck(serverUp) {
  try {
    if (!serverUp) {
      throw new Error("Server is down");
    } else {
      console.log("Server is Up");
    }
  } catch (err) {
    console.log(err.message);
  }
}

ServerCheck(false);
ServerCheck(true);

//EmailError
function ValidateEmail(email) {
  try {
    if (!email) {
      throw new Error(`Please an Email`);
    } else if (!email.includes("@")) {
      throw new Error("Please Enter a valid email");
    }
    console.log(`Your mail id is ${email}`);
  } catch (err) {
    console.log(err.message);
  }
}

ValidateEmail("");
ValidateEmail("abc@gmail.com");
ValidateEmail("abc");

//4. Simulate an API call function fetchData(url).
// If the URL does not start with "https", throw an "Invalid URL" error.
// Handle it using try...catch
function fetchData(url) {
  try {
    if (!url.startsWith("https")) {
      throw new Error("Invalid Url!");
    }
    console.log(url);
  } catch (err) {
    console.log(err.message);
  }
}

fetchData("https:");
fetchData("");

/*
Implement a custom error type ValidationError using constructor functions to 
handle form validation errors
Example:

const userInput = { username: "", age: -2 };
validateUser(userInput);

// Output:
// ValidationError: Username cannot be empty
// ValidationError: Age must be a positive number
*/
function validateError(message) {
  this.name = "ValidationError";
  this.message = message;
  this.stack = new Error().stack;
}

function validateUser(user) {
  try {
    if (!user.name) {
      throw new validateError("Please Enter an valid Name");
    }
    if (user.age <= 0) {
      throw new validateError("Please Enter an valid Age");
    }
    console.log(`${user.name} is of ${user.age}`);
  } catch (err) {
    throw err;
  }
}

let user = {
  name: "",
  age: -2,
};

try {
  validateUser(user);
} catch (err) {
  if (err.name == "ValidationError") {
    console.log(`${err.name}: ${err.message}`);
  } else {
    console.log("Unknown Error:", err.message);
  }
}

/*
6. Write a function readFile(filePath) that simulates reading a file. 
If the file does not exist (simulate with a condition), 
throw a "File not found" error. Handle the error with try...catch. 
Make sure you have code to handle releasing the IO resources
*/

function readFile(filePath) {
  let fileOpened = false;
  try {
    if (!filePath) {
      throw new Error(`File Not Found`);
    } else {
      fileOpened = true;
      console.log(`you are read file ${filePath}`);
    }
  } catch (err) {
    console.log(err.message);
  } finally {
    if (fileOpened) {
      console.log(`Closing file ${filePath}`);
      fileOpened = false;
    } else {
      console.log(`No File is Opened`);
    }
  }
}

readFile("");
readFile("folder-name/file-name/..");
/*
7. Write a function parseJson(str) that takes a 
JSON string and tries to parse it using JSON.parse(). 
If parsing fails, catch the error and return "Invalid JSON"
*/

function parseJson(str) {
  try {
    return JSON.parse(str);
  } catch (err) {
    return "Invalid String";
  }
}

console.log(parseJson(`"name":"srishti", "age": 21`));
console.log(parseJson(`{"name":"srishti","age":21}`));
