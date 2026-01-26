const student = {
  name: "Srishti",
  age: 22,
  college: "BPIT",
  branch: "IT",
  "roll-no": 15,

  subjects: ["Maths", "English", "hindi"],

  address: {
    city: "delhi",
    country: "india",
    zip: 110059,
    state: "delhi",
  },

  parents: {
    "fathers name ": "suresh",
    "mothers name": "radha",
    email: "parent@gmail.com",
  },
};

//const name = student.name;
//console.log(name);

const { name, age } = student;
console.log(name, age);

//adding a new property in the object

const { colleg, branch, meal = "bread" } = student;
console.log(meal);

//alias:
const { batch: dept } = student;
console.log(dept);

//accessing nested properties
const {
  address: { zip },
} = student;
console.log(zip);

// another use of destructor
function sendEmail({ parents: { email } }) {
  console.log(`An E-mail has been sent to ${email}`);
}

sendEmail(student);

//optional chaining : back-end se koi value aa shkti hai jo maybe exists nhi krti ,
// so direclty acess krne pr system error dega to handle that we use optional chaining.
const emp = {
  salary: 3000,
};

const dept_name = emp.dept?.dept_name;
console.log(dept_name);
