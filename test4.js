/* 
권장 시간: 30분
권장 시간 복잡도: O(N * K)

N명의 사람이 원 형태로 서 있습니다. 
각 사람은 1부터 N까지 번호표를 갖고 있습니다. 
그리고 임의의 숫자 K가 주어졌을 때 다음과 같이 사람을 없앱니다.
- 1번 번호표를 가진 사람을 기준으로 K번째 사람을 없앱니다.
- 없앤 사람 다음 사람을 기준으로 하고 다시 K번째 사람을 없앱니다.
N과 K가 주어질 때 마지막에 살아있는 사람의 번호를 반환하는 solution() 함수를 구현해주세요.
*/

const deletePerson = (K, arr) => {
  const newQueue = [];
  const deletePointer = K % arr.length;
  const front = (deletePointer + 1) % arr.length;
  let pointer = front;

  for ( let i = 0; i < arr.length; i++ ) {
    if ( arr[pointer] === arr[deletePointer] ) continue;
    newQueue[i] = arr[pointer] || arr[pointer % arr.length];
    
    pointer++;
    if ( pointer >= arr.length ) pointer %= arr.length;
  }

 // console.log(newQueue);
  return newQueue;
}

function solution(N, K) {
	let queue = new Array(N).fill(1).map((num, idx) => num + idx);
      
  while ( queue.length > 1 ) {
    queue = deletePerson(K - 1, queue);
  }

  //console.log(queue);
  return queue[0];
}

console.log(solution(1, 1)); // 1
console.log(solution(2, 1)); // 2
console.log(solution(2, 2)); // 1
console.log(solution(3, 2)); // 3
console.log(solution(4, 2)); // 1
console.log(solution(5, 2)); // 3
console.log(solution(6, 2)); // 5
console.log(solution(7, 3)); // 4
console.log(solution(8, 3)); // 7
console.log(solution(10, 3)); // 4
console.log(solution(10, 4)); // 5
console.log(solution(12, 5)); // 1