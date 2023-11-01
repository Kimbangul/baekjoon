// /dev/stdin
const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\n');
const [n, m] = input
  .shift()
  .split(' ')
  .map((el) => parseInt(el));

const dictionary = input.slice(0, n);

const questionArr = input.slice(n);
const dictionaryMap = new Map();
const dictionaryReverseMap = new Map();

dictionary.forEach((val, idx) => {
  let value = val.trim();
  dictionaryMap.set(idx + 1, value);
  dictionaryReverseMap.set(value, idx + 1);
});

questionArr.forEach((el) => {
  if (isNaN(el)) {
    console.log(dictionaryReverseMap.get(el.trim()));
  } else {
    console.log(dictionaryMap.get(parseInt(el)));
  }
});
