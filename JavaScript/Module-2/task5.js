"use strict";

const output = document.getElementById('output');

const nums = [];
let num = Number(prompt('Input number:'));

while(!nums.includes(num)) {
  nums.push(num);
  num = Number(prompt('Input number:'));
}

output.innerText = 'Number has already been given';
nums.sort((a, b) => a - b);

nums.forEach((num) => {
  console.log(num);
})