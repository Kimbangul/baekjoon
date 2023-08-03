const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
const input = fs.readFileSync('./input.txt').toString().trim();
let result = '';

for (let i = 'a'.charCodeAt(); i <= 'z'.charCodeAt(); i++) {
  result += [...input].indexOf(String.fromCharCode(i)) + ' ';
}

console.log(result.trim());
