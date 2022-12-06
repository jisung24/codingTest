'use strict';
let a = 10; 
console.log(Math.sqrt(a)); // sqrt루트! => class인데 접근할 수 있다? => static method지?? ㅇㅋ이해함. 
console.log(Math.pow(a,2)); // pow(a,b) : a를 b제곱한다. 

a = 100; // 어떤 자연수를 제곱했을 때 나온 수를 제곱수라고 하는데, 어떤 정수가 제곱수인지 아닌지를 판단하자! 
if(Number.isInteger(Math.sqrt(a))){
    console.log('제곱수 맞아요!');
}else{
    console.log('아닙니다.!');
}