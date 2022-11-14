'use strict';

const start = document.getElementById('start');
const res = document.getElementById('result');

start.addEventListener('click', (event) => {
  const oper = document.getElementById('operation').value;
  const n1 = Number(document.getElementById('num1').value);
  const n2 = Number(document.getElementById('num2').value);

  switch(oper) {
    case 'add':
      res.innerText = n1+n2;
      break;
    case 'sub':
      res.innerText = n1-n2;
      break;
    case 'multi':
      res.innerText = n1*n2;
      break;
    case 'div':
      res.innerText = n1/n2;
      break;
  }
});