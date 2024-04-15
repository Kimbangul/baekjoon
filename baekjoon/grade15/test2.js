const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const fs = require('fs');
const input = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((el) => parseInt(el));
input.shift();

const maxNum = Math.max(...input);
const primeArr = Array.from({ length: maxNum + 1 }, () => true); // 0이 포함되어 있음

primeArr[0] = false;
primeArr[1] = false;

let forCnt = { one: 0, two: 0 };

for (let i = 2; i < primeArr.length; i++) {
  forCnt.one++;
  for (let j = 2; j <= parseInt(Math.sqrt(i)); j++) {
    forCnt.two++;
    if (i % j === 0) {
      primeArr[i] = false;
      break;
    }
    primeArr[i] = true;
  }
}

console.log(`첫번째 for문 실행힛수: ${forCnt.one} 두번째 for문 실행횟수: ${forCnt.two}`);

/** 2부터 N의 제곱근까지의 소수를 구하고, 그 소수들의  */

for (let idx = 0; idx < input.length; idx++) {
  let cnt = 0;

  for (let i = 2; i <= input[idx] / 2; i++) {
    if (primeArr[i] && primeArr[input[idx] - i]) cnt++;
  }
  console.log(cnt);
}
