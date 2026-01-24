const target = { a: 1, b: 2 };
const src = { c: 2, h: 9 };

//assign : copies object from source to target.
const returnObj = Object.assign(target, src);
console.log(returnObj); //->output // a: 1;
// b: 2;
// c: 2;
// h: 9;

const obj = { name: "srishti" };
const obj1 = Object.assign({}, obj);
console.log(obj);
console.log(obj1);

console.log(obj1 === obj);

const obj3 = {
  a: 1,
  b: { c: 3 },
};

const obj4 = Object.assign({}, obj3);
console.log(obj4);
console.log(obj3);

obj3.a = 100;

console.log(obj3.a); //100
console.log(obj4.a); //1  why ? because for obj3,obj4 are shallow copy are at different memo

obj4.b.c = 99;
console.log(obj4.b.c); // 99
console.log(obj3.b.c); //99 why ? bacause for nested object assign creates an shallow copy

// to avoid this problem we use

const obj5 = structuredClone(obj3);
obj3.b.c = 90;
console.log(obj3.b.c); // 90
console.log(obj5.b.c); //99  deep copy is being created.

/*
creating arrays from objects
*/
let myObj = {
  name: "Srishti",
  age: 21,
};

const myArr = Object.entries(myObj);
console.log(myArr);

/*
creating objects from Arrays..
*/
const entries = new Map([
  ["Foo", "Bar"],
  ["baz", 42],
]);

const objEntries = Object.fromEntries(entries);
console.log(objEntries);

/* -freeze method in object: used to make the object immutable.
 - we cannot add, delete, or modify anything in the freeze object.
*/

let emp = {
  salary: 100,
};

Object.freeze(emp);

console.log(emp.salary);
emp.salary = 900;
console.log(emp.salary);

emp.name = "Raj";
emp.name = "Alice";
console.log(emp.name);

//used to check if the object is froozen or not.
console.log(Object.isFrozen(emp));

/*
Seal: used to make the object immutable same as freeze method but we can change the 
i.e, modify the existing property in the object.
*/
let dept = {
  branch: "IT",
};
Object.seal(dept);

dept.branch = "ECE";
console.log(dept.branch);

// cant add new property..
// depth.name = "Srishti";
// console.log(depth.name);

console.log(Object.hasOwn(dept, "address")); //returns false;
