// /dev/stdin
const fs = require('fs');
let input = fs
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => parseInt(el));

let result = '';
const merge = (left, right) => {
  const result = [];
  while (left.length !== 0 && right.length !== 0) {
    left[0] <= right[0] ? result.push(left.shift()) : result.push(right.shift());
  }

  return [...result, ...left, ...right];
};

const mergeSort = (arr) => {
  if (arr.length === 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
};

const resultArr = mergeSort(input.slice(1, input.length));

resultArr.forEach((el) => {
  result += el + '\n';
});

console.log(result.trim());
