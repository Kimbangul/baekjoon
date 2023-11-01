const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\n');
const [n, m] = input
  .shift()
  .split(' ')
  .map((el) => parseInt(el));

const dictionary = input.slice(0, n);
const questionArr = input.slice(n);
const dictionaryMap = dictionary.reduce((map, val, idx) => {
  map.set(idx + 1, val);
  return map;
}, new Map());

questionArr.forEach((el) => {
  if (isNaN(el)) {
    dictionaryMap.forEach((val, key) => {
      if (el === val) console.log(key);
    });
  } else {
    console.log(dictionaryMap.get(parseInt(el)));
  }
});
