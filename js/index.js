let count = 0;
console.log(count);

let countEL = document.getElementById("count-el");
console.log(countEL);

let saveEl = document.getElementById("save-el");
console.log(saveEl);

function increment() {
  count = count + 1;
  countEL.textContent = count;
}

function save() {
  let countStr = count + " - ";
  saveEl.textContent = saveEl.textContent + countStr;
  countEL.textContent = 0;
  count = 0;
}
