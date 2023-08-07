const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
const input = fs
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.trim().split(' '));

const grade = {
  'A+': 4.5,
  A0: 4.0,
  'B+': 3.5,
  B0: 3.0,
  'C+': 2.5,
  C0: 2.0,
  'D+': 1.5,
  D0: 1.0,
  F: 0.0,
};

let totalBySubj = 0.0;
let totalRating = 0.0;

input.forEach((el) => {
  if (el[2] === 'P') {
    return;
  }

  totalBySubj += parseFloat(el[1]) * grade[el[2]];
  totalRating += parseFloat(el[1]);
});

console.log(totalBySubj / totalRating);
