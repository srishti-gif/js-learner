/*
Theme Switcher with Persistence
Toggle theme using a button or switch.
Persist the theme in localStorage and apply on page load.
Change background and text color based on the theme.

*/

let savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  applyDarkTheme();
} else {
  applylightTheme();
}

function toggleTheme() {
  let currTheme = localStorage.getItem("theme");

  if (currTheme === "dark") {
    applylightTheme();
    localStorage.setItem("theme", "light");
  } else {
    applyDarkTheme();
    localStorage.setItem("theme", "dark");
  }
}

function applyDarkTheme() {
  document.body.style.backgroundColor = "pink";
  document.body.style.color = "white";
}

function applylightTheme() {
  document.body.style.backgroundColor = "blue";
  document.body.style.color = "black";
}
