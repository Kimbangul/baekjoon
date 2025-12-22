const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n').map((str) => str.replaceAll('\r',''));
input.shift();

let result = '';
const queue = [];
let head = 0;

input.forEach((str) => {
  const length = queue.length - head;
  switch ( str ) {
    case 'pop':
      if ( length <= 0 ) result += '-1\n';
      else {
        result += `${queue[head]}\n`;
        head++;
      }
      break;
    case 'size':
      result += `${length}\n`;
      break;
    case 'empty':
      if ( length <= 0 ) result += '1\n';
      else result += '0\n';
      break;
    case 'front':
      if ( length <= 0 ) result += '-1\n';
      else result += `${queue[head]}\n`;
      break;
    case 'back':
      if ( length <= 0 ) result += '-1\n';
      else result += `${queue[queue.length - 1]}\n`;
       break;
    default:
      if ( str.includes('push') ) {
        const command = str.split(' ');
        if ( isNaN(parseInt(command[1])) ) return;
        queue.push(parseInt(command[1]));
      }
  }
});

console.log(result.trim());

/*
정수를 저장하는 큐를 구현한 다음, 입력으로 주어지는 명령을 처리하는 프로그램을 작성하시오.

명령은 총 여섯 가지이다.

push X: 정수 X를 큐에 넣는 연산이다.
pop: 큐에서 가장 앞에 있는 정수를 빼고, 그 수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
size: 큐에 들어있는 정수의 개수를 출력한다.
empty: 큐가 비어있으면 1, 아니면 0을 출력한다.
front: 큐의 가장 앞에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
back: 큐의 가장 뒤에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.

*/