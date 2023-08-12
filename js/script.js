let num1, operator, num2;
let displayNum;
let numbers = document.querySelectorAll(".target-num");
let operators = document.querySelectorAll(".target-operator");
let display = document.querySelector(".screen");
let equal = document.querySelector(".equal");
let flag = false;

operators.forEach((button) => {
  button.addEventListener("click", () => {
    flag = true;
    if (button.classList.contains("divide")) {
      operator = "/";
    } else if (button.classList.contains("multiply")) {
      operator = "*";
    } else if (button.classList.contains("subtract")) {
      operator = "-";
    } else if (button.classList.contains("add")) {
      operator = "+";
    }
  });
});

numbers.forEach((button) => {
  button.addEventListener("click", () => {
    if (flag === false) {
      display.innerText += button.textContent;
      num1 = display.innerText;
    } else if (flag === true) {
      display.innerText = button.textContent;
      num2 = display.innerText;
      flag = "continue";
    } else if (flag === "continue") {
      display.innerText += button.textContent;
      num2 = display.innerText;
    }
  });
});

equal.addEventListener("click", () => {
  let convertedNum1 = parseInt(num1);
  let convertedNum2 = parseInt(num2);
  let answer = operate(operator, convertedNum1, convertedNum2);
  display.innerText = answer;
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
