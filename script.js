let value1 = "";
let value2 = "";
let operator = "";
let ans = "";
const rademateOpr = "+-**/";

// This function use for operations to make this easear.
function operate(operator, value1, value2) {
  switch (operator) {
    case "+":
      return parseFloat(value1) + parseFloat(value2);
    case "-":
      return parseFloat(value1) - parseFloat(value2);
    case "*":
      return parseFloat(value1) * parseFloat(value2);
    case "**":
      return parseFloat(value1) ** parseFloat(value2);
    case "/":
      if (value2 != 0) return parseFloat(value1) / parseFloat(value2);
      else {
        allClear();
        alert("Division by zero is not possible!");
      }
  }
}

function allClear() {
  value1 = "";
  value2 = "";
  operator = "";
  updateDisplay(operator, value1, value2);
}

function updateDisplay(operator, value1, value2) {
  document.querySelector("#display").textContent = value1 + operator + value2;
}

let buttons = document.querySelectorAll("button");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    currentValue = e.target.value;
    // IN THIS FIRST SECTION WE PUT OPRETION SINE AND DO "ALLCLEAR" AND "EQUAL" TO VALUES
    if (
      rademateOpr.includes(currentValue) ||
      currentValue === "EQ" ||
      currentValue === "AC"
    ) {
      // sub section use for put opration sine in values
      if (
        rademateOpr.includes(currentValue) &&
        !value2 &&
        typeof value1 === "string" &&
        value1.length !== 0
      ) {
        operator = currentValue;
        updateDisplay(operator, value1, value2);
      }
      // sub section use for "ALLCLEAR" key
      else if (currentValue === "AC") {
        allClear();
      }
      // sub section use for "Equal" values and give back resutl
      else if (currentValue === "EQ") {
        value1 = operate(operator, value1, value2).toString();
        value2 = "";
        operator = "";
        updateDisplay(operator, value1, value2);
      }
      // sub section use if user put 4th value in form of oprator so this function first do previous opration and then give back result with currentOpretor and ask to user put 3rd value.
      else if (typeof operator === "string" && operator.length !== 0 && typeof value1 === "string" && value1.length !== 0 && typeof value2 === "string" && value2.length !== 0) {
        value1 = operate(operator, value1, value2).toString();
        value2 = "";
        operator = "";
        operator = currentValue;
        updateDisplay(operator, value1, value2);
      }
    } 
    /*IN THIS SECTION WE MAKE USE ABLE DELETE BUTTON*/
    else if (currentValue === "DL") {
      if (typeof value2 === "string" && value2.length !== 0) {
        const myArray = value2.split("");
        myArray.pop();
        value2 = myArray.join("");
        updateDisplay(operator, value1, value2);
      } else if (typeof operator === "string" && operator.length !== 0) {
        const myArray = operator.split("");
        myArray.pop();
        operator = myArray.join("");
        updateDisplay(operator, value1, value2);
      } else if (typeof value1 === "string" && value1.length !== 0) {
        const myArray = value1.split("");
        myArray.pop();
        value1 = myArray.join("");
        updateDisplay(operator, value1, value2);
      }
    } 
    /*IN THIS SECTION WE PUT NUM VALUES*/
    else {
      // check is decimal "." have or not in value1 or value2 
      const decimalCheck1 = value1.includes(".");
      const decimalCheck2 = value2.includes(".");
      // put value in 1st var
      if (
        (typeof operator === "string" &&
          operator.length === 0 &&
          decimalCheck1 === true &&
          currentValue !== ".") ||
        (typeof operator === "string" &&
          operator.length === 0 &&
          decimalCheck1 === false)
      ) {
        value1 += currentValue;
        updateDisplay(operator, value1, value2);
      }
      // put value in 2nd var
      else if (
        (typeof operator === "string" &&
          operator.length !== 0 &&
          decimalCheck2 === true &&
          currentValue !== ".") ||
        (decimalCheck2 === false &&
          typeof operator === "string" &&
          operator.length !== 0)
      ) {
        value2 += currentValue;
        updateDisplay(operator, value1, value2);
      }
    }
  });
});
