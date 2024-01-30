// function hello(name) {  // 함수 선언식
// const hello = function (name) {
function hello() {
  const [, name] = arguments; // ['hong', 'kim']
  console.log(`Hello, ${name}!`, arguments);
  return `Hello, ${name}!`;
}

// hello("Hong");
hello("hong", "kim");
const hi = hello;
hi("Kim");
console.log(">>", hi.length, hi.name); // function의 length는 arguments의 길이

function printFnReturnValue(...args) {
  // 펼쳐서 배열로, arguments가 가변일 때 arguments 객체로 받아서 쓰지 않고 펼쳐서 배열로
  console.log(args);
  const [fn, nm] = args;
  console.log("printFnReturn>>>", fn.name, fn(nm));
}

printFnReturnValue(hi, "Lee");

console.log("-----------------------");

function f(n) {
  if (n.hasOwnProperty("id")) n.id += 1;
  else n += 1;
}

let n = 10;
let nobj = { id: 10 };
f(n); // call by value
f(nobj); // call by reference
console.log(n, nobj);

console.log("-----------------------");
function ff(a) {
  return a + 100;
}
function ff(a, b) {
  return a + b;
}
// overLoading 안된다.
console.log(ff(10)); // NaN
console.log(ff(10, 20)); // 30

(function () {
  console.log("IIFE");
})(); // 즉시 호출 함수(Immediately Invoked Functionn Expression)

// iif();
