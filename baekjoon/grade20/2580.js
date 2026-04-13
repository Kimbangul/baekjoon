const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map((str) => str.trim().split(' ').map((num) => parseInt(num)));

// console.log(input);
const zero = [];

input.forEach((row, rowIdx) => {
  // 빈칸 저장
  row.forEach((col, colIdx) => {
    if ( col === 0 ) zero.push([rowIdx, colIdx]); 
  });
});

function isVaild (row, col, num) {
  // 행
  for ( let i = 0; i < 9; i++ ) {
    if ( input[row][i] === num ) return false;
  }

  // 열
  for ( let j = 0; j < 9; j++ ) {
    if ( input[j][col] === num ) return false;
  }

  // 3x3 박스
  const startRow = Math.floor(row / 3) * 3;
  const startCol = Math.floor(col / 3) * 3;

  for ( let i = startRow; i < startRow + 3; i++ ) {
    for ( let j = startCol; j < startCol + 3; j++ ) {
      if ( input[i][j] === num ) return false;
    }
  }

  return true;

}

function setNum (zeroIdx) {
  if ( zeroIdx === zero.length ) {
    const result = input.map((row) => row.join(' ').trim()).join('\n').trim();
    console.log(result);
    process.exit(0);
    return;
  }

  const pos = zero[zeroIdx];

  for ( let num = 1; num <= 9; num++ ) {
    if ( isVaild(pos[0], pos[1], num) ) {
      input[pos[0]][pos[1]] = num;
      setNum(zeroIdx + 1);
      input[pos[0]][pos[1]] = 0;
    }
  }
}

setNum(0);

// console.log(input);

// zero.forEach((pos) => {
//   for ( let num = 1; num <= 9; num++ ) {
//     if ( isVaild(pos[0], pos[1], num) ) {
//       input[pos[0]][pos[1]] = num;

//       input[pos[0]][pos[1]] = 0;
//     }
//   }
// });

/* 
게임 시작 전 스도쿠 판에 쓰여 있는 숫자들의 정보가 주어질 때 모든 빈 칸이 채워진 최종 모습을 출력하는 프로그램을 작성하시오.

아홉 줄에 걸쳐 한 줄에 9개씩 게임 시작 전 스도쿠판 각 줄에 쓰여 있는 숫자가 한 칸씩 띄워서 차례로 주어진다. 
스도쿠 판의 빈 칸의 경우에는 0이 주어진다. 스도쿠 판을 규칙대로 채울 수 없는 경우의 입력은 주어지지 않는다.
모든 빈 칸이 채워진 스도쿠 판의 최종 모습을 아홉 줄에 걸쳐 한 줄에 9개씩 한 칸씩 띄워서 출력한다.

스도쿠 판을 채우는 방법이 여럿인 경우는 그 중 하나만을 출력한다.

0 3 5 4 6 9 2 7 8
7 8 2 1 0 5 6 0 9
0 6 0 2 7 8 1 3 5
3 2 1 0 4 6 8 9 7
8 0 4 9 1 3 5 0 6
5 9 6 8 2 0 4 1 3
9 1 7 6 5 2 0 8 0
6 0 3 7 0 1 9 5 2
2 5 8 3 9 4 7 6 0
*/


// for (let row = 0; row < input.length; row++) {
//   input[row] = setNumber(input[row]);
// }

// // const col = input.map((row, rowIdx) => row.map((col) => ));
// for (let colIdx = 0; colIdx < 9; colIdx++) {
//   const newArr = new Array(9);
//   for (let rowIdx = 0; rowIdx < 9; rowIdx++ ) {
//     newArr[rowIdx] = input[rowIdx][colIdx]; 
//   }

//   newArr[rowIdx] = setNumber(newArr);
//   console.log(`newArr`);
//   console.log(newArr);
// }

// console.log(input);
/* 1) row, col, 3x3 중 1개만 없는 경우를 찾는다 */

/* 
아홉 줄에 걸쳐 한 줄에 9개씩 게임 시작 전 스도쿠판 각 줄에 쓰여 있는 숫자가 한 칸씩 띄워서 차례로 주어진다. 
스도쿠 판의 빈 칸의 경우에는 0이 주어진다. 스도쿠 판을 규칙대로 채울 수 없는 경우의 입력은 주어지지 않는다.
모든 빈 칸이 채워진 스도쿠 판의 최종 모습을 아홉 줄에 걸쳐 한 줄에 9개씩 한 칸씩 띄워서 출력한다.
스도쿠 판을 채우는 방법이 여럿인 경우는 그 중 하나만을 출력한다.

1 초	256 MB

1 3 5 4 6 9 2 7 8
7 8 2 1 3 5 6 4 9
4 6 9 2 7 8 1 3 5
3 2 1 5 4 6 8 9 7
8 7 4 9 1 3 5 2 6
5 9 6 8 2 7 4 1 3
9 1 7 6 5 2 3 8 4
6 4 3 7 8 1 9 5 2
2 5 8 3 9 4 7 6 1
*/