//함수란 입력을 받아서 정해진 출력을 하는 것
//함수의 입력을 파라미터 또는 인자arguments 라고 한다. 
//js 에서 함수를 정의하는 방식 2가지 
//1. function statement 
function sum(a , b) {
    return a + b; 
};

console.log(sum(10, 20));
//출력결과 : 30

//2. arrow function expression 
function multiply = (a , b) => {
    return a * b;
};

console.log(multiply(10, 20));
//출력결과 : 200
