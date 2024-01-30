//나중에는 arrow function으로 작성
function memoized(fn) {
  const cache = {};
  return function (k) {
    return cache[k] || (cache[k] = fn(k));
  };
}

const memoFibo = memoized(function (n) {
  // if(n < 2) return n;
  // return memoFibo(n-2) + memoFibo(n-1);
  return n < 2 ? n : memoFibo(n - 2) + memoFibo(n - 1);
});

console.log(memoFibo(5));
console.log(memoFibo(7));
