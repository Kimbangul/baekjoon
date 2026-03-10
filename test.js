// /* 
// 문제 01 - 배열 정렬하기
// 권장 시간: 10분
// 권장 시간 복잡도: O(NlogN)
// 정수 배열을 정렬해서 반환하는 solution() 함수를 완성하세요.

// 제약 조건
// 정수 배열의 길이는 2 이상 10^5 이하입니다.
// 정수 배열의 각 데이터 값은 -100,000 이상 100,000 이하입니다.
// 입출력의 예
// 입력 출력
// [1, -5, 2, 4, 3]	[-5, 1, 2, 3, 4]
// [2, 1, 1, 3, 2, 5, 4]	[1, 1, 2, 2, 3, 4, 5]
// [6, 1, 7]	[1, 6, 7]
// */
// function solution1(arr) {
//   // 이 안에 코드를 작성하세요
//   return arr.sort((a,b) => a - b);
// }

// console.log(solution1([2, 1, 1, 3, 2, 5, 4]));

// /* 
// 문제 02 - 배열 제어하기
// 권장 시간: 10분
// 권장 시간 복잡도: O(NlogN)
// 정수 배열을 하나 받습니다. 배열의 중복값을 제거하고 배열 데이터를 내림차순으로 정렬해서 반환하는 
// solution() 함수를 구현하세요.

// 제약 조건
// 배열 길이는 2 이상 1,000 이하입니다.
// 각 배열의 데이터 값은 -100,000 이상 100,000 이하입니다.
// */

// function solution2(arr) {
//   // 이 안에 코드를 작성하세요
//   // [4, 2, 2, 1, 3, 4]	[4, 3, 2, 1]
//   // [2, 1, 1, 3, 2, 5, 4]	[5, 4, 3, 2, 1]

//   const sortedArr = arr.sort((a,b) => b - a);
//   return [...new Set(sortedArr)];
// }

// console.log(solution2([4, 2, 2, 1, 3, 4]));

// /*
// 정수 배열 numbers가 주어집니다. 
// numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 
// 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.
// [2,1,3,4,1]	[2,3,4,5,6,7]
// [5,0,2,7]	[2,5,7,9,12]

// 권장 시간 복잡도: O(N^2log(N^2))
// */
// function solution3(numbers) {
//   let answer = new Set();

//   for ( let i = 0; i < numbers.length; i++ ) {
//       for ( let j = i+1; j < numbers.length; j++ ) {
//           answer.add(numbers[i] + numbers[j]);
//       }
//   }

//   answer = [...answer].sort((a, b) => a - b);

//   return answer;
// }

// console.log(solution3([5,0,2,7]));

// /* 
// 2차원 행렬 arr1과 arr2를 입력받아, arr1에 arr2를 곱한 결과를 반환하는 함수, solution을 완성해주세요.

// 제한 조건
// 행렬 arr1, arr2의 행과 열의 길이는 2 이상 100 이하입니다.
// 행렬 arr1, arr2의 원소는 -10 이상 20 이하인 자연수입니다.
// 곱할 수 있는 배열만 주어집니다.

// [[1, 4], [3, 2], [4, 1]]
// [[3, 3], [3, 3]]
// [[15, 15], [15, 15], [15, 15]]
// */

// function solution4(arr1, arr2) {
//     const answer = [];
    
//     for ( let j = 0; j < arr1.length; j++ ) {
//       const pick = arr1[j];
//       const row = [];

//       for ( let j = 0; j < arr2.length; i++ ) {
//         pick[i] * arr2[j]
//       }
//     }
//     // for ( let b = 0; b <  )
    
//     return answer;
// }

// solution4([1, 4], [3, 2], [4, 1]);



/*
슈퍼 게임 개발자 오렐리는 큰 고민에 빠졌다. 
그녀가 만든 프랜즈 오천성이 대성공을 거뒀지만, 요즘 신규 사용자의 수가 급감한 것이다. 원인은 신규 사용자와 기존 사용자 사이에 스테이지 차이가 너무 큰 것이 문제였다.

이 문제를 어떻게 할까 고민 한 그녀는 동적으로 게임 시간을 늘려서 난이도를 조절하기로 했다. 역시 슈퍼 개발자라 대부분의 로직은 쉽게 구현했지만, 실패율을 구하는 부분에서 위기에 빠지고 말았다. 오렐리를 위해 실패율을 구하는 코드를 완성하라.

실패율은 다음과 같이 정의한다.
스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
전체 스테이지의 개수 N, 게임을 이용하는 사용자가 현재 멈춰있는 스테이지의 번호가 담긴 배열 stages가 매개변수로 주어질 때, 
실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨있는 배열을 return 하도록 solution 함수를 완성하라.

제한사항
스테이지의 개수 N은 1 이상 500 이하의 자연수이다.
stages의 길이는 1 이상 200,000 이하이다.
stages에는 1 이상 N + 1 이하의 자연수가 담겨있다.
각 자연수는 사용자가 현재 도전 중인 스테이지의 번호를 나타낸다.
단, N + 1 은 마지막 스테이지(N 번째 스테이지) 까지 클리어 한 사용자를 나타낸다.
만약 실패율이 같은 스테이지가 있다면 작은 번호의 스테이지가 먼저 오도록 하면 된다.
스테이지에 도달한 유저가 없는 경우 해당 스테이지의 실패율은 0 으로 정의한다.

stages에는 1 이상 N + 1 이하의 자연수가 담겨있다.
각 자연수는 사용자가 현재 도전 중인 스테이지의 번호를 나타낸다.
단, N + 1 은 마지막 스테이지(N 번째 스테이지) 까지 클리어 한 사용자를 나타낸다.
만약 실패율이 같은 스테이지가 있다면 작은 번호의 스테이지가 먼저 오도록 하면 된다.
스테이지에 도달한 유저가 없는 경우 해당 스테이지의 실패율은 0 으로 정의한다.

stages
[2, 1, 2, 6, 2, 4, 3, 3] [3,4,2,1,5]
[4,4,4,4,4] [4,1,2,3]
*/

