let num1, operator, num2;
let pairEvaluation;
let numbers = document.querySelectorAll(".target-num");
let operators = document.querySelectorAll(".target-operator");
let display = document.querySelector(".screen");
let equal = document.querySelector(".equal");
let clear = document.querySelector(".clear");
let point = document.querySelector(".point");
let flag = false;
let firstPairValue;

// DEACTIVATES DECIMAL UPON CLICKING
point.addEventListener("click", () => {
  point.disabled = true;
});

// RESETS CALCULATOR
clear.addEventListener("click", () => {
  display.innerText = "";
  num1 = "";
  num2 = "";
  operator = "";
  pairEvaluation = 0;
  flag = false;
  firstPairValue = 0;
  point.disabled = false;
});

// SET OPERATOR VALUE PER CLICK AND IF CHAINING MORE THAN 2 NUMBERS STORE OPERATION OF FIRST 2 NUMS AS THE FIRST NUM VALUE
operators.forEach((button) => {
  button.addEventListener("click", () => {
    flag = true;
    if (button.classList.contains("divide")) {
      operator = "/";
      if (parseInt(num1) && parseInt(num2)) {
        num1 = firstPairValue;
      }
    } else if (button.classList.contains("multiply")) {
      operator = "*";
      if (parseInt(num1) && parseInt(num2)) {
        num1 = firstPairValue;
      }
    } else if (button.classList.contains("subtract")) {
      operator = "-";
      if (parseInt(num1) && parseInt(num2)) {
        num1 = firstPairValue;
      }
    } else if (button.classList.contains("add")) {
      operator = "+";
      if (parseInt(num1) && parseInt(num2)) {
        num1 = firstPairValue;
      }
    }
  });
});

// EVALUATES AND STORES OPERATION OF PAIRED VALUES
function storePairValue() {
  let numConverted1 = parseFloat(num1);
  let numConverted2 = parseFloat(num2);
  firstPairValue = operate(operator, numConverted1, numConverted2);
}

// DISPLAYS NUMS AND STORES THEM IN VARIABLES AS STRINGS
numbers.forEach((button) => {
  button.addEventListener("click", () => {
    if (flag === false) {
      display.innerText += button.textContent;
      num1 = display.innerText;
    } else if (flag === true) {
      display.innerText = button.textContent;
      num2 = display.innerText;
      storePairValue();
      flag = "continue";
    } else if (flag === "continue") {
      display.innerText += button.textContent;
      num2 = display.innerText;
      storePairValue();
    }
  });
});

// EVALUATES AND DISPLAYS FINAL OPERATION AND CONVERT STRING VALUE TO NUMBER
equal.addEventListener("click", () => {
  let convertedNum1 = parseFloat(num1);
  let convertedNum2 = parseFloat(num2);
  pairEvaluation = operate(operator, convertedNum1, convertedNum2);
  display.innerText = Math.round(pairEvaluation * 10) / 10;
  if (convertedNum2 === 0 && operator === "/") {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
    display.innerText = "lol";
  }
});

function operate(operator, num1, num2) {
  if (operator === "+") {
    return add(num1, num2);
  } else if (operator === "-") {
    return subtract(num1, num2);
  } else if (operator === "*") {
    return multiply(num1, num2);
  } else if (operator === "/") {
    return divide(num1, num2);
  }
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}
