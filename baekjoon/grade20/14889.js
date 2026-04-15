const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
const n = parseInt(input.shift());
input = input.map((str) => str.split(' ').map((num) => parseInt(num)) );

const start = [];
const link = [];
let minScore = null;
const visited = Array(n).fill(false);

function select(remain, current) {
  if ( remain <= 0 ) {
    const linkTmp = [];

    for ( let i = 0; i < n; i++ ) {
      if ( !visited[i] ) linkTmp.push(i);
    }

    start.push([...current]);
    link.push(linkTmp);
  } else {
    for ( let i = 0; i < n; i++ ) {
      if ( visited[i] ) continue;
      visited[i] = true;
      current.push(i);

      select(remain - 1, current);

      current.pop();
      visited[i] = false;
    }
  }
}

for ( let i = 0; i < n; i++ ) {
  visited[i] = true;
  select((n / 2) - 1, [i]);
  visited[i] = false;
}

start.forEach((st, idx) => {
  let startScore = 0;
  let linkScore = 0;

  for ( let i = 0; i < st.length; i++ ) {
    for ( let j = i + 1; j < st.length; j++ ) {
      startScore += input[st[i]][st[j]];
      startScore += input[st[j]][st[i]];
      linkScore += input[link[idx][i]][link[idx][j]];
      linkScore += input[link[idx][j]][link[idx][i]];
    }
  }

  const curScore = Math.abs(startScore - linkScore);

  if ( (minScore === null) || (curScore < minScore) ) {
    minScore = curScore;
  }
});

console.log(minScore);


/* 
첫째 줄에 N(4 ≤ N ≤ 20, N은 짝수)이 주어진다. 
둘째 줄부터 N개의 줄에 S가 주어진다. 
각 줄은 N개의 수로 이루어져 있고, i번 줄의 j번째 수는 Sij 이다. 
Sii는 항상 0이고, 나머지 Sij는 1보다 크거나 같고, 100보다 작거나 같은 정수이다.
*/