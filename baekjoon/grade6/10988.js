const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
const input = fs.readFileSync('./input.txt').toString().trim();

const reversedInput = [...input].reverse().join('').trim();

input === reversedInput ? console.log(1) : console.log(0);
