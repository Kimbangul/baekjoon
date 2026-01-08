const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ').map((num) => parseInt(num));

let n = input[0];
let k = input[1];

if ( k === 0 ) {
  console.log(1);
  return;
}

for ( let i = 1; i < input[1]; i++ ) {
  n = n * (input[0] - i);
  k = k * i;
}

console.log(n / k);


/* 
자연수 N K가 주어졌을 때 이항 계수 
\(\binom{N}{K}\)를 구하는 프로그램을 작성하시오.
첫째 줄에 N과 K가 주어진다. (1 ≤ N ≤ 10, 0 ≤ K ≤ N)

5 2 -> 10

n-m 개 중  (k - 1) 씩
*/