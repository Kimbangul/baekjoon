/*
골드바흐의 추측: 2보다 큰 짝수는 두 소수의 합으로 나타낼 수 있다.
짝수 N을 두 소수의 합으로 나타내는 표현을 골드바흐 파티션이라고 한다. 
짝수 N이 주어졌을 때, 골드바흐 파티션의 개수를 구해보자. 두 소수의 순서만 다른 것은 같은 파티션이다.
*/
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const fs = require('fs');
const input = fs
  .readFileSync(path)
  .toString()
  .split('\n')
  .map((el) => parseInt(el));

// 소수 판별 함수
const isPrime = (n) => {
  if (n < 2) return false;
  for (let i = 2; i <= parseInt(Math.sqrt(n)); i++) {
    if (n % i === 0) return false;
  }
  return true;
};

for (let idx = 1; idx < input.length; idx++) {
  let cnt = 0;
  for (let i = 2; i <= input[idx] / 2; i++) {
    // 두 소수의 순서만 다른 것은 같은 파티션이므로, input[idx]의 절반까지만 구한다.
    if (isPrime(i) && isPrime(input[idx] - i)) {
      cnt++;
    }
  }

  console.log(cnt);
}

/**
6 -> 1 + 5, 2+4, 3+3,4+2,5+1 -> 3개
8 1+7 2.6 3,5 4,4 5,3 6,2 7,1 -> 4개
10
12
100
 **/

/** 시간초과
  const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const fs = require('fs');
const input = fs
  .readFileSync(path)
  .toString()
  .split('\n')
  .map((el) => parseInt(el));

// 소수 판별 함수
const isPrime = (n) => {
  if (n < 2) return false;
  for (let i = 2; i <= parseInt(Math.sqrt(n)); i++) {
    if (n % i === 0) return false;
  }
  return true;
};

for (let idx = 1; idx < input.length; idx++) {
  let cnt = 0;
  for (let i = 2; i <= input[idx] / 2; i++) {
    // 두 소수의 순서만 다른 것은 같은 파티션이므로, input[idx]의 절반까지만 구한다.
    if (isPrime(i) && isPrime(input[idx] - i)) {
      cnt++;
    }
  }

  console.log(cnt);
}
 */
