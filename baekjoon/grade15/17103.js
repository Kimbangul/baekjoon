/*
골드바흐의 추측: 2보다 큰 짝수는 두 소수의 합으로 나타낼 수 있다.
짝수 N을 두 소수의 합으로 나타내는 표현을 골드바흐 파티션이라고 한다. 
짝수 N이 주어졌을 때, 골드바흐 파티션의 개수를 구해보자. 두 소수의 순서만 다른 것은 같은 파티션이다.
*/
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const fs = require('fs');
const input = fs.readFileSync(path).toString();

console.log(input);

// 소수 판별 함수
const isPrime = (n) => {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return;
    return true;
  }
};

/**
 *
 *
 *
 */
