///dev/stdin
export const fs = require('fs');
const input : number[][] = fs
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el: string) => el.split(' ').map((num: string) => parseInt(num)));


  const verX = input.map((ver:number[]) => ver[0]);
  const verY = input.map((ver:number[]) => ver[1]);

  const x = verX.filter((el) => verX.indexOf(el) === verX.lastIndexOf(el))[0];
  const y= verY.filter((el) => verY.indexOf(el) === verY.lastIndexOf(el))[0];

console.log(`${x} ${y}`)