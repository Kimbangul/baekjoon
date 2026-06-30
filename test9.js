// 루트 노드 찾는 함수
function find (parents, x) {
  if (parents[x] === x) {
    // 만약 x의 부모가 자기 자신이면, 즉 x가 루트 노드라면
    return x;
  }

  // 그렇지 않다면 x의 부모를 찾아서 parents[x]에 저장
  // 그 부모 노드의 루트 노드를 찾아서 parents[x]에 저장
  // 이 부분이 경로 압축에 해당
  parents[x] = find(parents, parents[x]);
  return parents[x];
}

function union(parents, x, y) {
  const root1 = find(parents, x); // x가 속한 집합의 루트 노드 찾기
  const root2 = find(parents, y); // y가 속한 집합의 루트 노드 찾기

  parents[root2] = root1; // y가 속한 집합을 x가 속한 집합에 합침
}

function solution(k, operations) {
  // 처음에는 각 노드가 자기 자신을 부모로 가지도록 초기화
  const parents = Array.from({ length: k }, (_, i) => i);
  let n = k; // 집합의 개수를 저장할 변수, 처음에는 모든 노드가 서로 다른 집합에 있으므로 k

  for ( const op of operations ) { // operations 배열에 있는 연산들을 하나씩 처리
    if ( op[0] === 'u' ) {
      union(parents, op[1], op[2]);
    } else if ( op[0] === 'f' ) {
      find(parents, op[1]);
    }

    // 모든 노드의 루트 노드를 찾아서 집합의 개수를 계산
    n = new Set(Array.from({ length: k }, (_, i) => find(parents, i))).size;
  }

  return n;
}

// console.log(solution(3, [['u', 0, 1], ['u', 1, 2], ['f', 2]])); // 1
// console.log(solution(3, [['u', 0, 1], ['u', 2, 3], ['f', 0]])); // 2

/* 
당신은 폰켓몬을 잡기 위한 오랜 여행 끝에, 홍 박사님의 연구실에 도착했습니다. 
홍 박사님은 당신에게 자신의 연구실에 있는 총 N 마리의 폰켓몬 중에서 N/2마리를 가져가도 좋다고 했습니다.
홍 박사님 연구실의 폰켓몬은 종류에 따라 번호를 붙여 구분합니다. 따라서 같은 종류의 폰켓몬은 같은 번호를 가지고 있습니다. 
예를 들어 연구실에 총 4마리의 폰켓몬이 있고, 각 폰켓몬의 종류 번호가 [3번, 1번, 2번, 3번]이라면 
이는 3번 폰켓몬 두 마리, 1번 폰켓몬 한 마리, 2번 폰켓몬 한 마리가 있음을 나타냅니다. 
이때, 4마리의 폰켓몬 중 2마리를 고르는 방법은 다음과 같이 6가지가 있습니다.

첫 번째(3번), 두 번째(1번) 폰켓몬을 선택
첫 번째(3번), 세 번째(2번) 폰켓몬을 선택
첫 번째(3번), 네 번째(3번) 폰켓몬을 선택
두 번째(1번), 세 번째(2번) 폰켓몬을 선택
두 번째(1번), 네 번째(3번) 폰켓몬을 선택
세 번째(2번), 네 번째(3번) 폰켓몬을 선택
이때, 첫 번째(3번) 폰켓몬과 네 번째(3번) 폰켓몬을 선택하는 방법은 한 종류(3번 폰켓몬 두 마리)의 폰켓몬만 가질 수 있지만, 
다른 방법들은 모두 두 종류의 폰켓몬을 가질 수 있습니다. 따라서 위 예시에서 가질 수 있는 폰켓몬 종류 수의 최댓값은 2가 됩니다.
당신은 최대한 다양한 종류의 폰켓몬을 가지길 원하기 때문에, 최대한 많은 종류의 폰켓몬을 포함해서 N/2마리를 선택하려 합니다. 
N마리 폰켓몬의 종류 번호가 담긴 배열 nums가 매개변수로 주어질 때, N/2마리의 폰켓몬을 선택하는 방법 중, 
가장 많은 종류의 폰켓몬을 선택하는 방법을 찾아, 그때의 폰켓몬 종류 번호의 개수를 return 하도록 solution 함수를 완성해주세요.


nums는 폰켓몬의 종류 번호가 담긴 1차원 배열입니다.
nums의 길이(N)는 1 이상 10,000 이하의 자연수이며, 항상 짝수로 주어집니다.
폰켓몬의 종류 번호는 1 이상 200,000 이하의 자연수로 나타냅니다.
가장 많은 종류의 폰켓몬을 선택하는 방법이 여러 가지인 경우에도, 선택할 수 있는 폰켓몬 종류 개수의 최댓값 하나만 return 하면 됩니다.
*/

