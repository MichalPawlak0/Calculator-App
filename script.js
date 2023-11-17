let operand1 = ""
let operand2 = ""
let operator = ""
let screenResetOn = false

const nr1Btn = document.getElementById("nr1")
const nr2Btn = document.getElementById("nr2")
const nr3Btn = document.getElementById("nr3")
const nr4Btn = document.getElementById("nr4")
const nr5Btn = document.getElementById("nr5")
const nr6Btn = document.getElementById("nr6")
const nr7Btn = document.getElementById("nr7")
const nr8Btn = document.getElementById("nr8")
const nr9Btn = document.getElementById("nr9")
const nr0Btn = document.getElementById("nr0")
const addBtn = document.getElementById("add")
const subtractBtn = document.getElementById("subtract")
const multiplyBtn = document.getElementById("multiply")
const divideBtn = document.getElementById("divide")
const equalBtn = document.getElementById("equal")
const clearBtn = document.getElementById("clear")
const displayEl = document.querySelector(".display-inner")
const displayOutsideEl = document.querySelector(".display")

nr1Btn.addEventListener("click", handleNumberClick)
nr2Btn.addEventListener("click", handleNumberClick)
nr3Btn.addEventListener("click", handleNumberClick)
nr4Btn.addEventListener("click", handleNumberClick)
nr5Btn.addEventListener("click", handleNumberClick)
nr6Btn.addEventListener("click", handleNumberClick)
nr7Btn.addEventListener("click", handleNumberClick)
nr8Btn.addEventListener("click", handleNumberClick)
nr9Btn.addEventListener("click", handleNumberClick)
nr0Btn.addEventListener("click", handleNumberClick)
addBtn.addEventListener("click", handleOperatorClick)
subtractBtn.addEventListener("click", handleOperatorClick)
multiplyBtn.addEventListener("click", handleOperatorClick)
divideBtn.addEventListener("click", handleOperatorClick)
equalBtn.addEventListener("click", handleEqualClick)
clearBtn.addEventListener("click", handleClearClick)

function handleNumberClick(e){
 if(displayEl.textContent==="0"||screenResetOn){
  resetDisplay()
 }
 displayEl.textContent+=e.target.textContent
}

function resetDisplay(){
  displayEl.textContent=""
  screenResetOn = false
}

function add(num1,num2) {
  return Math.round((num1+num2)*10000)/10000
}
function subtract(num1,num2) {
  return Math.round((num1-num2)*10000)/10000
}
function multiply(num1,num2) {
  return Math.round((num1*num2)*10000)/10000 
}
function divide(num1,num2) {
  return Math.round((num1/num2)*10000)/10000 
}
function operate(op,n1,n2){
  n1=(+n1)
  n2=(+n2)
  switch (op) {
    case "+":
      return add(n1,n2)
      
    case "-":
      return subtract(n1,n2)
      
    case "*":
      return multiply(n1,n2)
      
    case "/":
      if (n2===0) return null
      else return divide(n1,n2)
      
    default:
      return null
  }
}

function setOperator(op){
  switch (op) {
    case "+":
      operator="+"
      break
    case "-":
      operator="-"
      break
    case "*":
      operator="*"
      break
    case "/":
      operator="/"
      break
    case "":
      operator=""
      break
    default:
      alert("Invalid operator")
      break
  }
}

function evaluate(){
  if(operator===""||screenResetOn)
    return
  operand2 = displayEl.textContent
  displayEl.innerText = operate(operator,operand1,operand2)
  operator = ""
}

function handleOperatorClick(e){
  if(operator!=="")
    evaluate()
  operand1 = displayEl.textContent
  operator=e.target.textContent
  screenResetOn=true
}
function handleEqualClick(){
  evaluate()
}
function handleClearClick(){
  displayEl.textContent=""
  operand1 = ""
  operand2 = ""
  operator = ""
}