const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\n');
const [n, m] = input
  .shift()
  .split(' ')
  .map((el) => parseInt(el));

const dictionary = input.slice(0, n);
const questionArr = input.slice(n);
const dictionaryMap = dictionary.reduce((map, obj) => {
  map.set(obj.key, obj.value);
  return map;
}, new Map());

// console.log(input);
console.log(questionArr);
console.log(dictionaryMap);

// questionArr.forEach((el) => {

// });
