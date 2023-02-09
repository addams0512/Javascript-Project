let count = 0;
let countEl = document.getElementById("count-el");

function increment() {
  count++;
  countEl.textContent = count;
}
function reset() {
  count = 0;
  countEl.textContent = count;
}

let saveEl = document.getElementById("save-el");

function save() {
  let result = count + " - ";
  saveEl.textContent += result;
  count = 0;
  countEl.textContent = 0;
}
