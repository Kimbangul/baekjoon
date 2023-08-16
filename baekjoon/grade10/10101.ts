///dev/stdin
export const fs = require('fs');
const input : number[] = fs
.readFileSync('./input.txt')
.toString()
.trim()
.split('\n')
.map((el : string) => parseInt(el))
;

const angle = [input[0], input[1], input[2]];

const sum = input.reduce((prev : number, cur: number) => {
  return prev + cur;
}, 0);

function getIsEquilateral (angle: number[]) {
  for (let i = 0; i<angle.length; i++){
    if (angle[i] !== 60){
      return false
    } 
  }
  return true
}

function getIsIsosceles(angle: number[]){
  const dupAngle = [...new Set(angle)];
  console.log(dupAngle);
  if (dupAngle.length === 2){
    return true
  } else{
    return false
  }
} 

if (sum !== 180) {
  console.log('Error')
} else if (getIsEquilateral(angle)){
  console.log('Equilateral')
} else if (getIsIsosceles(angle)){
  console.log('Isosceles')
} else{
  console.log('Scalene')
}