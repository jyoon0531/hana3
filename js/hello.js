// primitove(call-by-value -> stack에 value값) vs object(call-by-reference -> stack에 객체 참조값이 있다)
const userName = "Hong"; // string (primitive)
let age; // declare + define (undefined) 메모리에 할당이 되었는데 undefined라고
console.log("🚀 ~ age:", age);
age = 33; // 정의
// const, var(가능하면 쓰지 않는다), let
console.log(`Hello, ${userName}!`);
