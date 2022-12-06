'use strict';

// a e i o u 
let str = "hello world";
// let arr = [...str];
let a = 'aeiou';
let arr = str
.split('')
.filter(el => !(a.includes(el))) // return 할 때 조건을 고를 수 있음 
// () => return값  ======> 보통은 이렇게 가! 
// () => { return을 써준다. } 
.join('')
console.log(arr);