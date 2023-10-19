// /dev/stdin
const fs = require('fs');
var input = fs.readFileSync('./input.txt').toString().split('\n').map((el:string) => parseInt(el));

let result : string = '';
const list : number[] = input.slice(1);

const sortedList = list.sort((a,b)=>a-b);
sortedList.forEach((el) => {
  result+=el+'\n';
});

console.log(result.trim());