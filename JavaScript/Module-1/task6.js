"use strict";

const output = document.getElementById('output');
const ul = document.getElementsByTagName('ul')[0];

// Task 6
if (confirm("Should I calculate the square root?")) {
    const num = Number(prompt('Input number:'));

    if (num > 0) {
        output.innerText = Math.sqrt(num);
    } else {
        output.innerText = "The square root of a negative number is not defined";
    }
} else {
output.innerText =  "The square root is not calculated."
}
