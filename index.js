const add = document.getElementById("add");
const convert = document.getElementById("convert");
const container = document.getElementById("input-container");
const jsonOutput = document.querySelector(".section-2");

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
  const jsonData = inputValues.map((field) => field.value);
  const jsonString = JSON.stringify.apply(null, [jsonData]);
  jsonOutput.textContent += jsonString;
  // const jsonData = inputValues.map((input) => input.value);
  // const jsonString = JSON.stringify(jsonData);
  // jsonOutput.innerHTML += jsonString;
}
convert.addEventListener("click", convertInputValuesToJSON);
