//1. grab all the buttons as in array
//2. loop through the array and add event  listener to each button
//3. whwen a button is cliked, grab th buttons value and store in a variable

//4. grab the display element
//5. add the value from #3 to the display element
const buttons = document.querySelectorAll("button");
const displayEl = document.querySelector(".display-box");

const operators = ["+", "-", "*", "/"];

const buttonsArr = Array.from(buttons);

let lastOperator = "";

let strToDisplay = "";
buttonsArr.map((btns) => {
  btns.addEventListener("click", () => {
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
        strToDisplay = strToDisplay.slice(0, 1);
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
      if (!lastOperator && strToDisplay.includes(".")) return;
    }

    // if (strToDisplay.includes(".")) return;
    strToDisplay += val;
    display(strToDisplay);
  });
});

const display = (str) => {
  displayEl.value = str;
};

const total = () => {
  const ttl = eval(strToDisplay);
  display(ttl);
  /////converting to the string because slice methodd does not work in number ////
  strToDisplay = ttl.toString();
};
