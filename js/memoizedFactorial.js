let runCnt = 0;
// O(N)
function factorialBeforeMemoization(n) {
  // function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

// O(logN)
const memoizedTable = {}; // 비순수함수
function factorial(n) {
  runCnt += 1;
  if (n === 3) return 1;
  return memoizedTable[n] || (memoizedTable[n] = n * factorial(n - 1));
}

const f3 = factorial(3);
console.log("🚀 ~ f3:", f3, runCnt);
runCnt = 0;

const f5 = factorial(5);
console.log("🚀 ~ f5:", f5, runCnt);
runCnt = 0;

console.log("-------------------");

function memoized(fn) {
  const memoizedTable = {};
  return function (k) {
    return memoizedTable[k] || (memoizedTable[k] = fn(k));
  };
}

const memoizedFactorial = memoized(function (n) {
  runCnt += 1;
  if (n === 1) return 1;
  return n * memoizedFactorial(n - 1);
});

const mf3 = memoizedFactorial(3);
console.log("🚀 ~ mf3:", mf3, runCnt);
runCnt = 0;
const mf5 = memoizedFactorial(5);
console.log("🚀 ~ mf5:", mf5, runCnt);
runCnt = 0;
const mf10 = memoizedFactorial(10);
console.log("🚀 ~ mf10:", mf10, runCnt);
