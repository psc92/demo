let count = 0;
const countText = document.getElementById("count");

function increment() {
  count++;
  updateText();
}

function decrement() {
  count--;
  updateText();
}

function reset() {
  count = 0;
  updateText();
}

function updateText() {
  countText.innerHTML = count;
  console.log(count);
}

const sadpok = 0;
const newConst = 0;

function testFunc() {
  console.log("TEST");
}
