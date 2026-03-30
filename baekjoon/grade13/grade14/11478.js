// /dev/stdin
/*
문자열 S가 주어졌을 때, S의 서로 다른 부분 문자열의 개수를 구하는 프로그램을 작성하시오.
부분 문자열은 S에서 연속된 일부분을 말하며, 길이가 1보다 크거나 같아야 한다.
예를 들어, ababc의 부분 문자열은 a, b, a, b, c, ab, ba, ab, bc, aba, bab, abc, abab, babc, ababc가 있고, 
서로 다른것의 개수는 12개이다.
*/

const rl = require('readline').createInterface(process.stdin);
rl.on('line', (line) => {
  let set = new Set();
  console.log(line);
  for (let i = 0; i < line.length; i++) {
    for (let j = 0; j < line.length; j++) {
      set.add(line.slice(i, i + j + 1));
    }
  }

  console.log(set.size);
});
// const fs = require('fs');
// let input = fs.readFileSync('./input.txt').toString().trim().split('');
// let set = new Set();

// for (let i = 0; i < input.length; i++) {
//   for (let j = 0; j < input.length; j++) {
//     set.add(input.slice(i, i + j + 1).join(''));
//   }
// }

// console.log(set.size);
