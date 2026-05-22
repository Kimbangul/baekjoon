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
class Node {
  constructor(key) {
    this.left = null;
    this.right = null;
    this.val = key;
  }
}

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

console.log(solution3(8, 4, 7)); 