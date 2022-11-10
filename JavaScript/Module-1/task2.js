"use strict";

const output = document.getElementById('output');
const ul = document.getElementsByTagName('ul')[0];

// Task 2
const name = prompt('What is your name?');
output.innerText = 'Hello, ' + name + '!';