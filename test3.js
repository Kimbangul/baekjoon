/* 
다음 규칙을 지키는 문자열을 올바른 괄호 문자열이라고 정의합니다.

(), [], {} 는 모두 올바른 괄호 문자열입니다.
만약 A가 올바른 괄호 문자열이라면, (A), [A], {A} 도 올바른 괄호 문자열입니다. 
예를 들어, [] 가 올바른 괄호 문자열이므로, ([]) 도 올바른 괄호 문자열입니다.
만약 A, B가 올바른 괄호 문자열이라면, AB 도 올바른 괄호 문자열입니다. 
예를 들어, {} 와 ([]) 가 올바른 괄호 문자열이므로, {}([]) 도 올바른 괄호 문자열입니다.
대괄호, 중괄호, 그리고 소괄호로 이루어진 문자열 s가 매개변수로 주어집니다. 
이 s를 왼쪽으로 x (0 ≤ x < (s의 길이)) 칸만큼 회전시켰을 때 
s가 올바른 괄호 문자열이 되게 하는 x의 개수를 return 하도록 solution 함수를 완성해주세요.

"[](){}"	3
"}]()[{"	2
"[)(]"	0
"}}}"	0
*/

function solution(s) {
  let result = 0;
  let str = s;
  const stack = [];
  
  function getTop() {
    return stack[stack.length - 1];
  }

  function checkStack() {
    for ( let i = 0; i < str.length; i++ ) {
      if ( ["[", "(", "{"].some( (el) => el === str[i] ) ) {
        stack.push(str[i]);
        continue;
      } 

      switch ( str[i] ) {
        case "]":
          if ( getTop() === "[" ) {
            stack.pop();
            continue;
          }
        case ")":
          if ( getTop() === "(" ) {
            stack.pop();
            continue;
          }          
        case "}":
          if ( getTop() === "{" ) {
            stack.pop();
            continue;
          }
      }

      if ( stack.length === 0 ) return false;
    }

    if ( stack.length === 0 ) return true; // 반복문을 돌고 스택 안에 남은 것이 없으면 올바른 괄호 문자열
    return false;
  }

  for ( let i = 0; i < str.length; i++ ) {
    if ( checkStack() ) result++;
    // 문자열 왼쪽으로 돌리기
    str = str.slice(1) + str[0];
  }

  return result;
}

// console.log(solution("}}}"));

/* 
초 단위로 기록된 주식가격이 담긴 배열 prices가 매개변수로 주어질 때, 
가격이 떨어지지 않은 기간은 몇 초인지를 return 하도록 solution 함수를 완성하세요.
[1, 2, 3, 2, 3]	[4, 3, 1, 1, 0]
1초 시점의 ₩1은 끝까지 가격이 떨어지지 않았습니다.
2초 시점의 ₩2은 끝까지 가격이 떨어지지 않았습니다.
3초 시점의 ₩3은 1초뒤에 가격이 떨어집니다. 따라서 1초간 가격이 떨어지지 않은 것으로 봅니다.
4초 시점의 ₩2은 1초간 가격이 떨어지지 않았습니다.
5초 시점의 ₩3은 0초간 가격이 떨어지지 않았습니다.

prices의 각 가격은 1 이상 10,000 이하인 자연수입니다.
prices의 길이는 2 이상 100,000 이하입니다.
*/

function solution2(prices) {
    let answer = new Array(prices.length).fill(0);
    const stack = []; // 초 카운트를 올리기 위한 인덱스를 담을 스택 선언 (값이 아직 떨어지지 않은 price들)

    for ( let idx = 0 ; idx < prices.length; idx++ ) {
      const topIdx = stack[stack.length - 1];
      stack.forEach( (remain) => answer[remain]++ );

      if ( stack.length !== 0 && prices[topIdx] > prices[idx] ) { 
        // 가장 최근 가격이 현재 가격보다 떨어졌을 때는 stack에서 제거
        stack.pop();
      }

      stack.push(idx); // 스택에 담기는 것은 인덱스
    }

    return answer;
}

function solution2_5(prices) {
    let answer = new Array(prices.length).fill(0);
    const stack = []; //  값이 아직 떨어지지 않은 price들의 인덱스를 담을 스택 선언

    for ( let curIdx = 0 ; curIdx < prices.length; curIdx++ ) {
      while ( stack.length !== 0 && prices[stack[stack.length - 1]] > prices[curIdx] ) {
        // if를 쓰면 맨 위 하나만 pop 하고 끝남. 
        // 가장 최근 가격이 현재 가격보다 떨어졌을 때는 stack에서 제거
        const top = stack.pop();
        answer[top] = curIdx - top;
      }

      stack.push(curIdx); // 스택에 담기는 것은 인덱스
    }

    // stack에 남아 있는 부분 정리
    while ( stack.length > 0 ) {
      const top = stack.pop();
      answer[top] = answer.length - 1 - top;
    }

    return answer;
}

// console.log(solution2([1, 2, 3, 2, 3, 1, 2, 3, 1]));
console.log(solution2_5([1, 2, 3, 2, 3]));

/*
임 화면은 "1 x 1" 크기의 칸들로 이루어진 "N x N" 크기의 정사각 격자이며 
위쪽에는 크레인이 있고 오른쪽에는 바구니가 있습니다. 
(위 그림은 "5 x 5" 크기의 예시입니다). 
각 격자 칸에는 다양한 인형이 들어 있으며 인형이 없는 칸은 빈칸입니다. 
모든 인형은 "1 x 1" 크기의 격자 한 칸을 차지하며 
격자의 가장 아래 칸부터 차곡차곡 쌓여 있습니다. 
게임 사용자는 크레인을 좌우로 움직여서 멈춘 위치에서 
가장 위에 있는 인형을 집어 올릴 수 있습니다. 
집어 올린 인형은 바구니에 쌓이게 되는 데, 
이때 바구니의 가장 아래 칸부터 인형이 순서대로 쌓이게 됩니다. 
다음 그림은 [1번, 5번, 3번] 위치에서 
순서대로 인형을 집어 올려 바구니에 담은 모습입니다.

[[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]]
[1,5,3,5,1,2,1,4]
4

*/

function solution3(board, moves) {
  let answer = 0;
  const stack = [];
  const getTop = () => stack[stack.length - 1];

  for ( let currMove = 0; currMove < moves.length; currMove++ ) {
    let cell = moves[currMove] - 1;

    for ( let row = 0; row < board.length; row++ ) {
      const pick = board[row][cell];

      if ( pick > 0 ) {
        if ( getTop() === pick ) {
          stack.pop();
          board[row][cell] = 0;
          answer += 2;
          break;
        }

        stack.push(pick);
        board[row][cell] = 0;
        break;
      }
    }
  }

  return answer;
}

console.log(solution3([[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]], [1,5,3,5,1,2,1,4]));