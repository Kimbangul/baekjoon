const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
const n = parseInt(input.shift());
input = input.map((str) => str.split(' ').map((num) => parseInt(num)) );


let minScore = null;
const visited = Array(n).fill(false);

function select(remain, current, startIdx) {
  if ( remain <= 0 ) {
    const linkTmp = [];

    for ( let i = 0; i < n; i++ ) {
      if ( !visited[i] ) linkTmp.push(i);
    }

    let startScore = 0;
    let linkScore = 0;

    
    for ( let i = 0; i < current.length; i++ ) {
      for ( let j = i + 1; j < current.length; j++ ) {
        startScore += input[current[i]][current[j]];
        startScore += input[current[j]][current[i]];
        linkScore += input[linkTmp[i]][linkTmp[j]];
        linkScore += input[linkTmp[j]][linkTmp[i]];
      }
    }

    const curScore = Math.abs(startScore - linkScore);

    if ( (minScore === null) || (curScore < minScore) ) {
      minScore = curScore;
    }

    return;

  } else {
    for ( let i = startIdx; i < n; i++ ) {
      if ( visited[i] ) continue;
      visited[i] = true;
      current.push(i);

      select(remain - 1, current, i + 1);

      current.pop();
      visited[i] = false;
    }
  }
}

for ( let i = 0; i < n; i++ ) {
  visited[i] = true;
  select((n / 2) - 1, [i], i + 1);
  visited[i] = false;
}

console.log(minScore);


/* 
첫째 줄에 N(4 ≤ N ≤ 20, N은 짝수)이 주어진다. 
둘째 줄부터 N개의 줄에 S가 주어진다. 
각 줄은 N개의 수로 이루어져 있고, i번 줄의 j번째 수는 Sij 이다. 
Sii는 항상 0이고, 나머지 Sij는 1보다 크거나 같고, 100보다 작거나 같은 정수이다.
*/