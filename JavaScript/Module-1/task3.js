"use strict";

const output = document.getElementById('output');
const ul = document.getElementsByTagName('ul')[0];

// Task 3
const nums = [];
for (let i=0; i<3; i++) {
  nums.push(Number(prompt('Input number:')));
}
const sum = nums.reduce((curr, num) => {
  return curr + num
})
const prod = nums.reduce((curr, num) => {
  return curr * num
})
const aver = (sum/nums.length).toFixed(2)

output.innerText = `Sum: ${String(sum)}\n Product: ${String(prod)}\n Average: ${String(aver)}`