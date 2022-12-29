const inputEl = document.querySelector(".input");

const labelEl = document.querySelector(".label");

const circleEl = document.querySelector(".circle");

const bodyEl = document.querySelector("body");
inputEl.checked = JSON.parse(localStorage.getItem("mode"));

inputEl.addEventListener("input", () => {
  updateBody();
  updateLocalStorage();
});
updateBody();
function updateBody() {
  if (inputEl.checked) {
    bodyEl.style.background = "black";
  } else {
    bodyEl.style.background = "white";
  }
}

function updateLocalStorage() {
  localStorage.setItem("mode", JSON.stringify(inputEl.checked));
}
