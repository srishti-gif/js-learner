const btn = document.getElementById("clickBtn");
console.log(btn);

let count = 0;
function counter() {
  console.log(`you clicked at me ${count} times`);
  count++;
}

btn.addEventListener("click", counter);

// adding eventlistener tp the button
const inputField = document.getElementById("inputCheck");
const btn1 = document.getElementById("submit-btn");
console.log(btn1);
btn1.addEventListener("click", () => {
  console.log("event fired");
  const inputValue = inputField.value;

  alert(inputValue);
});

// event delegation : child to parent
const allList = document.getElementById("list");
console.log(allList);

allList.addEventListener("click", (event) => {
  console.log("click on li");

  if (event.target.tagName === "LI") {
    alert(`you clicked on ${event.target.textContent} item`);
  }
});
