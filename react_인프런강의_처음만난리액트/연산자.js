//Assignment operator 대입 연산자
//대입 연산자는 오른쪽에서 왼쪽반향으로 흐름이 흘러간다. 
// =의 오른쪽에 있는 값을 왼쪽에 대입시킨다. 

let a = 10;
let b = 20;

console.log(a);
//출력 결과 : 10

console.log(b);
//출력 결과 : 20

//산술 연산자 
let x = 2;
let y = 4;

x += y; //x = x + y
console.log(x);
//출력 결과: 6

x *= y; //x = x * y
console.log(x);
//출력 결과: 24

//증가 연산자(++) / 감소 연산자(--)
//증감 연산자 
//postfix 방식 : a++ 증감전의 값을 반환하고 이후에 변수의 값이 증감된다. 
//prefix 방식 : ++a 먼저 변수의 값을 증감시키고 이후 증감된 변수의 값을 반환한다. 
let a = 1;
let b = a++; 

console.log(a, b);
// 출력 결과 : 2, 1 

let c = 1;
let d = ++c;

console.log(c, d);
// 출력 결과 : 2, 2

//관계연산자 (비교연산자) 부등호 사용
//동등연산자 
a == b //a와 b가 같다. 
a != b //a가 b와 같지 않다. 

//일치 연산자 
a === b //a와 b의 자료형과 값이 모두 같다. 
a !== b //a와 b의 자료형이나 값이 같지 않다. 

//이진 논리 연산자
a && b //a와 b가 모두 true일 경우에만 true
a || b //a 또는 b가 true일 경우에만 true

//삼항 연산자 
//조건식 ? 조건식이 true일경우 : 조건식이 false일 경우


