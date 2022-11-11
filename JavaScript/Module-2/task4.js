"use strict";

const output = document.getElementById('output');

const nums = [];
let num = Number(prompt('Input number:'));
while(num !== 0) {
  nums.push(num);
  num = Number(prompt('Input number:'));
}
nums.sort(function(a, b){return b-a});

nums.forEach((num) => {
  console.log(num);
})