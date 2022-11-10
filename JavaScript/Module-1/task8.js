"use strict";

const output = document.getElementById('output');
const ul = document.getElementsByTagName('ul')[0];

// Task 8
const starty = prompt('Starting year:');
const endy = prompt('Ending year:');

let listElms = ''
for (let y=starty; y<=endy; y++) {
  if ((y%4 == 0 && y%100 != 0) || y%400 == 0) {
    listElms += `<li>${y}</li>`;
  }
}
ul.innerHTML = listElms;