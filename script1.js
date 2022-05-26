////////Selecting the ELEMENTS////////////
//1. Select all the buttons
let buttons = document.querySelectorAll("button");
//2. form the buttons array
const buttonsArr = Array.from(buttons);
//3. Select the operators
const operators = ["+", "-", "*", "/"];
//4. Select the input field
const displayEl = document.querySelector(".display-box");
//5. assign the strToDisplay to empty string
let strToDisplay = "";
//6. assign the lastOperator as empty string
let lastOperator = "";
buttonsArr.map((btns) => {
  btns.addEventListener("click", () => {
    debugger;
    const val = btns.innerText;
    if (val === "AC") {
      strToDisplay = "";
      display(strToDisplay);
      return;
    }
    if (val === "=") {
      const lastChar = strToDisplay[strToDisplay.length - 1];
      if (operators.includes(lastChar)) {
        strToDisplay = strToDisplay.slice(0, -1);
      }
      return total();
    }
    if (val === "C") {
      strToDisplay = strToDisplay.slice(0, -1);
      return display(strToDisplay);
    }
    if (operators.includes(val)) {
      lastOperator = val;
      const lastChar = strToDisplay[strToDisplay.length - 1];
      if (operators.includes(lastChar)) {
        strToDisplay = strToDisplay.slice(0, -1);
        strToDisplay += val;
        return display(strToDisplay);
      }
    }

    if (val === ".") {
      if (lastOperator) {
        const operatorIndex = strToDisplay.lastIndexOf(lastOperator);
        const lastNumberSet = strToDisplay.slice(operatorIndex + 1);
        if (lastNumberSet.includes(".")) {
          return;
        }
      }
      if (!lastOperator && strToDisplay.includes(".")) {
        return;
      }
    }
    strToDisplay += val;
    display(strToDisplay);
  });
});

const display = (str) => {
  displayEl.value = str;
};

let total = () => {
  const ttl = eval(strToDisplay);
  display(ttl);
  strToDisplay = ttl.toString();
};
