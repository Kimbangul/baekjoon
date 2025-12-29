const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n').map((str) => str.trim().split(' '));
input.shift();
const deque = {};
let result = '';

let front = 0;
let rear = 0;

function isDequeEmpty() {
  if ( front === rear ) return true;
  else return false;
}

input.forEach((num) => {
  switch (num[0]) {
    case '1':
      deque[--front] = num[1];
      break;
    case '2':
      deque[rear++] = num[1];
      break;
    case '3':
      if ( !isDequeEmpty() ) {
        result += `${deque[front]}\n`;
        delete deque[front];
        front++;
      } else {
        result += `-1\n`;
      }
      break;
    case '4':  
      if ( !isDequeEmpty() ) {
        result += `${deque[rear - 1]}\n`;
        delete deque[--rear];
      } else {
        result += `-1\n`;
      }
      break;
    case '5':
      result += `${rear - front}\n`;
      break;
    case '6':
      if ( isDequeEmpty() ) result += '1\n';
      else result += '0\n';
      break;
    case '7':
      if ( !isDequeEmpty() ) result += `${deque[front]}\n`;
      else result += '-1\n';
      break;
    case '8':
      if ( !isDequeEmpty() ) result += `${deque[rear - 1]}\n`;
      else result += '-1\n';
      break;
  }
});

console.log(result.trim());
/* 
정수를 저장하는 덱을 구현한 다음, 입력으로 주어지는 명령을 처리하는 프로그램을 작성하시오.

명령은 총 여덟 가지이다.

1 X: 정수 X를 덱의 앞에 넣는다. (1 ≤ X ≤ 100,000)
2 X: 정수 X를 덱의 뒤에 넣는다. (1 ≤ X ≤ 100,000)
3: 덱에 정수가 있다면 맨 앞의 정수를 빼고 출력한다. 없다면 -1을 대신 출력한다.
4: 덱에 정수가 있다면 맨 뒤의 정수를 빼고 출력한다. 없다면 -1을 대신 출력한다.
5: 덱에 들어있는 정수의 개수를 출력한다.
6: 덱이 비어있으면 1, 아니면 0을 출력한다.
7: 덱에 정수가 있다면 맨 앞의 정수를 출력한다. 없다면 -1을 대신 출력한다.
8: 덱에 정수가 있다면 맨 뒤의 정수를 출력한다. 없다면 -1을 대신 출력한다.

첫째 줄에 명령의 수 N이 주어진다. (1 ≤ N ≤ 1,000,000)

둘째 줄부터 N개 줄에 명령이 하나씩 주어진다.

출력을 요구하는 명령은 하나 이상 주어진다. 
*/