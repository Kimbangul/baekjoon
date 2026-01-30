const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = parseInt(fs.readFileSync(filePath).toString());

let result = 0;

const usedCol = new Array(input).fill(false);
const usedDiag = new Array(input).fill(false);
const usedDiag2 = new Array(input).fill(false);

const search = (row) => {

  if ( row >= input ) {
    result++;
    return;
  }
  
  for ( let nextCol = 0; nextCol < input; nextCol++ ) {
    if ( usedCol[nextCol] === true ) continue;
    if ( usedDiag[row + 1 + nextCol] === true ) continue;
    if ( usedDiag2[row + 1 - nextCol + input] === true ) continue;
    
    usedCol[nextCol] = true;
    usedDiag[row + 1 + nextCol] = true;
    usedDiag2[row + 1 - nextCol + input] = true;
    
    search(row + 1, nextCol);

    usedCol[nextCol] = false;
    usedDiag[row + 1 + nextCol] = false;
    usedDiag2[row + 1 - nextCol + input] = false;
  }
}

search(0);

console.log(result);


/* 
N-Queen 문제는 크기가 N × N인 체스판 위에 퀸 N개를 서로 공격할 수 없게 놓는 문제이다.
N이 주어졌을 때, 퀸을 놓는 방법의 수를 구하는 프로그램을 작성하시오.
첫째 줄에 N이 주어진다. (1 ≤ N < 15)
첫째 줄에 퀸 N개를 서로 공격할 수 없게 놓는 경우의 수를 출력한다.
10 초	128 MB
8
92
*/