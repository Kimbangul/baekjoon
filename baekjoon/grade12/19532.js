// /dev/stdin
const fs = require('fs');
const input = fs
  .readFileSync('./input.txt')
  .toString()
  .split(' ')
  .map((el) => parseInt(el));
const [a, b, c, d, e, f] = [input[0], input[1], input[2], input[3], input[4], input[5]];

/* 
    adx + bdy = cd
  - adx + aey = af
  ==================
        (bd-ae)y = (cd - af)
        y = (cd - af) / (bd - ae)
*/

let y = (c * d - a * f) / (b * d - a * e);
let x = (c - b * y) / a || (f - e * y) / d;

console.log(`${x} ${y}`);
