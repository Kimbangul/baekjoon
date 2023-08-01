const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

let result = 0;
for (let i = 1; i <= parseInt(input); i++) {
  result += i;
}
console.log(result);
