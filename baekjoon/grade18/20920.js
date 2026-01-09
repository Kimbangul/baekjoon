const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map((str) => str.trim());

const minLength = parseInt(input[0].split(' ')[1]);
input.shift();
input = input.filter((word) => word.length >= minLength).sort();

let frequency = new Map();
let count = 0;
let prevVal = input[0];

input.forEach((word) => {
  if ( word === prevVal ) {
    count++;
  } else {
    count = 1;
  }
  prevVal = word;
  frequency.set(word, count);
});

input.sort((a, b) => {
  const condition1 = frequency.get(b) - frequency.get(a);
  const condition2 = b.length - a.length;
  if ( condition1 !== 0 ) {
    return condition1;
  } else if ( condition2 !== 0 ) {
    return condition2;
  }
  return 0;
});

input = new Set(input);
input = [...input].join('\n').trim();

console.log(input);
/* 
화은이는 이번 영어 시험에서 틀린 문제를 바탕으로 영어 단어 암기를 하려고 한다. 
그 과정에서 효율적으로 영어 단어를 외우기 위해 영어 단어장을 만들려 하고 있다. 
화은이가 만들고자 하는 단어장의 단어 순서는 다음과 같은 우선순위를 차례로 적용하여 만들어진다.

자주 나오는 단어일수록 앞에 배치한다.
해당 단어의 길이가 길수록 앞에 배치한다.
알파벳 사전 순으로 앞에 있는 단어일수록 앞에 배치한다
 
M보다 짧은 길이의 단어의 경우 읽는 것만으로도 외울 수 있기 때문에 
길이가 M 이상인 단어들만 외운다고 한다. 
화은이가 괴로운 영단어 암기를 효율적으로 할 수 있도록 단어장을 만들어 주자.

첫째 줄에는 영어 지문에 나오는 단어의 개수 N과 외울 단어의 길이 기준이 되는 M이 공백으로 구분되어 주어진다. 
(1 <= N <= 100000), (1 <= M <= 10)

둘째 줄부터 N+1번째 줄까지 외울 단어를 입력받는다. 
이때의 입력은 알파벳 소문자로만 주어지며 단어의 길이는 10을 넘지 않는다.

단어장에 단어가 반드시 1개 이상 존재하는 입력만 주어진다.
*/