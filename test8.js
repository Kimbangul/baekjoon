/*
이진 트리를 표현한 배열 nodes를 인자로 받습니다.
예를 들어서 nodes가 [1,2,3,4,5,6,7] 이면 다음과 같은 트리를 표현한 것입니다.
해당 이진 트리에 대하여 전위 순회, 중위 순회, 후위 순회 결과를 반환하는 solution() 함수를 구현하세요.

[1,2,3,4,5,6,7] -> ["1 2 4 5 3 6 7", "4 2 5 1 6 3 7", "4 5 2 6 7 3 1"]
*/

// 전위 순회 (부모 -> 왼쪽 -> 오른쪽)
function preOrder(nodes, idx) {
  if ( idx < nodes.length ) {
    let ret = `${nodes[idx]} `; // 루트 노드
    ret += preOrder(nodes, idx * 2 + 1); // 왼쪽 노드
    ret += preOrder(nodes, idx * 2 + 2); // 우측 노드
    return ret;
  }

  // idx >= nodes.length일 때는 빈 문자열 반환
  return "";
}

// 중위 순회 (왼쪽 -> 부모 -> 오른쪽)
function inOrder(nodes, idx) {
  if ( idx < nodes.length ) {
    let ret = inOrder(nodes, idx * 2 + 1);
    ret += `${nodes[idx]} `;
    ret += inOrder(nodes, idx * 2 + 2);
    return ret;
  }

  return "";
}

// 후위 순회 (왼쪽 -> 오른쪽 -> 부모)
function postOrder(nodes, idx) {
  if ( idx < nodes.length ) {
    let ret = postOrder(nodes, idx * 2 + 1);
    ret += postOrder(nodes, idx * 2 + 2);
    ret += `${nodes[idx]} `;
    return ret;
  }

  return "";
}

function solution(nodes) {
    return [
      preOrder(nodes, 0).slice(0, -1),
      inOrder(nodes, 0).slice(0, -1),
      postOrder(nodes, 0).slice(0, -1)
    ]
}

// console.log(solution([1,2,3,4,5,6,7]));

/* 첫 번째 인수 lst를 이용하여 이진 탐색 트리를 생성하고, 
두 번째 인수 searchList에 있는 각 노드를 이진 탐색 트리에서 찾을 수 있는지 확인하여 
true 또는 false를 담은 배열 result를 반환하는 함수 solution()을 작성하세요. 
[5, 3, 8, 4, 2, 1, 7, 10] / [1, 2, 5, 6] -> [true, true, true, false]
[1, 3, 5, 7, 9] / [2, 4, 6, 8, 10] -> [false, false, false, false, false]
*/

// 노드 클래스 정의
// class Node {
//   constructor(key) {
//     this.left = null;
//     this.right = null;
//     this.val = key;
//   }
// }

// 이진 탐색 트리 클래스
class BST {
  constructor() {
    this.root = null;
  }

  // 루트 노드부터 시작해서 이진 탐색 트리 규칙에 맞는 위치에 새 노드 삽입
  insert(key) {
    if ( !this.root ) {
      this.root = new Node(key);
    } else {
      let curr = this.root;

      while (true) {
        // 삽입하려는 값이 현재 노드의 값보다 작은 경우 왼쪽 자식 노드로 이동
        if (key < curr.val) {
          if (curr.left) {
            curr = curr.left;
          } else {
            curr.left = new Node(key);
            break;
          } 
        } else {
          if (curr.right) {
            // 삽입하려는 값이 현재 노드의 값보다 큰 경우 오른쪽 자식 노드로 이동
            curr = curr.right;
          } else {
            curr.right = new Node(key);
            break;
          }
        }
      }

    }
  }

  // 이진 탐색 규칙에 따라 특정 값이 있는지 확인(루트 노드부터 시작)
  search(key) {
    let curr = this.root;

    // 현재 노드가 존재하고, 찾으려는 값과 현재 노드의 값이 같지 않은 경우 반복
    while (curr && curr.val !== key) {
      // 찾으려는 값이 현재 노드의 값보다 작은 경우 왼쪽 노드로 이동
      if (key < curr.val) {
        curr = curr.left;
      } else {
        curr = curr.right;
      }
    }

    return curr;
  }
}

// list에 있는 데이터를 활용해서 이진 탐색 트리 생성, searchList 원소 탐색
function solution2(list, searchList) {
  const bst = new BST();

  for (const key of list) {
    bst.insert(key);
  }

  const result = [];

  for (const searchVal of searchList) {
    if (bst.search(searchVal)) {
      result.push(true);
    } else {
      result.push(false);
    }
  }

  return result;
}

