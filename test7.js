/*
수많은 마라톤 선수들이 마라톤에 참여하였습니다. 
단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.

마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 
완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

제한사항
마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
completion의 길이는 participant의 길이보다 1 작습니다.
참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
참가자 중에는 동명이인이 있을 수 있습니다.

participant	                                        completion	                                   return
["leo", "kiki", "eden"]     	                      ["eden", "kiki"]	                             "leo"
["marina", "josipa", "nikola", "vinko", "filipa"]	 ["josipa", "filipa", "marina", "nikola"]	      "vinko"
["mislav", "stanko", "mislav", "ana"]              ["stanko", "ana", "mislav"]	                  "mislav"
*/

// function solution1(participant, completion) {
//     let answer = '';
//     const comp = {};

//     completion.forEach((el) => {
//       if ( comp[el] ) {
//         comp[el] = comp[el] + 1;
//       } else {
//         comp[el] = 1;
//       }
//     })

//     participant.forEach((el) => {
//       if ( comp[el] > 0 ) {
//         comp[el] = comp[el] - 1;
//       } else {
//         answer = el;
//       }
//     })

//     return answer;
// }

// console.log(solution1(["leo", "kiki", "eden"], ["eden", "kiki"]));
// console.log(solution1(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"]));
// console.log(solution1(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]));

/* 
XYZ 마트는 일정한 금액을 지불하면 10일 동안 회원 자격을 부여합니다. 
XYZ 마트에서는 회원을 대상으로 매일 한 가지 제품을 할인하는 행사를 합니다. 
할인하는 제품은 하루에 하나씩만 구매할 수 있습니다. 
알뜰한 정현이는 자신이 원하는 제품과 수량이 할인하는 날짜와 10일 연속으로 일치할 경우에 
맞춰서 회원가입을 하려 합니다.

예를 들어, 정현이가 원하는 제품이 바나나 3개, 사과 2개, 쌀 2개, 돼지고기 2개, 냄비 1개이며, 
XYZ 마트에서 14일간 회원을 대상으로 할인하는 제품이 날짜 순서대로 치킨, 사과, 사과, 바나나, 쌀, 사과, 돼지고기, 바나나, 돼지고기, 쌀, 냄비, 바나나, 사과, 바나나인 경우에 대해 알아봅시다. 
첫째 날부터 열흘 간에는 냄비가 할인하지 않기 때문에 첫째 날에는 회원가입을 하지 않습니다. 
둘째 날부터 열흘 간에는 바나나를 원하는 만큼 할인구매할 수 없기 때문에 둘째 날에도 회원가입을 하지 않습니다. 
셋째 날, 넷째 날, 다섯째 날부터 각각 열흘은 원하는 제품과 수량이 일치하기 때문에 셋 중 하루에 회원가입을 하려 합니다.

정현이가 원하는 제품을 나타내는 문자열 배열 want와 정현이가 원하는 제품의 수량을 나타내는 정수 배열 number, 
XYZ 마트에서 할인하는 제품을 나타내는 문자열 배열 discount가 주어졌을 때, 
회원등록시 정현이가 원하는 제품을 모두 할인 받을 수 있는 회원등록 날짜의 총 일수를 return 하는 solution 함수를 완성하시오. 
가능한 날이 없으면 0을 return 합니다.

1 ≤ want의 길이 = number의 길이 ≤ 10
1 ≤ number의 원소 ≤ 10
number[i]는 want[i]의 수량을 의미하며, number의 원소의 합은 10입니다.
10 ≤ discount의 길이 ≤ 100,000
want와 discount의 원소들은 알파벳 소문자로 이루어진 문자열입니다.
1 ≤ want의 원소의 길이, discount의 원소의 길이 ≤ 12

"banana", "apple", "rice", "pork", "pot"]	[3, 2, 2, 2, 1]	["chicken", "apple", "apple", "banana", "rice", "apple", "pork", "banana", "pork", "rice", "pot", "banana", "apple", "banana"]	3
["apple"]	[10]	["banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana"]	0

*/

