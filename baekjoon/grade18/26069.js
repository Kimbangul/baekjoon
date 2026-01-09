const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map((str) => str.trim().split(' '));
input.shift();

const dancing = new Set();
dancing.add('ChongChong');

input.forEach((meet) => {
  if ( dancing.has(meet[0]) || dancing.has(meet[1]) ) {
    dancing.add(meet[0]).add(meet[1]);
  }
});

console.log(dancing.size);

/* 
10
사람들이 만난 기록이 시간 순서대로 N개 주어진다. 
(총총이는 토끼이지만 이 문제에서는 편의상 사람이라고 가정한다.)

무지개 댄스를 추지 않고 있던 사람이 
무지개 댄스를 추고 있던 사람을 만나게 된다면, 
만난 시점 이후로 무지개 댄스를 추게 된다.

기록이 시작되기 이전 무지개 댄스를 추고 있는 사람은 총총이 뿐이라고 할 때,
마지막 기록 이후 무지개 댄스를 추는 사람이 몇 명인지 구해보자!

두번째 줄부터 N개의 줄에 걸쳐 사람들이 만난 기록이 주어진다. 
i + 1번째 줄에는 i번째로 만난 사람들의 이름 A[i]와 B[i]가 공백을 사이에 두고 주어진다. 
A[i]와 B[i]는 숫자와 영문 대소문자로 이루어진 최대 길이 20의 문자열이며, 서로 같지 않다.
총총이의 이름은 ChongChong으로 주어지며, 기록에서 1회 이상 주어진다.

동명이인은 없으며, 사람의 이름은 대소문자를 구분한다. 
(ChongChong과 chongchong은 다른 이름이다.)
마지막 기록 이후 무지개 댄스를 추는 사람의 수를 출력하라.
*/