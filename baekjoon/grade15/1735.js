const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const fs = require('fs');
// 각 분수의 분자와 분모를 뜻하는 두 개의 자연수
// 두 분수가 주어졌을 때, 그 합을 기약분수의 형태로 구하는 프로그램을 작성하시오. 기약분수란 더 이상 약분되지 않는 분수를 의미한다.
let input = fs.readFileSync(path).toString().split('\n');

const gcd = (a, b) => {
  let tmp;
  while (b !== 0) {
    console.log(`gcd(${a}, ${b})`);
    tmp = a % b;
    a = b;
    b = tmp;
  }
  return a;
};

// for (let i = 0; i < input.length; i++) {
//   let a = Number(input[i].split(' ')[0]);
//   let b = Number(input[i].split(' ')[1]);
//   const num = gcd(a, b);
//   console.log(num);
// }
