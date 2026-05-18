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

solution2([5, 3, 8, 4, 2, 1, 7, 10], [1, 2, 5, 6]);

console.log(solution2([5, 3, 8, 4, 2, 1, 7, 10], [1, 2, 5, 6]));
console.log(solution2([1, 3, 5, 7, 9], [2, 4, 6, 8, 10]));