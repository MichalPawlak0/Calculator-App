let operand1 = ""
let operand2 = ""
let operator = ""
let screenResetOn = false

const nr1Btn = document.querySelector("#nr1")
const nr2Btn = document.querySelector("#nr2")
const nr3Btn = document.querySelector("#nr3")
const nr4Btn = document.querySelector("#nr4")
const nr5Btn = document.querySelector("#nr5")
const nr6Btn = document.querySelector("#nr6")
const nr7Btn = document.querySelector("#nr7")
const nr8Btn = document.querySelector("#nr8")
const nr9Btn = document.querySelector("#nr9")
const nr0Btn = document.querySelector("#nr0")
const addBtn = document.querySelector("#add")
const subtractBtn = document.querySelector("#subtract")
const multiplyBtn = document.querySelector("#multiply")
const divideBtn = document.querySelector("#divide")
const equalBtn = document.querySelector("#equal")
const clearBtn = document.querySelector("#clear")
const pointBtn = document.querySelector("#point")
const displayEl = document.querySelector(".display-inner")

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
pointBtn.addEventListener("click", appendPoint)
window.addEventListener("keypress", handleKeyboardPress)

function handleNumberClick(e){
 if(displayEl.textContent==="0"||screenResetOn){
  resetDisplay()
 }
 displayEl.textContent += e.target.textContent
}
function resetDisplay(){
  displayEl.textContent=""
  screenResetOn = false
}
function appendPoint(){
  if(displayEl.textContent.includes(".")||screenResetOn)
    return
  if(displayEl.textContent===""){
    displayEl.textContent += "0."
    return
  }
  displayEl.textContent += "."
}
function handleKeyboardPress(e){
  if(displayEl.textContent==="0"||screenResetOn){
    resetDisplay()
   }
   if((/^[0-9]/).test(e.key)){
    displayEl.textContent += e.key
   }else if((e.key==="+")||(e.key==="-")||(e.key==="*")||(e.key==="/")){
    handleOperatorClick(e.key)
   }else if(e.key==="Enter"){
    evaluate()
   }else if(e.key==="."){
    appendPoint()
   }else if(e.key==="c"){
    handleClearClick()
   }
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
  if(e.target)
    operator=e.target.textContent
  else{
    operator=e
  }
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