// function solution2(want, number, discount) {
//     let answer = 0;

//     for ( let day = 0; day <= discount.length - 10; day++ ) {
//       const list = {};

//       for ( let i = 0; i < want.length; i++ ) {
//         list[want[i]] = number[i];
//       }

//       for ( let i = day; i < day + 10; i++ ) {
//         const discountItem = discount[i];
//         if ( list[discountItem] && list[discountItem] > 0 ) {
//           list[discountItem] = list[discountItem] - 1;
//           if ( list[discountItem] === 0 ) delete list[discountItem];
//         } 

//         if ( Object.keys(list).length === 0 ) answer++;
//       }
//     }

//     return answer;
// }

// console.log(solution2(["banana", "apple", "rice", "pork", "pot"],[3, 2, 2, 2, 1],["chicken", "apple", "apple", "banana", "rice", "apple", "pork", "banana", "pork", "rice", "pot", "banana", "apple", "banana"]));
// console.log(solution2(["apple"],[10],["banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana"]));


/* 
  카카오톡 오픈채팅방에서는 친구가 아닌 사람들과 대화를 할 수 있는데, 본래 닉네임이 아닌 가상의 닉네임을 사용하여 채팅방에 들어갈 수 있다.

신입사원인 김크루는 카카오톡 오픈 채팅방을 개설한 사람을 위해, 다양한 사람들이 들어오고, 나가는 것을 지켜볼 수 있는 관리자창을 만들기로 했다. 채팅방에 누군가 들어오면 다음 메시지가 출력된다.

"[닉네임]님이 들어왔습니다."

채팅방에서 누군가 나가면 다음 메시지가 출력된다.

"[닉네임]님이 나갔습니다."

채팅방에서 닉네임을 변경하는 방법은 다음과 같이 두 가지이다.

채팅방을 나간 후, 새로운 닉네임으로 다시 들어간다.
채팅방에서 닉네임을 변경한다.
닉네임을 변경할 때는 기존에 채팅방에 출력되어 있던 메시지의 닉네임도 전부 변경된다.

예를 들어, 채팅방에 "Muzi"와 "Prodo"라는 닉네임을 사용하는 사람이 순서대로 들어오면 
채팅방에는 다음과 같이 메시지가 출력된다.

"Muzi님이 들어왔습니다."
"Prodo님이 들어왔습니다."

채팅방에 있던 사람이 나가면 채팅방에는 다음과 같이 메시지가 남는다.

"Muzi님이 들어왔습니다."
"Prodo님이 들어왔습니다."
"Muzi님이 나갔습니다."

Muzi가 나간후 다시 들어올 때, Prodo 라는 닉네임으로 들어올 경우 
기존에 채팅방에 남아있던 Muzi도 Prodo로 다음과 같이 변경된다.

"Prodo님이 들어왔습니다."
"Prodo님이 들어왔습니다."
"Prodo님이 나갔습니다."
"Prodo님이 들어왔습니다."

채팅방은 중복 닉네임을 허용하기 때문에, 
현재 채팅방에는 Prodo라는 닉네임을 사용하는 사람이 두 명이 있다. 
이제, 채팅방에 두 번째로 들어왔던 Prodo가 Ryan으로 닉네임을 변경하면 
채팅방 메시지는 다음과 같이 변경된다.

"Prodo님이 들어왔습니다."
"Ryan님이 들어왔습니다."
"Prodo님이 나갔습니다."
"Prodo님이 들어왔습니다."

채팅방에 들어오고 나가거나, 닉네임을 변경한 기록이 담긴 문자열 배열 record가 매개변수로 주어질 때, 
모든 기록이 처리된 후, 최종적으로 방을 개설한 사람이 보게 되는 메시지를 
문자열 배열 형태로 return 하도록 solution 함수를 완성하라.
  

record는 다음과 같은 문자열이 담긴 배열이며, 길이는 1 이상 100,000 이하이다.
다음은 record에 담긴 문자열에 대한 설명이다.
모든 유저는 [유저 아이디]로 구분한다.
[유저 아이디] 사용자가 [닉네임]으로 채팅방에 입장 - "Enter [유저 아이디] [닉네임]" (ex. "Enter uid1234 Muzi")
[유저 아이디] 사용자가 채팅방에서 퇴장 - "Leave [유저 아이디]" (ex. "Leave uid1234")
[유저 아이디] 사용자가 닉네임을 [닉네임]으로 변경 - "Change [유저 아이디] [닉네임]" (ex. "Change uid1234 Muzi")
첫 단어는 Enter, Leave, Change 중 하나이다.
각 단어는 공백으로 구분되어 있으며, 알파벳 대문자, 소문자, 숫자로만 이루어져있다.
유저 아이디와 닉네임은 알파벳 대문자, 소문자를 구별한다.
유저 아이디와 닉네임의 길이는 1 이상 10 이하이다.
채팅방에서 나간 유저가 닉네임을 변경하는 등 잘못 된 입력은 주어지지 않는다.
입출력 예

["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"]
["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."]
  */


