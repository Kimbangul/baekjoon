// /dev/stdin
const fs = require('fs');
var input = fs.readFileSync('./input.txt').toString().split('\n').map((el:string) => parseInt(el));

const n = input[0];
input.splice(0, 1);
console.log(input)
const max = Math.max(...input);
let newArr = Array(max).fill(0);
console.log(newArr);
let count = 0;


for (let i = 0; i <= max; i++) {
  for (let j = 0; j < input.length; j++) {
    if (input[j] === i) {
      count++;
    }
  }
  newArr[i] = count;
  console.log(newArr);
  if (count !== 0) {
    for (let k = 0; k < newArr[i]; k++) {
      console.log(i);
    }
  }
  count = 0;
}

// let result : string = '';
// const list : number[] = input.slice(1);
// let result : string = '';
// const list : number[] = input.slice(1);

// const sortedList = list.sort((a,b)=>a-b);
// sortedList.forEach((el) => {
//   result+=el+'\n';
// });

// console.log(result.trim());

