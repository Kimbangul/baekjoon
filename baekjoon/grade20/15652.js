const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ').map(num => parseInt(num));

const maxNum = input[0];
const pickCount = input[1];
let result = '';

const search = (arr, remainCnt) => {
  const lastPick = arr[arr.length - 1] || 1;
  if ( remainCnt <= 0 ) {
    if ( arr.length === pickCount ) result += `${arr.join(' ')}\n`;
    return;
  }

  for ( let i = lastPick; i <= maxNum; i++ ) {
    search([...arr, i], remainCnt - 1);
  }
}

for ( let i = 1; i <= maxNum; i++ ) {
  search([i], pickCount - 1);
}

console.log(result.trim());

/*
자연수 N과 M이 주어졌을 때, 아래 조건을 만족하는 길이가 M인 수열을 모두 구하는 프로그램을 작성하시오.

1부터 N까지 자연수 중에서 M개를 고른 수열
같은 수를 여러 번 골라도 된다.
고른 수열은 비내림차순이어야 한다.
길이가 K인 수열 A가 A1 ≤ A2 ≤ ... ≤ AK-1 ≤ AK를 만족하면, 비내림차순이라고 한다.

첫째 줄에 자연수 N과 M이 주어진다. (1 ≤ M ≤ N ≤ 8)
한 줄에 하나씩 문제의 조건을 만족하는 수열을 출력한다. 
중복되는 수열을 여러 번 출력하면 안되며, 각 수열은 공백으로 구분해서 출력해야 한다.
수열은 사전 순으로 증가하는 순서로 출력해야 한다.

3 3

1 1 1
1 1 2
1 1 3
1 2 2
1 2 3
1 3 3
2 2 2
2 2 3
2 3 3
3 3 3
*/