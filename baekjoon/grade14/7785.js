// /dev/stdin
const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\n');
input.shift();
input = input.map((el) => el.split(' '));

let obj = {};
let result = [];
input.forEach((el) => (obj[el[0]] = el[1].trim()));

console.log(obj);
Object.keys(obj).forEach((el) => {
  if (obj[el] === 'enter') {
    result.push(el);
  }
});
console.log(result.sort().reverse().join('\n').trim());
