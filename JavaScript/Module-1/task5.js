"use strict";

const output = document.getElementById('output');
const ul = document.getElementsByTagName('ul')[0];

// Task 5
const year = Number(prompt('Input year'));

if ((year%4 == 0 && year%100 != 0) || year%400 == 0) {
  output.innerText = `Year ${year} is leap year`;
} else {
  output.innerText = `Year ${year} is not a leap year`; 
}