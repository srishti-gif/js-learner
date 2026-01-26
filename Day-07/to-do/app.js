function addTask() {
  let inputField = document.getElementById("taskInput");
  const list = document.getElementById("taskList");
  console.log(inputField);
  console.log(list);

  task = inputField.value;

  if (task.length == 0) {
    return;
  }
  const newList = document.createElement("li");
  console.log(newList);
  newList.textContent = task;
  console.log(newList);

  const completed = document.createElement("button");
  completed.innerText = "✅";
  completed.style.marginLeft = "5px";
  completed.onclick = function () {
    console.log("completed clicked");
    newList.classList.toggle("completed");
  };
  newList.appendChild(completed);

  const noncompleted = document.createElement("button");
  noncompleted.innerText = "❌";
  noncompleted.style.marginLeft = "5px";
  noncompleted.onclick = function () {
    newList.remove();
  };

  newList.appendChild(noncompleted);

  list.appendChild(newList);
  inputField.value = "";
}
