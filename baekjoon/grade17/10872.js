const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = parseInt(fs.readFileSync(filePath).toString());

let result = 1;

for ( let i = 1; i <= input; i++ ) {
  result = result * i;
}

console.log(result);

/* 
0보다 크거나 같은 정수 N이 주어진다. 
이때, N!을 출력하는 프로그램을 작성하시오.
첫째 줄에 정수 N(0 ≤ N ≤ 12)이 주어진다.
첫째 줄에 N!을 출력한다.

10 -> 3628800
5 -> 120
0 -> 1
*/