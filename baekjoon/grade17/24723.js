const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = parseInt(fs.readFileSync(filePath).toString());

console.log(Math.pow(2,input));


/*
그림의 시야에 보이지 않는 블록은 없다.
그림의 시야에 보이는 블록의 윗면만 이용해 녹색거탑을 내려올 수 있다.
녹색거탑이 $N$층이면, 총 $N$개의 블록을 이용한 최단 경로로만 내려온다.
녹색거탑을 내려올 때는 정상에서 시작해 노란색 바닥까지, 
항상 인접한 아래층의 블록으로만 내려온다.
녹색거탑의 높이를 나타내는 정수 $N$이 주어진다. ($1 \leq N \leq 5$)
녹색거탑의 정상에서 바닥으로 내려오는 경우의 수를 출력한다.

1 -> 2
2 -> 4
*/