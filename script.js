// const calculatorDisplayValue =
//   +document.getElementsByClassName("display-inner")[0].innerHTML;
// alert(calculatorDisplayValue);
const nr1Btn = document.getElementById("nr1");
const nr2Btn = document.getElementById("nr2");
const nr3Btn = document.getElementById("nr3");
const nr4Btn = document.getElementById("nr4");
const nr5Btn = document.getElementById("nr5");
const nr6Btn = document.getElementById("nr6");
const nr7Btn = document.getElementById("nr7");
const nr8Btn = document.getElementById("nr8");
const nr9Btn = document.getElementById("nr9");
const nr0Btn = document.getElementById("nr0");
const addBtn = document.getElementById("add");
const subtractBtn = document.getElementById("subtract");
const multiplyBtn = document.getElementById("multiply");
const divideBtn = document.getElementById("divide");
const equalBtn = document.getElementById("equal");

let currentValue = 0;
let operatorValue = 0;
let operation = "";
let clickedNumber = "";

function setClickedNrTo1AndContinue() {
  clickedNumber = "1";
  setCurrentValueOrOperatorValue();
}
function setClickedNrTo2AndContinue() {
  clickedNumber = "2";
  setCurrentValueOrOperatorValue();
}
function setClickedNrTo3AndContinue() {
  clickedNumber = "3";
  setCurrentValueOrOperatorValue();
}
function setClickedNrTo4AndContinue() {
  clickedNumber = "4";
  setCurrentValueOrOperatorValue();
}
function setClickedNrTo5AndContinue() {
  clickedNumber = "5";
  setCurrentValueOrOperatorValue();
}
function setClickedNrTo6AndContinue() {
  clickedNumber = "6";
  setCurrentValueOrOperatorValue();
}
function setClickedNrTo7AndContinue() {
  clickedNumber = "7";
  setCurrentValueOrOperatorValue();
}
function setClickedNrTo8AndContinue() {
  clickedNumber = "8";
  setCurrentValueOrOperatorValue();
}
function setClickedNrTo9AndContinue() {
  clickedNumber = "9";
  setCurrentValueOrOperatorValue();
}
function setClickedNrTo0AndContinue() {
  clickedNumber = "zero";
  setCurrentValueOrOperatorValue();
}

function setCurrentValueOrOperatorValue() {
  if (operation === "") {
    setCurrentValue(clickedNumber);
    displayChanges(clickedNumber);
  } else {
    setOperatorValueAndCalculate(clickedNumber);
  }
}

function setOperationType() {
  operation = "+";
}

function setCurrentValue(nr) {
  currentValue = +nr;
}

function calculate(current, op, operator) {
  if (op === "+") {
    return current + operator;
  } else if (op === "-") {
    return current - operator;
  } else if (op === "*") {
    return current * operator;
  } else if (op === "/") {
    return current / operator;
  } else {
    alert("Invalid operation!");
  }
}

function displayChanges(val) {
  document.getElementsByClassName("display-inner")[0].innerHTML = val;
}

function setOperatorValueAndCalculate(nr) {
  alert("clicked an operator");
  operatorValue = +nr;

  let calculatedValue = calculate(currentValue, operation, operatorValue);
  currentValue = calculatedValue;
  let calculatedValueString = calculatedValue.toString();
  displayChanges(calculatedValueString);

  operation = "";
  clickedNumber = "";
}

nr1Btn.addEventListener("click", setClickedNrTo1AndContinue);
nr2Btn.addEventListener("click", setClickedNrTo2AndContinue);
nr3Btn.addEventListener("click", setClickedNrTo3AndContinue);
nr4Btn.addEventListener("click", setClickedNrTo4AndContinue);
nr5Btn.addEventListener("click", setClickedNrTo5AndContinue);
nr6Btn.addEventListener("click", setClickedNrTo6AndContinue);
nr7Btn.addEventListener("click", setClickedNrTo7AndContinue);
nr8Btn.addEventListener("click", setClickedNrTo8AndContinue);
nr9Btn.addEventListener("click", setClickedNrTo9AndContinue);
nr0Btn.addEventListener("click", setClickedNrTo0AndContinue);
addBtn.addEventListener("click", setOperationType);
