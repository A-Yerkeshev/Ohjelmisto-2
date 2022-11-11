"use strict";

const output = document.getElementById('output');

const num = Number(prompt('Number of participants'));
let res = '';
for (let i=0; i<num; i++) {
  const name = prompt('Enter participant name');
  res += `<li>${name}</li>`;
}
output.innerHTML = res;
