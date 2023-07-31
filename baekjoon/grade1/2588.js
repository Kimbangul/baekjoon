let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\n');

const num = input.map((el) => parseInt(el));

const multiplyNum = `${num[1]}`.split('').map((el) => parseInt(el));

console.log(num[0] * multiplyNum[2]);
console.log(num[0] * multiplyNum[1]);
console.log(num[0] * multiplyNum[0]);
console.log(num[0] * num[1]);
