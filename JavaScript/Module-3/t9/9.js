'use strict';

const start = document.getElementById('start');
const res = document.getElementById('result');

start.addEventListener('click', (event) => {
  const str = document.getElementById('calculation').value;

  if (str.indexOf('+') > -1) {
    const nums = str.split('+');
    res.innerText = Number(nums[0]) + Number(nums[1]);
  } else if (str.indexOf('-') > -1) {
    const nums = str.split('-');
    res.innerText = Number(nums[0]) - Number(nums[1]);
  } else if (str.indexOf('*') > -1) {
    const nums = str.split('*');
    res.innerText = Number(nums[0]) * Number(nums[1]);
  } else if (str.indexOf('/') > -1) {
    const nums = str.split('/');
    res.innerText = Number(nums[0]) / Number(nums[1]);
  }
});