function solution3(record) {
  let answer = [];
  const userList = {};

  const command = record.map((item) => item.split(' '));

  for ( let i = 0; i < record.length; i++ ) {
    if (command[i][0] === 'Enter' || command[i][0] === 'Change') {
      userList[command[i][1]] = command[i][2];
    }
  }

  for ( let j = 0; j < record.length; j++ ) {
    const nickName = userList[command[j][1]];

    if ( command[j][0] === 'Enter' ) {
      answer.push(`${nickName}님이 들어왔습니다.`);
    } else if ( command[j][0] === 'Leave' ) {
      answer.push(`${nickName}님이 나갔습니다.`);
    }
  }

  return answer;
}

// console.log(solution3(["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"]));


/* 
스트리밍 사이트에서 장르 별로 가장 많이 재생된 노래를 두 개씩 모아 베스트 앨범을 출시하려 합니다. 
노래는 고유 번호로 구분하며, 노래를 수록하는 기준은 다음과 같습니다.

속한 노래가 많이 재생된 장르를 먼저 수록합니다.
장르 내에서 많이 재생된 노래를 먼저 수록합니다.
장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록합니다.
노래의 장르를 나타내는 문자열 배열 genres와 
노래별 재생 횟수를 나타내는 정수 배열 plays가 주어질 때, 
베스트 앨범에 들어갈 노래의 고유 번호를 순서대로 return 하도록 solution 함수를 완성하세요.

genres[i]는 고유번호가 i인 노래의 장르입니다.
plays[i]는 고유번호가 i인 노래가 재생된 횟수입니다.
genres와 plays의 길이는 같으며, 이는 1 이상 10,000 이하입니다.
장르 종류는 100개 미만입니다.
장르에 속한 곡이 하나라면, 하나의 곡만 선택합니다.
모든 장르는 재생된 횟수가 다릅니다.

["classic", "pop", "classic", "classic", "pop"]
[500, 600, 150, 800, 2500]
[4, 1, 3, 0]
*/
function solution4(genres, plays) {
  const answer = [];
  const album = {};

  for ( let i = 0; i < genres.length; i++ ) {
    if ( !album[genres[i]] ) {
      album[genres[i]] = [];
    }
    album[genres[i]].push(i);
  }

  const uniqueGenres = [...new Set(genres)];
  const sortedGenres = uniqueGenres.sort((a, b) => {
    const sumA = album[a].reduce((acc, idx) => acc + plays[idx], 0);
    const sumB = album[b].reduce((acc, idx) => acc + plays[idx], 0);
    return sumB - sumA;
  });

  for ( let i = 0; i < sortedGenres.length; i++ ) {
    const genre = sortedGenres[i];
    const splitedGenre = album[genre].sort((a, b) => {
      if ( plays[b] === plays[a] ) return a - b;
      return plays[b] - plays[a];
    }).slice(0, 2);
    splitedGenre.forEach((el) => {
      answer.push(el);
    });
  }

  return answer;
}

