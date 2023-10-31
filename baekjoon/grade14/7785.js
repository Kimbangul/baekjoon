const fs = require('fs');
let input = fs
  .readFileSync('./input.txt')
  .toString()
  .split('\n')
  .map((el) => el.split(' '));
input.shift();

let company = new Map(input.map((el) => [el[0], el[1]]));
let result = [];

for (let key of company.keys()) {
  console.log(company.get(key));
  if (company.get(key) !== 'leave') result.push(key);
}

result.sort().reverse();

console.log(result.join('\n'));
