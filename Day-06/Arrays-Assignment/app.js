/*
T-001: Create an array of 5 elements using the Array Constructor.
*/
const newArr = new Array(1, 2, 3, 4, 5);
console.log(newArr);

//Create an array of 3 empty slots.
const emptyArr = new Array(3);

//Create an array of 6 elements using the Array literals and
// access the fourth element in the array using its length property.
const names = ["abc", "xyz", "qwe", "uio", "opk", "klh"];
console.log(names[names.length - 3]);

/*
Use the for loop on the above array to print elements in the odd index.
*/
for (let i = 0; i < names.length; i++) {
  if (i % 2 != 0) {
    console.log(names[i]);
  }
}

//Add one element at the front and the end of an array.
//unshift add an element at the front of the array and returns the length of the new array.
const changeArr = names.unshift("ss");

console.log(changeArr); //7

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

//Remove an element from the front and the end of an array.
//shift : removes the lement from the last of array.
let removedElement = names.shift();
console.log(removedElement);

//push:adds the elemnent at the end of the array
names.push(removedElement);
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

//Create an array containing the name of your favourite fruits(10 fruits).
// Destructure the 6th food element from the array using destructuring.
let fruits = [
  "apple",
  "banana",
  "guava",
  "pineapple",
  "mango",
  "orange",
  "papaya",
  "grapes",
  "kiwi",
  "strawberry",
];

const [, , , , , sixthElement] = fruits;
console.log(sixthElement);

/*
 T-008: Take out the last 8 food items from the above array using the Array destructuring. Hint: rest parameter.
*/
//Take out the last 8 food items from the above array using the Array destructuring.
// Hint: rest parameter.

const [, , ...lastEightElements] = fruits;
console.log(lastEightElements);

//Clone an Array(Shallow cloning)
const copiedArr = fruits;
console.log(copiedArr);
console.log(fruits);

// T-009: Clone an Array(Shallow cloning)
copiedArr.pop(); // shallow copy
console.log(copiedArr);
console.log(fruits);

console.log(copiedArr === fruits); //true
console.log(lastEightElements === fruits); //false

//Empty an array using its length property
fruits.length = 0;
console.log(fruits.length);

//Create an array of 10 elements(number 1 to 10).
// Resize the array to length 6 once you find the number 5 in that array.
// Hint: Use for-loop.

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < nums.length; i++) {
  if (nums[i] == 5) {
    nums.length = 6;
    break;
  }
}
console.log(nums);

//splice- can add delete,replace element in the array
//slice : sirf copied element return krta hai.

//  T-012: Create an Array of 10 elements. Use the splice() method to empty the array.
//  T-013: Create an Array of 10 elements.
//  You can empty the array in multiple ways: using
// the length property, using the pop() method, using the shift()
// method, setting the array with [], or the splice() method. Which among
// these methods are most efficient and why?

nums.splice(0, 6);
console.log(nums);

//nums.length=0 is the most efficient method to empty an array because it take 0(1) time complexity

/*
 T-014: What happens when you concatenate two empty arrays?
*/
nums = [1, 2, 3, 4];
nums2 = [6, 7, 8, 9];

console.log(nums.concat(nums2));
console.log(nums);
console.log(nums2);

// T-015: How can you check if a value is partially matching with any of the elements of an Array?
let cars = ["Auddi", "Ferrari", "BMW", "Jaguar"];

function findValue(value) {
  for (let i = 0; i < cars.length; i++) {
    let carName = cars[i];
    if (carName.includes(value)) {
      console.log("found");
      return true;
    }
  }
  return false;
}
console.log(findValue("BM"));

// T-017: Create an Array of alphanumeric strings.
// Sort the elements in both ascending and descending orders.
// You must be doing this in an immutable way such that the source array never gets modified.

let alphanumericArr = ["abc123", "xyz789", 123];

console.log(alphanumericArr.sort());

let arr = [2, 4, 10, 25, 30];

const ascendingOrder = [...arr].sort((a, b) => a - b);
console.log(ascendingOrder);

const descendingOrder = [...arr].sort((a, b) => b - a);
console.log(descendingOrder);

