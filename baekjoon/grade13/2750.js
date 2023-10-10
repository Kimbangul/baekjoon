// /dev/stdin
const fs = require('fs');
let input = fs
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => parseInt(el));

//   -- 1
// input = input.slice(1, input.length);
// let result = '';
// const sortedArr = input.sort((a, b) => a - b);

// sortedArr.forEach((el) => {
//   result = result + '\n' + el.toString();
// });

// console.log(result.trim());

// -- 2
input = input.slice(1, input.length);

for (let i = 0; i < input.length - 1; i++) {
  for (let j = i + 1; j < input.length; j++) {
    let tmp;

    if (input[i] > input[j]) {
      tmp = input[j];
      input[j] = input[i];
      input[i] = tmp;
      // console.log(input);
    }
  }
}

let result = '';
input.forEach((el) => {
  result = result + '\n' + el.toString();
});

console.log(result.trim());

// console.log(input);