// function solution5(N, stages) {
//     const answer = [];
//     const reachInfo = new Array(N + 1).fill(0);
//     const result = [];
    

//     for (let i = 0; i < stages.length; i++) {
//       // 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
//       console.log(stages[i]);
//       const completed = stages[i] - 1;
//       reachInfo[completed]++;
//     }

//     for (let i = 0; i <= N; i++) {
//       // stages [2, 1, 2, 6, 2, 4, 3, 3] [3,4,2,1,5]
//       // 스테이지에 도달한 플레이어 수: 현재 스테이지부터 N스테이지까지의 총합
//       // 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수: 스테이지에 도달한 플레이어 수 - N스테이지에 머무른 사람의 수
//       // 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
//       let completed = 0;
//       let uncompleted = 0;

//       for ( let j = i; j <= N; j++ ) {
//         completed += reachInfo[j];
//       }
      
//       uncompleted = reachInfo[i];
//       console.log(`completed: ${completed} uncompleted: ${uncompleted} uncompleted/completed = ${uncompleted/completed}`);
//     }

//     console.log(reachInfo);

//     return answer;
// }

// function solution5(N, stages) {
//     // 실패율: 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
//     // 1. 스테이지에 도전중인 사람을 구한다. 게임 정보를 돌면서 배열로 정리한다.
//     // 2. 스테이지에 도달한 사람을 구한다. (도전중인 사람들 + 그 이상 난이도를 깬 사람들)
//     const progressed = new Array(N + 1).fill(0);
//     const reached = new Array(N + 1).fill(0);
//     const failure = new Array(N).fill(1).map((el, idx) => el + idx);

//     for ( let i = 0; i < stages.length; i++ ) {
//       progressed[stages[i] - 1]++; // 1. 스테이지에 도전중인 사람들 배열로 만들기
//     }
    
//     for ( let i = 0; i < progressed.length; i++ ) {
//       // 2. 스테이지에 도달한 사람을 구하기 (도전중인 사람들 + 그 이상 난이도를 깬 사람들)
//       for ( let j = i; j < progressed.length; j++ ) {
//         reached[i] += progressed[j];
//       }
//     }

//     failure.sort((idx1, idx2) => {
//       const idx1Failure = progressed[idx1 - 1] / reached[idx1 - 1];
//       const idx2Failure = progressed[idx2 - 1] / reached[idx2 - 1];
//       if ( idx1Failure > idx2Failure ) return -1; // 실패율이 큰 순부터 앞으로 정렬
//       else if ( idx1Failure < idx2Failure ) return 1;
//       else idx1 - idx2; // 실패율이 같으면 오름차순 정렬
//     });

//     return failure;
// }

// console.log(solution5(4, [4,4,4,4,4]));

/* 
소괄호는 짝을 맞춘 열린 괄호 '(' 와 닫힌 괄호 ')' 로 구성합니다. 
문제에서는 열린 괄호나 닫힌 괄호가 마구 뒤섞인 문자열을 줍니다.
이 때 소괄호가 정상으로 열고 닫혔는지 판별하는 solution 함수를 구현하세요.
만약 소괄호가 정상적으로 열고 닫혔다면 true를, 그렇지 않다면 false를 반환하면 됩니다.
*/

function solution6(input) {
  const stack = [];

  const isEmpty = () => stack.length === 0 ? true : false;

  for ( let i = 0 ; i < input.length; i++ ) {
    console.log(stack);
    switch ( input[i] ) {
      case '(':
        stack.push('(');
        break;
      case ')':
        if ( isEmpty() ) {
          return false;
        } else {
          stack.pop();
        }
        break;
    }
  }

  if ( isEmpty() ) return true;
  else return false;
}

console.log(solution6(['(',')','(','(',')',')','(']));
