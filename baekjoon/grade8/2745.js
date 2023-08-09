const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
const input = fs.readFileSync('./input.txt').toString().trim().split(' ');
let word = {};
for (let i = 0; i <= 25; i++) {
  word[String.fromCharCode(65 + i)] = 10 + i;
}
const result = [...input[0]].reverse().reduce((prev, cur, idx) => {
  let digitNum = Math.pow(parseInt(input[1]), idx);
  const num = cur.charCodeAt() >= 65 ? word[cur] : parseInt(cur);

  return (prev += digitNum * num);
}, 0);

console.log(result);
