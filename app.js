const calculator = document.getElementById("calculator");
const screen = document.getElementById("calculator-screen");
const keys = document.querySelectorAll(".calculator__key");

// can be changed for higher or lower accuracy

const decimalAccuracy = 3;

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

  // not the ideal solution to this problem, I would much rather maintain the actual characters instead of immediately converting them

  if (action == "pi") {
    screen.innerHTML += Math.PI.toFixed(decimalAccuracy);
  }

  if (action == "e") {
    screen.innerHTML += Math.E.toFixed(decimalAccuracy);
  }

  if (action == "sqroot") {
    currentOperand = eval(screen.innerHTML);

    squareRoot(currentOperand);
  }

  if (action == "sqr") {
    currentOperand = eval(screen.innerHTML);

    square(currentOperand);
  }

  // grabs all the needed values and passes them out to be evaluated

  if (action == "calculate") {
    currentOperand = screen.innerHTML;

    calculateNums(currentOperand);
  }
}

// evaluates the expression, rounds it to 3 decimal places and removes any trailing zeros from the result

calculateNums = (currentOperand) =>
  (screen.innerHTML = parseFloat(
    eval(currentOperand).toFixed(decimalAccuracy)
  ));

squareRoot = (currentOperand) =>
  (screen.innerHTML = parseFloat(
    Math.sqrt(currentOperand).toFixed(decimalAccuracy)
  ));

square = (currentOperand) =>
  (screen.innerHTML = parseFloat(
    Math.pow(currentOperand, 2).toFixed(decimalAccuracy)
  ));
