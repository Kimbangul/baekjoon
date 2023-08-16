///dev/stdin
export const fs = require('fs');
const input = fs
.readFileSync('./input.txt')
.toString()
.trim()
.split('\n')
.map((el : string) => el.split(' ').map((num : string)=>parseInt(num)))
;

const x = input.slice(1, input.length).map((el:number[])=>el[0]);
const y = input.slice(1, input.length).map((el:number[])=>el[1]);

const length = {
  x: Math.max(...x) - Math.min(...x),
  y: Math.max(...y) - Math.min(...y)
}

console.log(length.x * length.y)