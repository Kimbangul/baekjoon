/** 
정수를 저장하는 스택을 구현한 다음, 입력으로 주어지는 명령을 처리하는 프로그램을 작성하시오.

명령은 총 다섯 가지이다.

1 X: 정수 X를 스택에 넣는다. (1 ≤ X ≤ 100,000)
2: 스택에 정수가 있다면 맨 위의 정수를 빼고 출력한다. 없다면 -1을 대신 출력한다.
3: 스택에 들어있는 정수의 개수를 출력한다.
4: 스택이 비어있으면 1, 아니면 0을 출력한다.
5: 스택에 정수가 있다면 맨 위의 정수를 출력한다. 없다면 -1을 대신 출력한다.

첫째 줄에 명령의 수 N이 주어진다. (1 ≤ N ≤ 1,000,000)
둘째 줄부터 N개 줄에 명령이 하나씩 주어진다.
출력을 요구하는 명령은 하나 이상 주어진다.
 * 
 */

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const stack = [];
let result = '';

const command = (string) => {
  const trimedStr = string.replaceAll(' ', '');
  const firstChar = trimedStr[0];

  switch (firstChar) {
    case '1':
      const targetNum = parseInt(trimedStr.slice(1));
      stack.push(targetNum);
      break;
    case '2':
      if (stack.length > 0) result += `${stack.pop()}\n`;
      else result += `${-1}\n`;
      break;
    case '3':
      result += `${stack.length}\n`;
      break;
    case '4':
      if (stack.length > 0) result += `0\n`;
      else  result += `1\n`;
      break;
    case '5':
      if (stack.length > 0) result += `${stack[stack.length - 1]}\n`;
      else result += `-1\n`;
      break;
  }
};

input.shift();

for (let i = 0; i < input.length; i++) {
  command(input[i]);
}

console.log(result.trim());