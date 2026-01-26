const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ').map(num => parseInt(num));

const maxNum = input[0];
const pickCount = input[1];
let result = '';

const search = (arr) => {
  console.log(`arr.length: ${arr.length}`);
  console.log(`pickCount: ${pickCount}`);
  // if ( maxNum - arr[arr.length - 1] < pickCount ) return;// 구하지 않음
  if ( arr.length >= pickCount ) {
    result += `${arr.join(' ')}\n`;
    return;
  };
  const lastPick = arr[arr.length - 1] || 0;

  console.log(`lastPick: ${lastPick}`);
  for ( let i = lastPick + 1; i <= maxNum; i++ ) {
    console.log(`i: ${i}`);
    search([...arr, i]);
  }
};

for ( let i = 1; i <= maxNum; i++ ) {
  // console.log(`i: ${i}`);
  search([i]);
}

console.log(result.trim());

/* 
1) (maxNum - 선택한 수) 가 골라야 할 갯수보다 작으면 탐색하지 않음
2) 이전 depth에서 뽑은 수보다 현재 뽑는 수가 더 커야 함.
3) depth가 3이면 종료
*/


// for ( let num = 1; num <= maxNum; num++ ) {
//   const arr = new Array(input[1]).fill(num).map((el, idx) => el + idx);
//   let pointerIdx = arr.length - 1;

//   while ( pointerIdx >= 0 ) {

//     while ( counter <= maxNum ) {
//       console.log(arr);
//       counter++;
//     }

//     if ( arr[pointerIdx] < maxNum ) {
//       arr[pointerIdx]++;

//       for ( let idx = pointerIdx; idx < arr.length - 1; idx++ ) {
//         arr[idx]
//       }
//     } else {
//       pointerIdx--;
//       for ( let idx = pointerIdx + 1; idx <= arr.length - 1; idx++ ) {
//         arr[idx]
//       }
//     }
    
//   }

//   if ( [pointerIdx] )
// }


// for ( let num = 1; num <= maxNum; num++ ) {
//   let remain = input[1];
//   const arr = new Array(input[1]).fill(1).map((el, idx) => el + idx);
//   console.log(`${arr}`);
//   const startPointer = 

//   /* 
//   // 
//   1) input[0] 을 넘지 않을 때까지 반복
//   2) 끝의 숫자는 n+1부터, input[0] 을 넘지 않을 때까지 반복
//   */
  
// }

/* 
자연수 N과 M이 주어졌을 때, 아래 조건을 만족하는 길이가 M인 수열을 모두 구하는 프로그램을 작성하시오.
- 1부터 N까지 자연수 중에서 중복 없이 M개를 고른 수열

첫째 줄에 자연수 N과 M이 주어진다. (1 ≤ M ≤ N ≤ 8)
1초,512 MB
한 줄에 하나씩 문제의 조건을 만족하는 수열을 출력한다. 
중복되는 수열을 여러 번 출력하면 안되며, 각 수열은 공백으로 구분해서 출력해야 한다.
수열은 사전 순으로 증가하는 순서로 출력해야 한다.

1
2
3

1 2
1 3
1 4
2 1
2 3
2 4
3 1
3 2
3 4
4 1
4 2
4 3
*/