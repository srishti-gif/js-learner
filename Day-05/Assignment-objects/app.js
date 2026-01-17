/*1. Given an object with deeply nested properties, extract name, company, and 
address.city using destructuring
*/
const person = {
  name: "Tapas",
  company: {
    name: "tapaScript",
    location: {
      city: "Bangalore",
      zip: "94107",
    },
  },
};

const { name } = person;
console.log(name);

const { company } = person;
console.log(company);

const {
  company: {
    location: { city },
  },
} = person;

console.log(city);

/*
2. Build a Student Management System
Store student details in an object (name, age, grades).
Implement a method to calculate the average grade.
*/
let student = {
  name: "srishti",
  age: 21,
  marks: [75, 58, 90, 67, 88],

  avgGrade: function () {
    let totMarks = 0;

    for (let mark of this.marks) {
      totMarks += mark;
    }

    return totMarks / this.marks.length;
  },
};

console.log(student.avgGrade());

/*
Loop and print values using Object destructuiring
*/
const users = [
  {
    name: "Alex",
    address: "15th Park Avenue",
    age: 43,
  },
  {
    name: "Bob",
    address: "Canada",
    age: 53,
  },
  {
    name: "Carl",
    address: "Bangalore",
    age: 26,
  },
];

for (let { name, address, age } of users) {
  console.log(name, address, age);
}

/*
Book Store Inventory System
Store books in an object.
Add functionality to check availability and restock books.
*/

const bookStore = {
  books: {
    "Atomic Habits": 5,
    "Rich Dad Poor Dad": 0,
    "Think and Grow Rich": 3,
  },

  // check availability
  isAvailable(bookName) {
    if (this.books[bookName] > 0) {
      return `${bookName} is available (${this.books[bookName]} copies)`;
    } else if (this.books[bookName] === 0) {
      return `${bookName} is out of stock`;
    } else {
      return `${bookName} not found in store`;
    }
  },

  // restock books
  restock(bookName, quantity) {
    if (this.books[bookName] !== undefined) {
      this.books[bookName] += quantity;
    } else {
      this.books[bookName] = quantity;
    }
    return `${bookName} restocked. Total copies: ${this.books[bookName]}`;
  },
};

console.log(bookStore.isAvailable("Atomic Habits"));
