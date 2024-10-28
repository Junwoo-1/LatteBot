var a = 1;
let b = 2; // 가장 일반적인 변수 선언
const c = 3; // 상수


// 함수
function myFunc(x) {
    let tmp = x + 5;
    return tmp;
}


myFunc(8) // 8 + 5 = 13

// 함수의 또다른 정의방법 함수명 = ( 인자 ) => { 함수내용 }
addNum = (x , y) => { return x + y; };
addNum(5,8) // 5 + 8 = 13

// 익명함수
((x,y) => {return x + y;})(2,3);

// 조건문
if( x > 500 ) {
    console.log("500이상")
} 
else if (x > 300) {
    console.log("300이상 500미만")
}
else {
    console.log("300미만")
}

// 반복문 
for (let a = 1; a < 11; a=a+1) {
    console.log(a+"번 실행")
} // for 반복

let a = 1
while(a<11) {
    console.log(a+"번 실행");
    a = a+1
}
 // while 반복

myArray = [1,2,3,4,5,10,20,100];
myArray.forEach(x => {
    console.log(x);
}); // array 반복