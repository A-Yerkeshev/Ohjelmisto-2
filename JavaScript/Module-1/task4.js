"use strict";

const output = document.getElementById('output');
const ul = document.getElementsByTagName('ul')[0];

// Task 4
const name1 = prompt('What is your name?');
const num = Math.floor(Math.random()*4)+1;
switch(num) {
  case 1:
    output.innerText = `${name1}, you are in Gryffindor.`;
    break;
  case 2:
    output.innerText = `${name1}, you are in Slytherin.`;
    break;
  case 3:
    output.innerText = `${name1}, you are in Hufflepuff.`;
    break;
  case 4:
    output.innerText = `${name1}, you are in Ravenclaw.`;
    break;
}