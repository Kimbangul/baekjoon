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

// console.log(solution([1, 2, 3, 4, 8], 6)); // true
// console.log(solution([2, 3, 5, 9], 10)); // false

// // 기본 케이스
// console.log(solution([1, 2, 3, 4, 8], 6));  // true (2+4)
// console.log(solution([2, 3, 5, 9], 10));    // false

// // 최소 길이 케이스
// console.log(solution([1, 9], 10));          // true
// console.log(solution([1, 2], 4));           // false

// // 큰 값 포함
// console.log(solution([1000, 2000, 3000, 4000], 7000)); // true (3000+4000)
// console.log(solution([1000, 2000, 3000, 4000], 100));  // false

// // 정렬 안된 배열
// console.log(solution([8, 1, 4, 3, 2], 6));  // true (4+2)

// // 양 끝 값 조합
// console.log(solution([1, 5, 7, 9], 10));    // true (1+9)

// // 같은 수 두 번 사용 불가 확인
// console.log(solution([5, 7, 9], 10));       // false (5+5 안됨)

// // 타겟이 매우 큰 경우
// console.log(solution([1, 2, 3, 4, 5], 100)); // false

// // 타겟이 배열 합보다 작은데 조합 없는 경우
// console.log(solution([2, 4, 6, 8], 5));     // false

// // 여러 조합 가능한 경우
// console.log(solution([1, 2, 3, 7, 8], 9));  // true (1+8, 2+7)

// // 가장 작은 값들만으로 구성
// console.log(solution([1, 2, 3], 5));        // true (2+3)

// // 중간 값 조합
// console.log(solution([10, 20, 30, 40], 50)); // true (10+40, 20+30)


function countSort(arr, k) {
  // 0 해시 테이블 생성 및 초기화
  const hashtable = new Array(k + 1).fill(0);

  for (const num of arr) {
    // 현재 원소의 값이 k 이하일 때만 처리
    if (num <= k) {
      // 현재 원소에 값을 인덱스로 해 해당 인덱스의 해시 테이블 값을 1로 설정
      hashtable[num] = 1;
    }
  }

  return hashtable;
}

// function solution2(arr, target) {
//   const hashtable = countSort(arr, target);
//   console.log('hashtable');
//   console.log(hashtable);

//   for (const num of arr) {
//     const complement = target - num;
//     console.log(`num: ${num} complement: ${complement}`);
//     // target에서 현재 값들을 뺀 값이 해시 테이블에 있는지 확인
//     if (
//       complement !== num &&
//       complement >= 0 &&
//       complement <= target &&
//       hashtable[complement] === 1
//     ) {
//       return true;
//     }
//   }

//   return false;
// }

// console.log(solution2([1, 2, 3, 4, 8], 6)); // true
// console.log(solution2([2, 3, 5, 9], 10));   // false


/* 
문자열 리스트 stringList와 쿼리 리스트 queryList가 있을 때 각 쿼리 리스트에 있는 문자열이 stringList의 문자열 리스트에 있는지 여부를 확인해야 합니다. 
문자열이 있으면 true, 없으면 false가 됩니다. 각 문자열에 대해서 문자열의 존재 여부를 리스트 형태로 반환하는 solution() 함수를 작성해주세요.

제약 조건

입력 문자열은 영어 소문자로만 이루어져 있습니다.
문자열의 최대 길이는 10⁶입니다.
해시 충돌은 없습니다.
아래와 같은 문자열 해싱 방법을 사용해서 해싱 함수를 구현하세요.
다음 식에서 p는 31, m은 1,000,000,007을 말합니다.
hash(s) = (s[0] + s[1]p + s[2]p² + …… s[n-1]pⁿ⁻¹) mod m

입출력 예

stringList	                   queryList	                           return
["apple", "banana", "cherry"]	["banana", "kiwi", "melon", "apple"]	[true, false, false, true]
*/

// function solution3(stringList, queryList) {

// }

// ① polynomial hash를 구현한 부분
function polynomialHash(str) {
  const p = 31; // 소수
  const m = 1000000007; // 버킷 크기
  let hashValue = 0;

  for (let i = 0; i < str.length; i++) {
    hashValue = (hashValue * p + str.charCodeAt(i)) % m;
  }

  return hashValue;
}

function solution3(stringList, queryList) {
  // ② stringList의 각 문자열에 대해 다항 해시값을 계산
  const hashList = stringList.map((str) => polynomialHash(str));
  console.log(hashList);

  // ③ queryList의 각 문자열이 stringList에 있는지 확인
  const result = [];
  for (const query of queryList) {
    const queryHash = polynomialHash(query);
    console.log(`queryHash: ${queryHash} hashList.includes(queryHash): ${hashList.includes(queryHash)}`);

    if (hashList.includes(queryHash)) {
      result.push(true);
    } else {
      result.push(false);
    }
  }

  return result;
}

console.log(solution3(['apple', 'banana', 'cherry'], ['banana', 'kiwi', 'melon', 'apple']));