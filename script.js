let string = "";
let buttons = document.querySelectorAll("button");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.id === "=") {
      string = eval(string);
      document.querySelector("input").value = string;
    } else if (e.target.id === "DL") {
      const myArray = string.split("");
      console.log(myArray);
      myArray.pop();
      string = myArray.join("");
      console.log(string);
      document.querySelector("input").value = string;
    } else if (e.target.id === "AC") {
      string = "";
      document.querySelector("input").value = string;
    } else {
      console.log(e.target);
      string += e.target.id;
      document.querySelector("input").value = string;
    }
  });
});
