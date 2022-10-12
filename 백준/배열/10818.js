'use strict';
// 첫째 줄에 주어진 정수 N개의 
// 최솟값과 최댓값을 공백으로 구분해 출력한다.
const input = require('fs').readFileSync('test.txt').toString().split('\n');
// 쉽게 얘기해서 문자열을 \n기준으로 2개의 배열로 만든게 input이야! 
const testCase = Number(input[0]); //tesdtCase 
const arr = input[1].split(' ').map((value) => Number(value))

function solution(testCase, arr){
    return Math.min(...arr) + " " + Math.max(...arr);
}

console.log(solution(testCase, arr))