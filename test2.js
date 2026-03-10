/* 
소괄호는 짝을 맞춘 열린 괄호 '(' 와 닫힌 괄호 ')' 로 구성합니다. 
문제에서는 열린 괄호나 닫힌 괄호가 마구 뒤섞인 문자열을 줍니다.
이 때 소괄호가 정상으로 열고 닫혔는지 판별하는 solution 함수를 구현하세요.
만약 소괄호가 정상적으로 열고 닫혔다면 true를, 그렇지 않다면 false를 반환하면 됩니다.
*/

function solution1(str) {
  const stack = [];

  const isEmpty = () => stack.length === 0 ? true : false;

  for ( let i = 0 ; i < str.length; i++ ) {
    switch ( str[i] ) {
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

console.log(solution1('((())()'));

/* 
10진수를 입력받아 2진수로 변환해 반환하는 solution() 함수를 구현하세요.
decimal은 1 이상 10억 미만의 자연수
*/

function solution2(decimal) {
  const stack = [];
  let number = decimal;

  while ( number > 0 ) {
    stack.push(number % 2);
    // 매 반복마다 number를 2로 나눕니다, 즉, number는 반복할 때마다 절반씩 감소.
    number = parseInt( number / 2 );
  }

  // 2진수 자릿수는 log₂(decimal)
  // 여기는 Math.floor가 더 좋다고 함. (의미적으로 정확, 불필요한 형변환 X, 일반적으로 더 빠르고 메모리 낭비도 적음)
  const result = Number(stack.reverse().join('')); 
  return result;
}

console.log(solution2(12345));