// solution2([5, 3, 8, 4, 2, 1, 7, 10], [1, 2, 5, 6]);

// console.log(solution2([5, 3, 8, 4, 2, 1, 7, 10], [1, 2, 5, 6]));
// console.log(solution2([1, 3, 5, 7, 9], [2, 4, 6, 8, 10]));


/* 
△△ 게임대회가 개최되었습니다. 이 대회는 N명이 참가하고, 토너먼트 형식으로 진행됩니다. 
N명의 참가자는 각각 1부터 N번을 차례대로 배정받습니다. 그리고, 1번↔2번, 3번↔4번, ... , 
N-1번↔N번의 참가자끼리 게임을 진행합니다. 각 게임에서 이긴 사람은 다음 라운드에 진출할 수 있습니다. 
이때, 다음 라운드에 진출할 참가자의 번호는 다시 1번부터 N/2번을 차례대로 배정받습니다. 
만약 1번↔2번 끼리 겨루는 게임에서 2번이 승리했다면 다음 라운드에서 1번을 부여받고, 
3번↔4번에서 겨루는 게임에서 3번이 승리했다면 다음 라운드에서 2번을 부여받게 됩니다. 
게임은 최종 한 명이 남을 때까지 진행됩니다.

이때, 처음 라운드에서 A번을 가진 참가자는 경쟁자로 생각하는 B번 참가자와 몇 번째 라운드에서 만나는지 궁금해졌습니다. 게임 참가자 수 N, 참가자 번호 A, 경쟁자 번호 B가 함수 solution의 매개변수로 주어질 때, 처음 라운드에서 A번을 가진 참가자는 경쟁자로 생각하는 B번 참가자와 몇 번째 라운드에서 만나는지 return 하는 solution 함수를 완성해 주세요. 단, A번 참가자와 B번 참가자는 서로 붙게 되기 전까지 항상 이긴다고 가정합니다.

제한사항
N : 2^1 이상 2^20 이하인 자연수 (2의 지수 승으로 주어지므로 부전승은 발생하지 않습니다.)
A, B : N 이하인 자연수 (단, A ≠ B 입니다.)

N	A	B	answer
8	4	7	3

출력 예 #1
첫 번째 라운드에서 4번 참가자는 3번 참가자와 붙게 되고, 7번 참가자는 8번 참가자와 붙게 됩니다. 
항상 이긴다고 가정했으므로 4번 참가자는 다음 라운드에서 2번이 되고, 7번 참가자는 4번이 됩니다. 
두 번째 라운드에서 2번은 1번과 붙게 되고, 4번은 3번과 붙게 됩니다. 항상 이긴다고 가정했으므로
2번은 다음 라운드에서 1번이 되고, 4번은 2번이 됩니다. 
세 번째 라운드에서 1번과 2번으로 두 참가자가 붙게 되므로 3을 return 하면 됩니다.
*/

// class Node {
//   constructor(key) {
//     this.val = key;
//     this.left = null;
//     this.right = null;
//   }
// }

// class BST {
//   constructor() {
//     this.root = null;
//   }

//   insert(key) {
//     if ( !this.root ) this.root = new Node(key);
//     else {
//       let curr = this.root;
      
//       while (true) {
//         if ( !curr.left ) {
//           curr.left = new Node(key);
//           break;
//         } else {
//           curr = curr.left;
//         }
//       }
//     }
//   }
// }

function solution3(n,a,b) {
  // 맨 처음은 무조건 1번은 만남
  let answer = 1;
  let leafNode = new Array(n).fill(1).map((num, idx) => num + idx);

  // 종료조건 1:  더 이상 상위 노드가 없을 떄
  outer: while ( leafNode.length > 1 ) {
    const newNode = [];
    
    // 2개씩 짝지어서 상위로 올릴 노드를 검사함
    for ( let i = 0; i < leafNode.length; i = i + 2 ) {
      let toPushNode = 0;
      const left = leafNode[i];
      const right = leafNode[i + 1];
      
      for (const node of [left, right]) {
        if ( [a, b].includes(node) ) {
          if ( toPushNode !== 0 ) {
            // 종료조건 2: left와 right가 a, b 일 때
            // 즉 현재 이미 0이 아닌 노드를 상위로 올리려는 상태에서, 
            // right까지 조건에 걸리면 a, b 가 맞짱뜨는 것
            break outer;
          }
          
          toPushNode = node;
        }
      };

      // 올라가는 노드는 a와 b가 아니면 0으로 올라감.
      newNode.push(toPushNode);
    }

    leafNode = newNode;
    answer++;
  }

  return answer;
}

// console.log(solution3(8, 4, 7)); 

