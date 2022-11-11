"use strict";

const output = document.getElementById('output');

function rollDice() {
  return Math.floor((Math.random()*6))+1;
}

let res;
let results = '';

while(res !== 6) {
  res = rollDice();
  results += `<li>${res}</li>`;
}

output.innerHTML = results;