function solution2(nums) {
  const maxChoiceCnt = nums.length / 2;
  let answer = 0;
  const numSet = new Set(nums).size;

  if ( maxChoiceCnt <= numSet ) {
    return maxChoiceCnt;
  } 
  return numSet;
}

// console.log(solution2([3,1,2,3])); // 2
// console.log(solution2([3,3,3,2,2,4])); // 2
// console.log(solution2([3,3,3,2,2,2])); // 2

/*
1부터 n까지 번호가 붙어있는 n명의 사람이 영어 끝말잇기를 하고 있습니다. 
영어 끝말잇기는 다음과 같은 규칙으로 진행됩니다.

1번부터 번호 순서대로 한 사람씩 차례대로 단어를 말합니다.
마지막 사람이 단어를 말한 다음에는 다시 1번부터 시작합니다.
앞사람이 말한 단어의 마지막 문자로 시작하는 단어를 말해야 합니다.
이전에 등장했던 단어는 사용할 수 없습니다.
한 글자인 단어는 인정되지 않습니다.
다음은 3명이 끝말잇기를 하는 상황을 나타냅니다.

tank → kick → know → wheel → land → dream → mother → robot → tank

위 끝말잇기는 다음과 같이 진행됩니다.

1번 사람이 자신의 첫 번째 차례에 tank를 말합니다.
2번 사람이 자신의 첫 번째 차례에 kick을 말합니다.
3번 사람이 자신의 첫 번째 차례에 know를 말합니다.
1번 사람이 자신의 두 번째 차례에 wheel을 말합니다.
(계속 진행)
끝말잇기를 계속 진행해 나가다 보면, 
3번 사람이 자신의 세 번째 차례에 말한 tank 라는 단어는 이전에 등장했던 단어이므로 탈락하게 됩니다.

사람의 수 n과 사람들이 순서대로 말한 단어 words 가 매개변수로 주어질 때, 
가장 먼저 탈락하는 사람의 번호와 그 사람이 자신의 몇 번째 차례에 탈락하는지를 구해서 r
eturn 하도록 solution 함수를 완성해주세요.


만약 주어진 단어들로 탈락자가 생기지 않는다면, [0, 0]을 return 해주세요.

*/
function solution3(n, words) {
    let answer = [0, 0];
    const alreadySaid = new Set();
    let wrongWord = false;


    for ( idx = 0; idx < words.length; idx++ ) {
      const word = words[idx];

      if ( idx > 0 ) {
        const prevWord = words[idx - 1];
        if ( prevWord[prevWord.length - 1] !== word[0]) {
          wrongWord = true;
        } 
      }

      if ( alreadySaid.has( word ) || wrongWord || word.length <= 1 ) {
        answer[0] = ( idx % n + 1 );
        answer[1] = (Math.ceil(( idx + 1 ) / n));
        
        return answer;
      }

      alreadySaid.add(word);
    }
    return answer;
}

console.log(solution3(3, ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"])); // [3,3]
console.log(solution3(5, ["hello", "observe", "effect", "take", "either", "recognize", "encourage", "ensure", "establish", "hang", "gather", "refer", "reference", "estimate", "executive"])); // [0,0]
console.log(solution3(2, ["hello", "one", "even", "never", "now", "world", "draw"])); // [1,3]

/* 
전화번호부에 적힌 전화번호 중, 한 번호가 다른 번호의 접두어인 경우가 있는지 확인하려 합니다.
전화번호가 다음과 같을 경우, 구조대 전화번호는 영석이의 전화번호의 접두사입니다.

구조대 : 119
박준영 : 97 674 223
지영석 : 11 9552 4421
전화번호부에 적힌 전화번호를 담은 배열 phone_book 이 solution 함수의 매개변수로 주어질 때, 
어떤 번호가 다른 번호의 접두어인 경우가 있으면 false를 그렇지 않으면 true를 return 하도록 solution 함수를 작성해주세요.

phone_book의 길이는 1 이상 1,000,000 이하입니다.
각 전화번호의 길이는 1 이상 20 이하입니다.
같은 전화번호가 중복해서 들어있지 않습니다.

phone_book	return
["119", "97674223", "1195524421"]	false
["123","456","789"]	true
["12","123","1235","567","88"]	false
*/

function solution4(phone_book) {
    const book = new Set(phone_book);

    for ( let i = 0; i < phone_book.length; i++ ) {
      let word = '';
      for ( const j of phone_book[i] ) {
        word += j;
        if ( book.has(word) && word !== phone_book[i] ) return false;
      }
    }

    return true;
}

console.log(solution4(["119", "97674223", "1195524421"]	)); // false
console.log(solution4(["123","456","789"]	)); // true
console.log(solution4(["12","123","1235","567","88"]	)); // false