/* 
민호는 다단계 조직을 이용하여 칫솔을 판매하고 있습니다. 
판매원이 칫솔을 판매하면 그 이익이 피라미드 조직을 타고 조금씩 분배되는 형태의 판매망입니다.
 어느정도 판매가 이루어진 후, 조직을 운영하던 민호는 조직 내 누가 얼마만큼의 이득을 가져갔는지가 궁금해졌습니다. 
예를 들어, 민호가 운영하고 있는 다단계 칫솔 판매 조직이 아래 그림과 같다고 합시다.

민호는 center이며, 파란색 네모는 여덟 명의 판매원을 표시한 것입니다. 
각각은 자신을 조직에 참여시킨 추천인에 연결되어 피라미드 식의 구조를 이루고 있습니다. 
조직의 이익 분배 규칙은 간단합니다. 모든 판매원은 칫솔의 판매에 의하여 발생하는 이익에서
 10% 를 계산하여 자신을 조직에 참여시킨 추천인에게 배분하고 나머지는 자신이 가집니다. 
 모든 판매원은 자신이 칫솔 판매에서 발생한 이익 뿐만 아니라, 
 자신이 조직에 추천하여 가입시킨 판매원에게서 발생하는 이익의 10% 까지 자신에 이익이 됩니다. 
 자신에게 발생하는 이익 또한 마찬가지의 규칙으로 자신의 추천인에게 분배됩니다.
  단, 10% 를 계산할 때에는 원 단위에서 절사하며, 10%를 계산한 금액이 1 원 미만인 경우에는 
  이득을 분배하지 않고 자신이 모두 가집니다.

예를 들어, 아래와 같은 판매 기록이 있다고 가정하겠습니다. 
칫솔의 판매에서 발생하는 이익은 개당 100 원으로 정해져 있습니다.

판매원	판매 수량	이익금
young	12	1,200 원
john	4	400 원
tod	2	200 원
emily	5	500 원
mary	10	1,000 원

판매원 young 에 의하여 1,200 원의 이익이 발생했습니다. 
young 은 이 중 10% 에 해당하는 120 원을, 자신을 조직에 참여시킨 추천인인 edward 에게 배분하고 
자신은 나머지인 1,080 원을 가집니다. 
edward 는 young 에게서 받은 120 원 중 10% 인 12 원을 mary 에게 배분하고 
자신은 나머지인 108 원을 가집니다. 
12 원을 edward 로부터 받은 mary 는 10% 인 1 원을 센터에 (즉, 민호에게) 배분하고 
자신은 나머지인 11 원을 가집니다. 
이 상태를 그림으로 나타내면 아래와 같습니다.

각 판매원의 이름을 담은 배열 enroll,
각 판매원을 다단계 조직에 참여시킨 다른 판매원의 이름을 담은 배열 referral, 
판매량 집계 데이터의 판매원 이름을 나열한 배열 seller, 
판매량 집계 데이터의 판매 수량을 나열한 배열 amount가 매개변수로 주어질 때, 
각 판매원이 득한 이익금을 나열한 배열을 return 하도록 solution 함수를 완성해주세요. 
판매원에게 배분된 이익금의 총합을 계산하여(정수형으로), 
입력으로 주어진 enroll에 이름이 포함된 순서에 따라 나열하면 됩니다.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.children = [];
    this.parent = null;
    this.income = 0;
  }

  insert(node) {
    node.parent = this;
    this.children.push(node);
    // console.log(this);
  }

  find(key) {
    if ( this.val === key ) {
      return this;
    }

    for (let i = 0; i < this.children.length; i++) {
      const childNode = this.children[i];
      const found = childNode.find(key);

      if ( found ) return found;
    }

    return false;
  }
}

function solution4(enroll, referral, seller, amount) {
    const map = new Map();
    const root = new Node('-');
    map.set('-', root);

    function distribute (member, total) {
      const commision = parseInt(total * 0.1);
      const income = total - commision;

      if ( commision > 0 ) {
        member.income += income;
        if ( member.parent ) distribute(member.parent, commision);

      } else {
        member.income += total;
      }
    }

    for ( let i = 0; i < enroll.length; i++ ) {
      const node = map.get(referral[i]);
      const newNode = new Node(enroll[i]);
      if ( node ) node.insert(newNode);
      map.set(enroll[i], newNode);
    }

    seller.forEach((member, idx) => {
      distribute(map.get(member), amount[idx] * 100)
    });


    const answer = enroll.map((member) => map.get(member).income);

    return answer;
}

// console.log(solution4(["john", "mary", "edward", "sam", "emily", "jaimie", "tod", "young"], ["-", "-", "mary", "edward", "mary", "mary", "jaimie", "edward"], ["young", "john", "tod", "emily", "mary"], [12, 4, 2, 5, 10]));
//	[360, 958, 108, 0, 450, 18, 180, 1080]



/* 
 x 1 크기의 칸들로 이루어진 직사각형 격자 형태의 미로에서 탈출하려고 합니다. 
 각 칸은 통로 또는 벽으로 구성되어 있으며, 벽으로 된 칸은 지나갈 수 없고 
 통로로 된 칸으로만 이동할 수 있습니다. 통로들 중 한 칸에는 미로를 빠져나가는 문이 있는데, 
 이 문은 레버를 당겨서만 열 수 있습니다. 레버 또한 통로들 중 한 칸에 있습니다. 
 따라서, 출발 지점에서 먼저 레버가 있는 칸으로 이동하여 
 레버를 당긴 후 미로를 빠져나가는 문이 있는 칸으로 이동하면 됩니다. 
 이때 아직 레버를 당기지 않았더라도 출구가 있는 칸을 지나갈 수 있습니다. 
 미로에서 한 칸을 이동하는데 1초가 걸린다고 할 때, 
 최대한 빠르게 미로를 빠져나가는데 걸리는 시간을 구하려 합니다.

미로를 나타낸 문자열 배열 maps가 매개변수로 주어질 때, 
미로를 탈출하는데 필요한 최소 시간을 return 하는 solution 함수를 완성해주세요. 
만약, 탈출할 수 없다면 -1을 return 해주세요.

5 ≤ maps의 길이 ≤ 100
5 ≤ maps[i]의 길이 ≤ 100
maps[i]는 다음 5개의 문자들로만 이루어져 있습니다.
S : 시작 지점
E : 출구
L : 레버
O : 통로
X : 벽
시작 지점과 출구, 레버는 항상 다른 곳에 존재하며 한 개씩만 존재합니다.
출구는 레버가 당겨지지 않아도 지나갈 수 있으며, 
모든 통로, 출구, 레버, 시작점은 여러 번 지나갈 수 있습니다.
*/

