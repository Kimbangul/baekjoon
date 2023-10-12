// /dev/stdin
const fs = require('fs');
let input = fs
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => parseInt(el));

let result = '';
// const list = input.slice(1, input.length).sort((a, b) => a - b); -- 1

// list.forEach((el)  => {
//   result+=el+'\n'
// });
// console.log(result.trim());

const merge = (left, right) => {
  const result = [];
  console.log(left, right);
  while (left.length !== 0 && right.length !== 0) {
    left[0] <= right[0] ? result.push(left.shift()) : result.push(right.shift());
    console.log(left, right);
  }

  return [...result, ...left, ...right];
};

const mergeSort = (arr) => {
  if (arr.length === 1) return Array;

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  console.log(`mergeSort : ${left} ${right}`);

  return merge(mergeSort(left), mergeSort(right));
};
