/*
베르트랑 공준은 임의의 자연수 n에 대하여, n보다 크고, 2n보다 작거나 같은 소수는 적어도 하나 존재한다는 내용을 담고 있다.
이 명제는 조제프 베르트랑이 1845년에 추측했고, 파프누티 체비쇼프가 1850년에 증명했다.
예를 들어, 10보다 크고, 20보다 작거나 같은 소수는 4개가 있다. (11, 13, 17, 19) 또, 14보다 크고, 28보다 작거나 같은 소수는 3개가 있다. (17,19, 23)
자연수 n이 주어졌을 때, n보다 크고, 2n보다 작거나 같은 소수의 개수를 구하는 프로그램을 작성하시오. 
*/

const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const fs = require('fs');

let input = fs
  .readFileSync(path)
  .toString()
  .split('\n')
  .map((el) => parseInt(el)); // input = [1, 10, 13, 100, 1000, 10000, 100000, 0]

// 소수를 판별하는 함수
const isPrime = (n) => {
  if (n < 2) return false; // 0과 1은 소수가 아니므로 제외

  for (let i = 2; i <= parseInt(Math.sqrt(n)); i++) {
    // 2부터 n의 제곱근(루트)까지 반복
    if (n % i === 0) return false;
  }
  return true;
};

input.forEach((el) => {
  if (el === 0) return; // 0일 경우, 입력 종료
  let primeCnt = 0;

  for (let i = el + 1; i <= 2 * el; i++) {
    if (isPrime(i)) primeCnt++;
  }

  console.log(primeCnt);
});

for (let i = 0; i < input.length - 1; i++) {
  let primeCnt = 0;

  for (let j = input[i] + 1; j <= input[i] * 2; j++) {
    if (isPrime(j)) primeCnt++;
  }
  console.log(primeCnt);
}
