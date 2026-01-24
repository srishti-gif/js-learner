/*
Create a form dynamically using JavaScript and manipulate its behavior
Add input fields dynamically based on user selection e.g., text, email, number
Add a submit button that logs all the input values as an object.
Add a reset button that clears the form.
Use createElement, appendChild, setAttribute, and addEventListener.

*/

const root = document.getElementById("root");
console.log(root);

const form = document.createElement("form");
console.log(form);

const nameInput = document.createElement("input");
nameInput.type = "text";
nameInput.placeholder = "Enter Your Name";

console.log(nameInput);

const emailInput = document.createElement("input");
emailInput.type = "text";
emailInput.placeholder = "Enter Your Email";

const passwordInput = document.createElement("input");
passwordInput.type = "password";
passwordInput.placeholder = "Enter Password";

const btn = document.createElement("button");
btn.innerText = "Submit";
btn.type = "submit";

form.appendChild(nameInput);
form.appendChild(document.createElement("br"));

form.appendChild(emailInput);
form.appendChild(document.createElement("br"));

form.appendChild(passwordInput);
form.appendChild(document.createElement("br"));

form.append(btn);

root.append(form);

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let user = {
    name: nameInput.value,
    email: emailInput.value,
    password: passwordInput.value,
  };
  console.log(user);
});


