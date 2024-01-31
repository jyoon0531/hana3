function once(f, thisValue) {
  let didRun = false;

  return function (...args) {
    // return didRun ? f(...args) : (didRun = true);
    // return f.bind(thisValue)(...args);
    // return f.apply(thisValue || this, args)
    if (didRun) return;
    // didRun = true;
    // return f.apply(this, args);  // binding -> 확장성을 더 주기 위해서
    return (didRun = true), f.apply(this, args);
  };
}

const thisObj = { id: 100 };

function f(x, y) {
  return `금일 운행금지 차량은 끝번호 ${x}, ${y}입니다! ${this.id}`;
}

const fn = once(f);
// console.log(f.call(thisObj, 1, 6));
// console.log(fn.call(thisObj, 1, 6));
console.log(fn.bind(thisObj)(1, 6)); // 금일 운행금지 차량은 끝번호 1, 6입니다!
// console.log(fn(1, 6)); // undefined
console.log(fn(2, 7)); // undefined
// console.log(fn(3, 8)); // undefined
