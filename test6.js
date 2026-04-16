/*
n개의 양의 정수로 이루어진 리스트 arr와 정수 target이 주어질 때 
이 중에서 합이 target인 두 수가 arr에 있는지 찾고, 
있으면 true, 없으면 false를 반환하는 solution() 함수를 작성하세요.

[제약 조건]
n은 2 이상 10,000 이하의 자연수입니다.
arr의 각 원소는 1 이상 10,000 이하의 자연수입니다.
arr의 원소 중 중복되는 원소는 없습니다.
target은 1 이상 20,000 이하의 자연수입니다.

arr	target	return
[1, 2, 3, 4, 8]	6	True
[2, 3, 5, 9]	10	false
*/

function solution(arr, target) {
  // 이 중에서 합이 target인 두 수가 arr에 있는지 찾고
  // 있으면 true, 없으면 false 반환
  const dict = {};

  for ( let i = 0; i < arr.length; i++ ) {
    for ( let j = i + 1; j < arr.length; j++ ) {
      dict[arr[i] + arr[j]] = true;
    }
  }

  if ( dict[target] !== undefined ) return true;
  else return false;
}

console.log(solution([1, 2, 3, 4, 8], 6)); // true
console.log(solution([2, 3, 5, 9], 10)); // false

// 기본 케이스
console.log(solution([1, 2, 3, 4, 8], 6));  // true (2+4)
console.log(solution([2, 3, 5, 9], 10));    // false

// 최소 길이 케이스
console.log(solution([1, 9], 10));          // true
console.log(solution([1, 2], 4));           // false

// 큰 값 포함
console.log(solution([1000, 2000, 3000, 4000], 7000)); // true (3000+4000)
console.log(solution([1000, 2000, 3000, 4000], 100));  // false

// 정렬 안된 배열
console.log(solution([8, 1, 4, 3, 2], 6));  // true (4+2)

// 양 끝 값 조합
console.log(solution([1, 5, 7, 9], 10));    // true (1+9)

// 같은 수 두 번 사용 불가 확인
console.log(solution([5, 7, 9], 10));       // false (5+5 안됨)

// 타겟이 매우 큰 경우
console.log(solution([1, 2, 3, 4, 5], 100)); // false

// 타겟이 배열 합보다 작은데 조합 없는 경우
console.log(solution([2, 4, 6, 8], 5));     // false

// 여러 조합 가능한 경우
console.log(solution([1, 2, 3, 7, 8], 9));  // true (1+8, 2+7)

// 가장 작은 값들만으로 구성
console.log(solution([1, 2, 3], 5));        // true (2+3)

// 중간 값 조합
console.log(solution([10, 20, 30, 40], 50)); // true (10+40, 20+30)