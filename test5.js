/* 
프로그래머스 팀에서는 기능 개선 작업을 수행 중입니다. 각 기능은 진도가 100%일 때 서비스에 반영할 수 있습니다.

또, 각 기능의 개발속도는 모두 다르기 때문에 뒤에 있는 기능이 앞에 있는 기능보다 먼저 개발될 수 있고, 
이때 뒤에 있는 기능은 앞에 있는 기능이 배포될 때 함께 배포됩니다.

먼저 배포되어야 하는 순서대로 작업의 진도가 적힌 정수 배열 progresses와 
각 작업의 개발 속도가 적힌 정수 배열 speeds가 주어질 때 
각 배포마다 몇 개의 기능이 배포되는지를 return 하도록 solution 함수를 완성하세요.

제한 사항
작업의 개수(progresses, speeds배열의 길이)는 100개 이하입니다.
작업 진도는 100 미만의 자연수입니다.
작업 속도는 100 이하의 자연수입니다.
배포는 하루에 한 번만 할 수 있으며, 하루의 끝에 이루어진다고 가정합니다. 
예를 들어 진도율이 95%인 작업의 개발 속도가 하루에 4%라면 배포는 2일 뒤에 이루어집니다.

[93, 30, 55]	[1, 30, 5]	-> [2, 1]
[95, 90, 99, 99, 80, 99]	[1, 1, 1, 1, 1, 1]	-> [1, 3, 2]

모든 기능이 하루에 1%씩 작업이 가능하므로, 
작업이 끝나기까지 남은 일수는 각각 5일, 10일, 1일, 1일, 20일, 1일입니다. 
어떤 기능이 먼저 완성되었더라도 앞에 있는 모든 기능이 완성되지 않으면 배포가 불가능합니다.

따라서 5일째에 1개의 기능, 10일째에 3개의 기능, 20일째에 2개의 기능이 배포됩니다.
*/


class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  push(item) {
    this.queue.push(item);
    this.rear++;
  }

  pop() {
    return this.queue[this.front++];
  }

  clear() {
    const size = this.size();
    for ( let i = 0; i < size; i++ ) {
      this.pop();
    }
  }

  size() {
    return this.rear - this.front;
  }

  getFront() {
    return this.queue[this.front];
  }
}

function solution(progresses, speeds) {
  console.log(`progresses: ${progresses} speeds: ${speeds}`);
  const answer = [];
  const queue = new Queue();

  const remainDays = progresses.map((progress, idx) => Math.ceil(( 100 - progress ) / speeds[idx]));
  console.log(`remainDays: ${remainDays}`);

  for ( let i = 0; i < remainDays.length; i++ ) {
    if ( queue.getFront() && queue.getFront() < remainDays[i] ) {
      answer.push(queue.size());
      queue.clear();
    } 
    queue.push(remainDays[i]);
  }

  if ( queue.size() > 0 ) {
    answer.push(queue.size());
  }

  return answer;
}

// console.log(solution([93, 30, 55], [1, 30, 5])); // [2, 1]
// console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1])); // [1, 3, 2]

// console.log(solution([90, 91, 92], [10, 9, 8])); // [3]
// console.log(solution([99, 99, 99], [1, 1, 1])); // [3]
// console.log(solution([93, 30, 55], [1, 30, 5])); // [2, 1]

// console.log(solution([10, 20, 30], [1, 1, 1])); // [3]
// console.log(solution([0, 0, 0], [1, 1, 1])); // [3]

// console.log(solution([80, 20, 99], [5, 40, 1])); // [2, 1]
// console.log(solution([90, 10, 10], [1, 30, 30])); // [1, 2]

// console.log(solution([20, 99, 99], [1, 1, 1])); // [1, 2]
// console.log(solution([50, 90, 90], [5, 1, 1])); // [3]

// console.log(solution([95, 94, 93], [1, 1, 1])); // [1, 1, 1]
// console.log(solution([95, 94, 93, 92], [1, 1, 1, 1])); // [1, 1, 1, 1]

// console.log(solution([10,20,30,40,50,60,70,80,90,99], [1,1,1,1,1,1,1,1,1,1])); // [10]


/* 
코니는 영어 단어가 적힌 카드 뭉치 두 개를 선물로 받았습니다. 
코니는 다음과 같은 규칙으로 카드에 적힌 단어들을 사용해 원하는 순서의 단어 배열을 만들 수 있는지 알고 싶습니다.

원하는 카드 뭉치에서 카드를 순서대로 한 장씩 사용합니다.
한 번 사용한 카드는 다시 사용할 수 없습니다.
카드를 사용하지 않고 다음 카드로 넘어갈 수 없습니다.
기존에 주어진 카드 뭉치의 단어 순서는 바꿀 수 없습니다.
예를 들어 첫 번째 카드 뭉치에 순서대로 ["i", "drink", "water"], 
두 번째 카드 뭉치에 순서대로 ["want", "to"]가 적혀있을 때 
["i", "want", "to", "drink", "water"] 순서의 단어 배열을 만들려고 한다면 
첫 번째 카드 뭉치에서 "i"를 사용한 후 두 번째 카드 뭉치에서 "want"와 "to"를 사용하고 
첫 번째 카드뭉치에 "drink"와 "water"를 차례대로 사용하면 원하는 순서의 단어 배열을 만들 수 있습니다.

문자열로 이루어진 배열 cards1, cards2와 원하는 단어 배열 goal이 매개변수로 주어질 때, 
cards1과 cards2에 적힌 단어들로 goal를 만들 있다면 "Yes"를, 
만들 수 없다면 "No"를 return하는 solution 함수를 완성해주세요.

1 ≤ cards1의 길이, cards2의 길이 ≤ 10
1 ≤ cards1[i]의 길이, cards2[i]의 길이 ≤ 10
cards1과 cards2에는 서로 다른 단어만 존재합니다.
2 ≤ goal의 길이 ≤ cards1의 길이 + cards2의 길이
1 ≤ goal[i]의 길이 ≤ 10
goal의 원소는 cards1과 cards2의 원소들로만 이루어져 있습니다.
cards1, cards2, goal의 문자열들은 모두 알파벳 소문자로만 이루어져 있습니다.

*/

class Queue2 {
  constructor(arr) {
    this.front = 0;
    this.rear = arr.length;
    this.queue = arr;
  }

  pop() {
    return this.queue[this.front++];
  }
  
  getFront() {
    return this.queue[this.front];
  }
}

function solution2(cards1, cards2, goal) {
    let answer = 'Yes';
    const firstCards = new Queue2(cards1);
    const secondCards = new Queue2(cards2);

    for ( let i = 0; i < goal.length; i++ ) {
      // console.log(`goal[i]: ${goal[i]} firstCards.getFront(): ${firstCards.getFront()} secondCards.getFront(): ${secondCards.getFront()}`);
      if ( goal[i] === firstCards.getFront() ) firstCards.pop();
      else if ( goal[i] === secondCards.getFront() ) secondCards.pop();
      else {
        answer = "No";
        return answer;
      }
    }

    return answer;
}


console.log(solution2(["i", "drink", "water"],	["want", "to"],	["i", "want", "to", "drink", "water"])); //	"Yes"
console.log(solution2(["i", "water", "drink"],	["want", "to"],	["i", "want", "to", "drink", "water"])); //	"No"