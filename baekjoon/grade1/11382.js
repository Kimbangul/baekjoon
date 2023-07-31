const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split(' ');

const num = input.map((el) => parseInt(el));

console.log(num[0] + num[1] + num[2]);
