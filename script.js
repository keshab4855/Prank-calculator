//1. grab all the buttons as in array
//2. loop through the array and add event  listener to each button
//3. whwen a button is cliked, grab th buttons value and store in a variable

//4. grab the display element
//5. add the value from #3 to the display element
const buttons = document.querySelectorAll("button");
const displayEl = document.querySelector(".display-box");

const buttonsArr = Array.from(buttons);

let strToDisplay = "";
buttonsArr.map((btns) => {
  btns.addEventListener("click", () => {
    const val = btns.innerText;
    strToDisplay += val;
    display(strToDisplay);
  });
});

const display = (str) => {
  displayEl.value = str;
};
