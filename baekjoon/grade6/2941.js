const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
let input = fs.readFileSync('./input.txt').toString().trim();
const word = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];

word.forEach((el, idx) => {
  while (input.indexOf(el) >= 0) {
    input = input.replaceAll(el, idx);
  }
});

console.log(input.length);
