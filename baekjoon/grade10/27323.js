///dev/stdin
var fs = require('fs');
var input = fs
    .readFileSync('./input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(function (el) { return parseInt(el); });
console.log(input[0] * input[1]);
