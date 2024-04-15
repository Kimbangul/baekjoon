/**
 * 서강대학교 컴퓨터공학과 실습실 R912호에는 현재 N개의 창문이 있고 또 N명의 사람이 있다.
 *  1번째 사람은 1의 배수 번째 창문을 열려 있으면 닫고 닫혀 있으면 연다. 
 *  2번째 사람은 2의 배수 번째 창문을 열려 있으면 닫고 닫혀 있으면 연다.
 *  이러한 행동을 N번째 사람까지 진행한 후 열려 있는 창문의 개수를 구하라. 
 * 단, 처음에 모든 창문은 닫혀 있다.

예를 들어 현재 3개의 창문이 있고 3명의 사람이 있을 때,

1번째 사람은 1의 배수인 1,2,3번 창문을 연다. (1, 1, 1)
2번째 사람은 2의 배수인 2번 창문을 닫는다. (1, 0, 1)
3번째 사람은 3의 배수인 3번 창문을 닫는다. (1, 0, 0)
결과적으로 마지막에 열려 있는 창문의 개수는 1개 이다.

마지막에 열려 있는 창문의 개수를 출력한다.
 */
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const fs = require('fs');
const input = parseInt(fs.readFileSync(path).toString().trim());

// 창문 개수만큼 배열을 만들고 1로 초기화
// let windowState = Array(input).fill(1);
let cnt = 0;

// 약수의 개수 구하기
const getDivisor = (n) => {
  const set = new Set();

  for (let i = 0; i <= parseInt(Math.sqrt(n)); i++) {
    if (n % i === 0) set.add(i);
  }
  set.forEach((el) => {
    set.add(n / el);
  });

  return set.size;
};

for (let i = 0; i < input; i++) {
  if (getDivisor(i + 1) % 2 == 0) {
    // windowState[i] = 0;
    continue;
  }
  cnt++;
}

// for (let i = 1; i < input; i++) {
//   if (getDivisor(i + 1) % 2 === 0) { // 약수의 개수가 짝수면 0(닫힘)
//     continue;
//   }
//   cnt++;
// }

console.log(cnt);

// console.log(windowState, cnt);

/** 약수의 개수가 짝수면 0, 홀수면 1 */

/** 8
 * [1,1,1,1,1,1,1,1]
 * [1,0,1,0,1,0,1,0]
 * [1,0,0,0,1,1,1,0]
 * [1,0,0,1,1,1,1,1]
 * [1,0,0,1,0,1,1,1]
 * [1,0,0,1,0,0,1,1]
 * [1,0,0,1,0,0,0,1]
 * [1,0,0,1,0,0,0,0] 2 * 3번 변경
 *
 *
 * 4:1,  2, 4번째에서 3번 변경 -> 1
 * 5: 1, 5번째에서 2번 변경 -> 0
 * 6: 1, 2, 3, 6번째에서 4번 변경 -> 0
 * 7: 1, 7번째에서 1번 변경 -> 0
 * 8: 1 2, 4, 8번째에서 4번 변경 -> 0
 *
 * 약수의 개수가 홀수면 0(1 미포함), 짝수면 1(1 미포함)
 *
 * 약수 구하기 알고리즘
 * https://kbw1101.tistory.com/32
 */
