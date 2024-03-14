const add = document.getElementById("add");
const convert = document.getElementById("convert");
const container = document.getElementById("input-container");
const sectionSecond = document.querySelector(".section-2");

const inputValues = [];

function createInputField() {
  const inputField = document.createElement("input");
  inputField.type = "text";
  inputField.placeholder = "Enter value";
  inputValues.push(inputField);
  container.appendChild(inputField);
}
add.addEventListener("click", createInputField);

function convertInputValuesToJSON() {
  const jsonData = inputValues.map((input) => input.value);
  const jsonString = JSON.stringify(jsonData);
  sectionSecond.innerHTML += jsonString;
}
convert.addEventListener("click", convertInputValuesToJSON);