/* 
신입사원 무지는 게시판 불량 이용자를 신고하고 처리 결과를 메일로 발송하는 시스템을 개발하려 합니다. 무지가 개발하려는 시스템은 다음과 같습니다.
각 유저는 한 번에 한 명의 유저를 신고할 수 있습니다.
신고 횟수에 제한은 없습니다. 서로 다른 유저를 계속해서 신고할 수 있습니다.
한 유저를 여러 번 신고할 수도 있지만, 동일한 유저에 대한 신고 횟수는 1회로 처리됩니다.
k번 이상 신고된 유저는 게시판 이용이 정지되며, 해당 유저를 신고한 모든 유저에게 정지 사실을 메일로 발송합니다.
유저가 신고한 모든 내용을 취합하여 마지막에 한꺼번에 게시판 이용 정지를 시키면서 정지 메일을 발송합니다.
다음은 전체 유저 목록이 ["muzi", "frodo", "apeach", "neo"]이고, k = 2(즉, 2번 이상 신고당하면 이용 정지)인 경우의 예시입니다.

유저 ID	유저가 신고한 ID	설명
"muzi"	"frodo"	"muzi"가 "frodo"를 신고했습니다.
"apeach"	"frodo"	"apeach"가 "frodo"를 신고했습니다.
"frodo"	"neo"	"frodo"가 "neo"를 신고했습니다.
"muzi"	"neo"	"muzi"가 "neo"를 신고했습니다.
"apeach"	"muzi"	"apeach"가 "muzi"를 신고했습니다.

각 유저별로 신고당한 횟수는 다음과 같습니다.

유저 ID	신고당한 횟수
"muzi"	1
"frodo"	2
"apeach"	0
"neo"	2
위 예시에서는 2번 이상 신고당한 "frodo"와 "neo"의 게시판 이용이 정지됩니다. 
이때, 각 유저별로 신고한 아이디와 정지된 아이디를 정리하면 다음과 같습니다.
유저 ID	유저가 신고한 ID	정지된 ID
"muzi"	["frodo", "neo"]	["frodo", "neo"]
"frodo"	["neo"]	["neo"]
"apeach"	["muzi", "frodo"]	["frodo"]
"neo"	없음	없음
따라서 "muzi"는 처리 결과 메일을 2회, "frodo"와 "apeach"는 각각 처리 결과 메일을 1회 받게 됩니다.
이용자의 ID가 담긴 문자열 배열 id_list, 각 이용자가 신고한 이용자의 ID 정보가 담긴 문자열 배열 report, 정지 기준이 되는 신고 횟수 k가 매개변수로 주어질 때, 
각 유저별로 처리 결과 메일을 받은 횟수를 배열에 담아 return 하도록 solution 함수를 완성해주세요.
*/

function solution5(id_list, report, k) {
  const answer = new Array(id_list.length).fill(0);
  const reportCnt = new Object();
  const completeCnt = new Object();

  id_list.forEach(( id ) => {
    reportCnt[id] = 0;
  });

  report = [...new Set(report)];

  report.forEach(( reportItem ) => {
    const item = reportItem.split(' ');
    if ( !completeCnt[item[0]] ) completeCnt[item[0]] = new Array();
    completeCnt[item[0]].push(item[1]);
    reportCnt[item[1]]++;
  });

  id_list.forEach(( id, idx ) => {
    if ( !completeCnt[id] ) return;
    completeCnt[id].forEach(( cntId ) => {
      if ( reportCnt[cntId] >= k ) answer[idx]++;
    });
  });

  return answer;
}

console.log(solution5(["muzi", "frodo", "apeach", "neo"], ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"], 2)); // [2,1,1,0]
console.log(solution5(["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 3)); // [0,0]
