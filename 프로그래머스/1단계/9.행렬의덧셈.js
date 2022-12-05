'use strict';


// 할 수 있는데 더 좋은 방법을 찾기위해 못 하고있음.
// 2차월에서 1차원 배열만들기 => flat함수! 

// arr[0][0] + arr2[0][0] => 값을 return해서 Push한다.
// 일단은 2중 반복문 써서 해보자! 

// 2중 반복문을 사용! 
let star = ""
for(let i = 0; i < 3; i++){
    for(let j = 0; j < 5; j ++){
        star += "*";
    }
    star += "\n";
}
console.log(star);