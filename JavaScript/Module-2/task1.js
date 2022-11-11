"use strict";

const output = document.getElementById('output');

const nums = [];
for (let i=0; i<5; i++) {
  nums.push(prompt('Input number:'));
}

for (let i=nums.length-1; i>=0; i--) {
  console.log(nums[i]);
}

