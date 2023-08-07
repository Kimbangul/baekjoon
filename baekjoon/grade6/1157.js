const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
const input = fs.readFileSync('./input.txt').toString().trim();
const word = [...input].reduce((prev, cur) => {
  prev[cur.toUpperCase()] = (prev[cur.toUpperCase()] ?? 0) + 1;
  return prev;
}, {});

const max = Math.max(...Object.values(word));
const maxArr = Object.keys(word).filter((key) => word[key] === max);

if (maxArr.length > 1) {
  console.log('?');
} else {
  console.log(maxArr[0]);
}
