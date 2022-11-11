"use strict";

const output = document.getElementById('output');

const dogs = []
for (let i=0; i<6; i++) {
  dogs.push(prompt("Input dog's name:"));
}
dogs.sort().reverse();

let res = ''
for (let i=0; i<dogs.length; i++) {
  res += `<li>${dogs[i]}</li>`
}

output.innerHTML = res;