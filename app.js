const calculator = document.getElementById("calculator");
const screen = document.getElementById("calculator-screen");
const keys = document.querySelectorAll(".calculator__key");

// can be changed for higher or lower accuracy

const decimalAccuray = 3;

keys.forEach(function (key) {
  // adds a click event listener to every key
  key.addEventListener("click", function () {
    // gets to data attribute
    executeAction(key, key.dataset.action);
  });
});

function executeAction(key, action) {
  // if no action is defined on a button, it is a number, so append it to the screen
  if (!action) {
    screen.innerHTML += key.innerHTML;
  }

  // removes last character from the string

  if (action == "del") {
    screen.innerHTML = screen.innerHTML.slice(0, -1);
  }

  // only adds a decimal to the screen if there is not already one
  if (action == "decimal" && !screen.innerHTML.includes(".")) {
    screen.innerHTML += key.innerHTML;
  }

  // blanks out the screens innerHTML
  if (action == "reset") {
    screen.innerHTML = "";
  }

  // grabs all the needed values and passes them out to be evaluated

  if (action == "calculate") {
    currentOperand = screen.innerHTML;

    // ensure that any values with pi or e are parsed correctly

    if (currentOperand.includes("π")) {
      currentOperand = currentOperand.replace("π", "*3.14159265359");
    }

    if (currentOperand.includes("e")) {
      currentOperand = currentOperand.replace("e", "*2.71828182846");
    }

    console.log(currentOperand);

    calculate(currentOperand);

    calculator.dataset.prev = "";
    calculator.dataset.operator = "";
  }
}

// evaluates the expression, rounds it to 3 decimal places and removes any trailing zeros from the result

calculate = (currentOperand) =>
  (screen.innerHTML = parseFloat(eval(currentOperand).toFixed(decimalAccuray)));
