// /dev/stdin
const fs = require('fs');
const input = parseInt(fs.readFileSync('./input.txt').toString().trim());

let remainder = input % 5;
let kg5 = 0;
let kg3 = 0;

while (remainder <= input) {
  if (remainder % 3 === 0) {
    kg3 = remainder / 3;
    kg5 = (input - kg3 * 3) / 5;
    break;
  } else {
    remainder += 5;
  }
}

const result = kg3 + kg5;
console.log(result > 0 ? result : -1);

/*
 input % 5 === n
 n % 3 === 0  
*/
