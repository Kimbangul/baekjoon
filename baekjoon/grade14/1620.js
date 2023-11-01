// /dev/stdin
const fs = require('fs');
let input = fs
  .readFileSync('./input.txt')
  .toString()
  .split('\n')
  .map((el) => el.trim());
const [n, m] = input
  .shift()
  .split(' ')
  .map((el) => parseInt(el));
let answer = [];

const dictionary = input.slice(0, n);
const questionArr = input.slice(n);
const dictionaryObj = {};

console.log(questionArr);
dictionary.forEach((el, idx) => {
  dictionaryObj[el] = idx + 1;
  dictionaryObj[idx + 1] = el;
});

console.log(dictionaryObj);

questionArr.forEach((el) => {
  answer.push(dictionaryObj[el]);
});

console.log(answer.join('\n'));
// console.log(input);
