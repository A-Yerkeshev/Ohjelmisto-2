"use strict";

const output = document.getElementById('output');
const ul = document.getElementsByTagName('ul')[0];

// Task 7
const dices = Number(prompt('Number of dices:'));
let sum1 = 0;
for (let d=0; d<dices; d++) {
  sum1 += Math.floor(Math.random()*6)+1;
}
output.innerText = sum1;