let currentNum = 0;

const plus = document.getElementById("plus");
const sub = document.getElementById("sub");
const mul = document.getElementById("mul");
const display = document.getElementById("display");

function updateDisplay() {
  if (currentNum > 100) {
    currentNum = 100;
  } else if (currentNum < 0) {
    currentNum = 0;
  }
  display.innerHTML = currentNum;
}

function increment() {
  currentNum += 1;
  updateDisplay();
}

function decrement() {
  currentNum -= 1;
  updateDisplay();
}

function multipleBy2() {
  currentNum *= 2;
  updateDisplay();
}

plus.addEventListener("click", increment);
sub.addEventListener("click", decrement);
mul.addEventListener("click", multipleBy2);
