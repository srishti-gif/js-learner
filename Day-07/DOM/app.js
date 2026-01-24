function highLight() {
  console.log("Ready to highlight the text");
  let elements = document.querySelectorAll(".info");

  elements.forEach((element) => {
    element.style.background = "yellow";
  });
}

function filterList() {
  console.log("filterList called");
  let inputEle = document.getElementById("searchInput");

  console.log("inputEle:", inputEle);

  const input = inputEle.value;

  const items = document.querySelectorAll("#itemsList li");

  items.forEach((item) => {
    item.style.display = item.innerText
      .toLowerCase()
      .includes(input.toLowerCase())
      ? "block"
      : "none";
  });
}
