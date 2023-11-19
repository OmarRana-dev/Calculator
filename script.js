let value1 = "";
let value2 = "";
let operator = "";
let ans = "";
const rademateOpr = "+-**/^";

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
      return parseFloat(value1) / parseFloat(value2);
  }
}

function updateDisplay(operator, value1, value2) {
  document.querySelector("#display").textContent = value1 + operator + value2;
}

let buttons = document.querySelectorAll("button");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    curentValue = e.target.value;
    // console.log(e)
    // IN THIS FIRST SECTION WE PUT OPRETION SINE AND DO "ALLCLEAR" AND "EQUAL" TO VALUES
    if (
      rademateOpr.includes(curentValue) ||
      curentValue === "EQ" ||
      curentValue === "AC"
    ) {
      // sub section use for put opration sine in values
      if (
        rademateOpr.includes(curentValue) &&
        !value2 &&
        typeof value1 === "string" &&
        value1.length !== 0
      ) {
        operator = curentValue;
        updateDisplay(operator, value1, value2);
      }
      // sub section use for "ALLCLEAR" key
      else if (curentValue === "AC") {
        value1 = "";
        value2 = "";
        operator = "";
        updateDisplay(operator, value1, value2);
      }
      // sub section use for "Equal" values and give back resutl
      else if (curentValue === "EQ") {
        value1 = operate(operator, value1, value2).toString();
        value2 = "";
        operator = "";
        updateDisplay(operator, value1, value2);
      }
      // sub section use if user put 4th value in form of oprator so this function first do previous opration and then give back result with currentOpretor and ask to user put 3rd value.
      else if (
        typeof operator === "string" &&
        operator.length !== 0 &&
        typeof value1 === "string" &&
        value1.length !== 0 &&
        typeof value2 === "string" &&
        value2.length !== 0
      ) {
        value1 = operate(operator, value1, value2).toString();
        value2 = "";
        operator = "";
        operator = curentValue;
        updateDisplay(operator, value1, value2);
      }
    }
    /*IN THIS SECTION WE MAKE USE ABLE DELETE BUTTON*/ 
    else if (curentValue === "DL") {
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
      // put value 1
      if (typeof operator === "string" && operator.length === 0) {
        value1 += curentValue;
        updateDisplay(operator, value1, value2);
      }
      // put value 2
      else if (typeof operator === "string" && operator.length !== 0) {
        value2 += curentValue;
        updateDisplay(operator, value1, value2);
      }
    }
  });
});
