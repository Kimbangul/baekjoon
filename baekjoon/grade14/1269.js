// /dev/stdin
// , A = { 1, 2, 4 } 이고, B = { 2, 3, 4, 5, 6 } 라고 할 때,
//  A-B = { 1 } 이고, B-A = { 3, 5, 6 } 이므로,
// 대칭 차집합의 원소의 개수는 1 + 3 = 4개이다.

/**
 * 3 5
  1 2 4
  2 3 4 5 6
 */

const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\n');
input = input.map((el) => el.split(' ').map((str) => parseInt(str)));

const a = input[1];
const b = input[2];

const aMinusB = a.filter((el) => !b.includes(el));
const BminusA = b.filter((el) => !a.includes(el));
const union = new Set([...aMinusB, ...BminusA]);

console.log(union.size);
// console.log(input);
