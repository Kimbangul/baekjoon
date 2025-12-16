const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
const lastNum = parseInt(input.shift());
input = input[0].split(' ').map((num) => parseInt(num));
let result = 'Nice';

let cookieOrder= 1;
let wating = [];

let currentPointer = 0;
while ( currentPointer < input.length ) {
  const current = input[currentPointer];

  if ( cookieOrder === current ) {
    currentPointer++;
    cookieOrder++;
    continue;
  } else if ( cookieOrder === wating[wating.length - 1] ) {
    cookieOrder++;
    wating.pop();
    continue;
  } else {
    if ( wating.length === 0 || current < wating[wating.length - 1] ) {
      currentPointer++;
      wating.push(current);
    } else {
      result = 'Sad';
      break;
    }
  }
}
console.log(result);