/*
employees array: An array of emplyees working in a department.
*/
const employees = [
  { id: 1, name: "Alice", departmentId: 1, salary: 5000 },
  { id: 2, name: "Bob", departmentId: 2, salary: 7000 },
  { id: 3, name: "Charlie", departmentId: 3, salary: 4500 },
  { id: 4, name: "Diana", departmentId: 1, salary: 5500 },
  { id: 5, name: "Edward", departmentId: 2, salary: 8000 },
  { id: 6, name: "Fiona", departmentId: 4, salary: 6000 },
  { id: 7, name: "George", departmentId: 3, salary: 5200 },
  { id: 8, name: "Helen", departmentId: 4, salary: 7200 },
  { id: 9, name: "Ian", departmentId: 2, salary: 4800 },
  { id: 10, name: "Jane", departmentId: 1, salary: 5100 },
];
//departments array: An array of departments where emplyees work.

const departments = [
  { id: 1, name: "HR" },
  { id: 2, name: "Engineering" },
  { id: 3, name: "Marketing" },
  { id: 4, name: "Sales" },
];

//Can you filter employees who work in the "Engineering" department?
const getDept = employees.filter((e) => e.departmentId == 2);
console.log(getDept);

// // Highest salary
const highestSalary = Math.max(...employees.map((e) => e.salary));
console.log("Higest Salary", highestSalary);

// // Check if any employee is in Sales
// const hasSalesEmployee = employees.some(
//   (e) => getDeptName(e.departmentId) === "Sales",
// );

const hasSalesEmployee = employees.some((e) => e.departmentId == 4);
console.log("Has Sales Employee:", hasSalesEmployee);

// // Employees earning more than 6000
const earningMoreThan6k = employees.filter((e) => {
  return e.salary > 6000;
});
console.log("Employees earning more tha 6k", earningMoreThan6k);

// // Array of employee names
const employeeNames = employees.map((e) => e.name);
console.log(employeeNames);

// // Total salary of all employees
const totSalary = employees.reduce((sum, e) => {
  return sum + e.salary;
}, 0);
console.log(totSalary);

// // Check if any employee earns less than 5000
const hasSalaryLessThan5k = employees.some((e) => {
  return e.salary < 5000;
});

console.log(hasSalaryLessThan5k);

//  First employee earning exactly 5100
const firstEmpSalLessthan5k = employees.find((e) => {
  return e.salary === 5100;
});

console.log(firstEmpSalLessthan5k);

// // Last employee in HR department
const LastEmpInHrDept = employees
  .filter((e) => {
    return e.departments === "HR";
  })
  .at(-1);

console.log(lastEightElements);

//  First employee in Marketing department
const firstEmpInMarketing = employees
  .filter((e) => {
    return e.departmentId === 3;
  })
  .at(0);
console.log(firstEmpInMarketing);

// // Check if all employees earn more than 4000
const allEmpSalGreaterThan4k = employees.every((e) => {
  return e.salary > 4000;
});
console.log(allEmpSalGreaterThan4k);

// // First employee in Sales or HR
const firstSalesOrHrEmployee = employees.find((e) => {
  return e.departmentId === 1 || e.departmentId === 4;
});

console.log("First Sales or HR Employee:", firstSalesOrHrEmployee);

// // Verify all employees belong to valid departments
const allEmployeesHaveValidDept = employees.every((e) =>
  departments.some((d) => d.id === e.departmentId),
);
console.log("All employees have valid department:", allEmployeesHaveValidDept);

// // Log each employee name and department
employees.forEach((e) =>
  console.log("Employee:", e.name, "->", departments[e.departmentId]),
);

// // Increment salary by 10%
const salaryIncrease = employees.map((e) => e.salary * 1.1);
console.log(salaryIncrease);

// // Flatten employee skills
const employeeSkills = [
  { name: "Alice", skills: ["Excel", "Management"] },
  { name: "Bob", skills: ["JS", "React"] },
];
const flatArray = employeeSkills.flatMap((e) => e.skills);
console.log(flatArray);

// // Total salary of Engineering department
const totSalInEngDept = employees
  .filter((e) => e.departmentId === 2)
  .reduce((sum, e) => {
    return (sum += e.salary);
  }, 0);
console.log(totSalInEngDept);

// // Check if any department has all employees earning more than 5000
const result = departments.some((dept) => {
  const deptEmployees = employees.filter((e) => e.departmentId === dept.id);

  return deptEmployees.every((e) => e.salary > 5000);
});

console.log(result);

// // Total unique projects
const employeeProjects = [{ projects: ["A", "B"] }, { projects: ["B", "C"] }];
const uniqueProjectCount = new Set(employeeProjects.flatMap((e) => e.projects))
  .size;
console.log("Unique Project Count:", uniqueProjectCount);

