/*
-objects: that data stores inf form of key-value pair 
- each value can be accessed using its unique key.
*/

let user = {
  name: "srishti",
  age: 22,
  city: "delhi",
  gender: "female",
  "is Admin": true,
};

/*
accessing the objects.
*/
console.log(user.name);
const acessName = user.name;
console.log(acessName);

// changing the value of any key.
user.age = 34;
console.log(user.age);

//acessing the special key in the object that contains spaces or any other special character
console.log(user["is Admin"]);

/*
deleting any object.
delete only removes property, not object
*/
console.log(user["gender"]);

delete user["gender"];
console.log(user.gender);

/*
accessing the keys dynamically.
*/
const someKey = "age";
console.log(user[someKey]);

let car = prompt("Which is your fav Car");

let obj = {
  [car]: 5,
};

console.log(obj);
console.log(obj[car]);

//constructor function.
function fruit(color, name) {
  this.color = color;
  this.name = name;
}

/*
constructor functions objects are created with the "new" keyword
constructor function objects helps in identifying which object is being made in normal object
creation if cannot identify what object has been created its name is not displayed.
*/
const appleObj = new fruit("red", "apple");
const bananaObj = new fruit("yellow", "banana");
console.log(appleObj);
console.log(bananaObj);
console.log(appleObj instanceof fruit);

/*
creating object using the js "new object" method in 
this also we cannot tell the type of object is being created.
*/

const person = new Object();
person.name = "anjali";
person.age = 90;
person.gender = "female";

console.log(person);

/*
creating objects using function factory
*/
function createUser(name, age) {
  return {
    name,
    age,
    greet() {
      console.log(`Hi ${this.name}`);
    },
  };
}

const user1 = createUser("chandra", 88);
const user2 = createUser("doremon", 87);
console.log(user1);
user1.greet();

/*
Nested objects.
*/
let profile = {
  name: "cosmos",
  age: 12,
  gender: "female",

  address: {
    city: "Delhi",
    pinCode: 110059,
    country: "India",
    greeting: function () {
      console.log(`Hi ${profile.name}`);
    },
  },

  salary: undefined,
};

//accessing the nested objects
console.log(profile.address.pinCode);
profile.address.greeting();

/*
In operator: It is used to check if something exists in the object or not
*/

if ("salary" in profile) {
  console.log(`salary is ${profile.salary}`);
}

/*
for in loop in object
*/

for (let key in profile) {
  console.log(key);
  console.log(profile[key]);
}

// objects : are of reference type that is why even
// if they have the same values they will be at different memoray locations
let tv = { name: "samsung" };
let tv1 = { name: "samsung" };
console.log(tv === tv1);

tv = tv1;

// now they point to same memory locations
tv = tv1;
console.log(tv === tv1);
