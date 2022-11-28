'use strict';
// << stack >> 
// - 배열을 넣는데, 나중에 넣은 data가 나중에 나오는 data! 
// - Last In First Out (마지막에 넣은 data가 먼저 나오는 data구조!)
// - 
class Stack {
    constructor() {
        this.arr = [];
        // field에 배열이 하나 생성이 된다.
    }

    // 1. push : stack에 data 삽입
    push = (value) => {
        this.arr.push(value);
        return this.arr; // push를 하고 난 후의 배열을 return한다. 
    }

    // 2. pop : 가장 먼저 들어온 data를 빼주는 함수. 
    pop = () => {
        if(this.arr.length === 0){
            this.isEmpty();
        }else{
            this.arr.pop();
            return this.arr;
        }
    }

    isEmpty = () => {
        console.log('stack이 비었습니다.')
    }
}

const stack1 = new Stack(); 
console.log(stack1.push("김지성"));
console.log(stack1.push("김동선"));
console.log(stack1.pop());
console.log(stack1.pop());
console.log(stack1.pop());