class Queue {
  items = [];
  front = 0;
  rear = 0;

  push (item) {
    this.items.push(item);
    this.rear++;
  }

  pop() {
    return this.items[this.front++];
  }

  isEmpty() {
    return this.front === this.rear;
  }
}

function isValidMove(ny, nx, n, m, maps) {
  return 0 <= ny && ny < n && 0 <= nx && nx < m && maps[ny][nx] !== 'X';
}

function appendToQueue(ny, nx, k, time, visited, q) {
  if ( !visited[ny][nx][k] ) {
    visited[ny][nx][k] = true;
    q.push([ny, nx, k, time + 1])
  }
}

function solution5(maps) {
  const n = maps.length;
  const m = maps[0].length;
  const q = new Queue();
  const visited = Array.from(Array(n), () => Array(m).fill(false).map(() => Array(2).fill(false)));

  // 위, 아래, 왼쪽, 오른쪽 이동 방향
  const dy = [-1, 1, 0, 0];
  const dx = [0, 0, -1, 1];
  let endY = -1;
  let endX = -1;
  
  // 시작점과 도착점을 찾아 큐에 넣고 방문 여부 표시
  for ( let i = 0; i < n; i++ ) {
    for ( let j = 0 ; j < m; j++ ) {
      if ( maps[i][j] === 'S' ) { // 시작점
        q.push([i, j, 0, 0]);
        visited[i][j][0] = true;
      }

      if ( maps[i][j] === 'E' ) { // 도착점
        endY = i;
        endX = j;
      }
    }
  }

  while (!q.isEmpty()) {
    const [y, x, k, time] = q.pop();

    // 도착점에 도달하면 결과 반환
    if ( y === endY && x === endX && k === 1 ) return time;

    // 네 방향으로 이동
    for ( let i = 0; i < 4; i++ ) {
      const ny = y + dy[i];
      const nx = x + dx[i];

      // 이동 가능한 좌표일 때만 큐에 넣음
      if ( !isValidMove(ny, nx, n, m, maps) ) continue;

      // 다음 이동 지점이 레버인 경우
      if ( maps[ny][nx] === 'L' ) {
        appendToQueue(ny, nx, 1, time, visited, q);
      } else {
        // 다음 이동 지점이 레버가 아닌 경우
        appendToQueue(ny, nx, k, time, visited, q);
      }
    }
  }

  // 도착점에 도달하지 못한 경우
  return -1;
}

console.log(solution5(["SOOOL","XXXXO","OOOOO","OXXXX","OOOOE"])); // 	16
console.log(solution5(["LOOXS","OOOOX","OOOOO","OOOOO","EOOOO"])); // 	-1


