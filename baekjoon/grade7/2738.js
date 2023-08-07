const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
const input = fs
  .readFileSync('./input.txt')
  .toString()
  .split('\n')
  .map((el) => el.trim().split(' '));

const mtScale = input.splice(0, 1).flat();
const mtA = input.splice(0, mtScale[0]);
const mtB = input;

const newMt = mtA.map((row, rowIdx) => {
  return row
    .map((cell, cellIdx) => {
      return parseInt(cell) + parseInt(mtB[rowIdx][cellIdx]);
    })
    .join(' ')
    .trim();
});

console.log(newMt.join('\n').trim());
