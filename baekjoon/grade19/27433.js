const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = parseInt(fs.readFileSync(filePath).toString());

let result = 1;
let n = input;

while ( n > 0 ) {
  result *= n;
  n--;
}

console.log(result);

/* 
0보다 크거나 같은 정수 N이 주어진다. 이때, N!을 출력하는 프로그램을 작성하시오.
첫째 줄에 정수 N(0 ≤ N ≤ 20)이 주어진다.
첫째 줄에 N!을 출력한다.
*/