// // Employee name with department
const employeeWithDepartment = employees.map((e) => ({
  name: e.name,
  department: getDeptName(e.departmentId),
}));
console.log("Employee with Department:", employeeWithDepartment);

// // Names of employees earning more than 6000
const highEarningEmployeeNames = employees
  .filter((e) => e.salary > 6000)
  .map((e) => e.name);
console.log("High Earning Employees:", highEarningEmployeeNames);

// // Print employee names using for-of
for (const e of employees) {
  console.log("Employee Name:", e.name);
}

// // Print names earning more than 5000
for (const e of employees) {
  if (e.salary > 5000) console.log("Salary > 5000:", e.name);
}

// // for-of with destructuring
for (const { name, salary } of employees) {
  console.log("Name & Salary:", name, salary);
}

// // Match employees with departments
// for (const e of employees) {
//   console.log("Employee Dept Match:", e.name, getDeptName(e.departmentId));
// }

// // entries() with for-of
for (const [index, e] of employees.entries()) {
  console.log("Index & Name:", index, e.name);
}

// // Array-like object access
const arrayLike = { 0: "First", 1: "Second", length: 2 };
console.log("Second Element:", arrayLike[1]);

// // Convert arguments to real array
function convertArgumentsToArray() {
  return Array.from(arguments);
}
console.log("Arguments Array:", convertArgumentsToArray(1, 2, 3));

// // Merge two arrays
const arr1 = [1, 2];
const arr2 = [3, 4];

const mergedArray = [...arr1, ...arr2];
console.log("Merged Array:", mergedArray);

// // Create array of 5 "A"
const fiveAsArray = Array.from({ length: 5 }, () => "A");
console.log("Five A Array:", fiveAsArray);

// // Convert string to array
const stringToArray = Array.from("Hello");
console.log("String to Array:", stringToArray);

// // Group words by first letter
const wordsGroupedByFirstLetter = Object.groupBy(
  ["apple", "banana", "apricot", "mango", "blueberry"],
  (word) => word[0],
);
console.log("Grouped Words:", wordsGroupedByFirstLetter);

// // Count occurrences of numbers
const numberFrequency = [3, 7, 3, 2, 3, 8, 7, 7].reduce((acc, n) => {
  acc[n] = (acc[n] || 0) + 1;
  return acc;
}, {});
console.log("Number Frequency:", numberFrequency);

// // Median of array
const sortedNumbers = [5, 2, 9, 1, 3, 6, 8].toSorted((a, b) => a - b);
const medianValue = sortedNumbers[Math.floor(sortedNumbers.length / 2)];
console.log("Median:", medianValue);

// // Convert array to object
const objectFromArray = Object.fromEntries([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);
console.log("Object from Array:", objectFromArray);

// // Flatten and uppercase
const uppercasedLetters = [
  ["a", "b"],
  ["c", "d"],
].flatMap((a) => a.map((x) => x.toUpperCase()));
console.log("Uppercased Letters:", uppercasedLetters);

// // Count fruits
const fruitCount = [
  "apple",
  "banana",
  "apple",
  "mango",
  "banana",
  "banana",
].reduce((acc, f) => {
  acc[f] = (acc[f] || 0) + 1;
  return acc;
}, {});
console.log("Fruit Count:", fruitCount);

// // Extract ['b','c','d']
const slicedArray = ["a", "b", "c", "d", "e"].slice(1, 4);
console.log("Sliced Array:", slicedArray);

// Sort using toSorted
const sortedAscending = [9, 3, 1, 6, 8].toSorted((a, b) => a - b);
console.log("Sorted Ascending:", sortedAscending);

// toReversed vs reverse
const originalArray = [1, 2, 3, 4, 5];
const reversedCopy = originalArray.toReversed();
console.log("toReversed:", reversedCopy, "Original:", originalArray);

// Group users by age
const users = [
  { name: "Alice", age: 55 },
  { name: "Bob", age: 3 },
  { name: "Charlie", age: 25 },
];

const usersGroupedByAge = Object.groupBy(users, (u) =>
  u.age >= 18 ? "Adult" : "Non-Adult",
);
console.log("Users Grouped by Age:", usersGroupedByAge);

// Longest word in sentence
const longestWord =
  "40 Days of JavaScript by tapaScript is a powerful initiative"
    .split(" ")
    .reduce((longest, word) => (word.length > longest.length ? word : longest));
console.log("Longest Word:", longestWord);

// Common elements between arrays
const commonElements = [1, 2, 3, 4].filter((x) => [3, 4, 5, 6].includes(x));
console.log("Common Elements:", commonElements);
