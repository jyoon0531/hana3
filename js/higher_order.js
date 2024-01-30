const f1 = (f, val) => f(val);
f1(console.log, "f1");
f1(console.log, "abc");

function fx1(a) {
  return a ** 2;
}

console.log(f1(fx1, 2));

const f2 =
  (f) =>
  (...args) =>
    console.log(f.name, f(...args));

f2(Math.max)(1, 3, 2, 5, 4);
console.log("-----------------");
f2(console.log)("asd", "asdasd");

const arr = [1, 2, 3];
arr.map((a, i, arr) => {
  console.log(a, i, arr);
});

// console.log(console.log("asd", "asdasd"));

// map( function(item, idx, this) {})
// function parseInt(str) ==> number
// const arr2 = ["1", "2", "3"];
const arr2 = new Array("1", "2", "3");

Array.prototype.mapX = function (f) {
  // 화살표 함수로 표현하면 error => this가 달라짐!
  const result = [];
  for (let i = 0; i < this.length; i += 1) {
    result.push(f(this[i], i, this));
  }
  return result;
};

const rets = arr2.mapX(parseInt);
const ret2 = arr2.mapX((item) => parseInt(item));

const unary = (fn) => (fn.length === 1 ? fn : (arg) => fn(arg)); // 인자를 1개만 이용하는 함수로 만들기
// parseInt('1', 0, ['1', '2', '3'])
// parseInt('2', 1, ['1', '2', '3'])
// parseInt('3', 2, ['1', '2', '3'])
console.log(rets); // [ 1, NaN, NaN ]
console.log(ret2); // [1, 2, 3]
console.log(arr2.map((item) => parseInt(item))); // [1, 2, 3]
