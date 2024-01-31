const arr = [1, 2, 3];
console.log("🚀 ~ arr:", { ...arr });
console.log("🚀 ~ arr:", arr.entries());
console.log("🚀 ~ arr:", arr.length);

// arr.length = 5; // [ 1, 2, 3, <2 empty items> ]
console.log("🚀 ~ arr:", arr);

// arr.length = 2; // [ 1, 2 ]
console.log("🚀 ~ arr:", arr);

const a = Array(3);
console.log("🚀 ~ a:", a);

const a2 = Array(5).fill(1);
a2.fill("X", 1);
a2.fill("Z", 2, 4); // 2 이상 4 미만 (2, 3)
console.log("🚀 ~ a2:", a2);

const ar3 = Array.from(arr);
console.log("🚀 ~ ar3:", ar3);
arr[1] = 22;
console.log("🚀 ~ arr:", arr);
console.log("🚀 ~ ar3:", ar3); // shallow copy

const ar4 = Array.from([...arr, 4, 5]);
console.log("🚀 ~ ar4:", ar4);

const ar44 = Array.from(Array(5), (_, i) => i + 1);
console.log("🚀 ~ ar44:", ar44);

const ar5 = Array.from(Array(5).keys()); // keys() -> index값을 준다, values(), entries()
console.log("🚀 ~ ar5:", ar5);

// const ar6 = Array(5).map((_, i) => i + 1);
const ar6 = [...Array(5)].map((_, i) => i + 1); // [...Array(5)] = [undefined, undefined, undefined, undefined, undefined]
console.log("🚀 ~ ar6:", ar6);

console.log("--------------------------");
const stack = [];
stack.push(1);
stack.push(2, 3);
console.log("🚀 ~ stack:", stack);
console.log("🚀 ~ stack.pop:", stack.pop());
stack.length = 0;
stack.unshift(1);
stack.unshift(3, 2);

console.log("🚀 ~ stack:", stack);
console.log("🚀 ~ stack.shift:", stack.shift());

console.log("--------------------------");
const queue = [];
queue.push(1);
queue.push(2, 3);
console.log("🚀 ~ queue:", queue);
console.log("🚀 ~ queue.out:", queue.shift());
queue.length = 0;
queue.unshift(1);
queue.unshift(3, 2);
console.log("🚀 ~ queue:", queue);
console.log("🚀 ~ queue.out:", queue.pop());

console.log("--------------------------");
const orr = [{ id: 1 }, { id: 2 }, { id: 1 }];
const idx1 = orr.findIndex((item) => item.id === 1);
console.log("🚀 ~ idx1:", idx1);
const idx2 = orr.findLastIndex((item) => item.id === 1);
console.log("🚀 ~ idx2:", idx2);

for (const item of orr) console.log(item);
for (const [item, idx] of orr.entries()) console.log(item, idx);
orr.forEach((item, idx) => console.log(idx, item)); // entries 보다 forEach가 더 낫다

const aa = [1, 2, 3];
console.log(aa.join(","));
delete aa[2];
console.log("🚀 ~ aa1:", aa);
aa["a"] = "AAA";
console.log("🚀 ~ aa2:", aa);

// args [3, 33]
// args [[5, 55]]
const a22 = [2, 22];
function myConcat(...args) {
  const argsArr = Array.isArray(args[0]) ? args[0] : args;
  return [...a22, ...argsArr];
}

const a22_1 = myConcat(3, 33);
console.log("🚀 ~ a22_1:", a22_1);
const a22_2 = myConcat([5, 55]);
console.log("🚀 ~ a22_2:", a22_2);

console.log("--------------------------");
const a5 = [1, 5, 4, 11, 7];
console.log("🚀 ~ a5.reverse:", a5.reverse());
console.log("🚀 ~ a5:", [...a5].sort());
console.log(
  "🚀 ~ a5-sort-fn:",
  a5.sort((a, b) => {
    console.log("a, b = ", a, b);
    // return a > b ? -1 : 1;
    // return a - b;
    return b - a;
  })
);
// console.log("🚀 ~ a5:", a5);

const a6 = ["Kim", "Lee", "Hong"];
console.log("🚀 ~ a6:", a6.sort());

users = [
  { id: 1, name: "Hong" },
  { id: 20, name: "Kim" },
  { id: 3, name: "Lee" },
];
console.log(users.sort((a, b) => a.id - b.id));

arr2 = [1, 2, 3, 4, 5];
// console.log(arr2.slice(1, 3));
// console.log(arr2.slice(1, -2));
// console.log(arr2.slice(-4, -2));

console.log(arr2.splice(1, 3));
console.log("arr2>>", arr2);
console.log(arr2.splice(1, 0, 2, 3, 4)); // 자른 게 없음, 복원
console.log("arr2>>", arr2);
console.log(arr2.splice(2));
console.log("arr2>>", arr2);
console.log(arr2.splice(2, 0, 3, 4, 5));
console.log("arr2>>", arr2);

console.log("--------------------------");
// ex1) [2,3]을 추출
const ex1 = arr2.slice(1, 3);
console.log("🚀 ~ ex1:", ex1);

// ex2) [3]부터 모두 다 추출
const ex2 = arr2.slice(2);
console.log("🚀 ~ ex2:", ex2);

// ex3) [2,3,4] 제거하기
const ex3 = arr2.splice(1, 3);
console.log("🚀 ~ ex3:", ex3);
console.log("🚀 ~ arr2:", arr2);

// ex4) 복원하기
arr2.splice(1, 0, ...ex3);
console.log("🚀 ~ ex4:", arr2);

// ex5) [3] 부터 끝까지 제거하기
const ex5 = arr2.splice(2);
console.log("🚀 ~ ex5:", arr2, ex5);

// ex6) 복원하기
arr2.splice(2, 0, ...ex5);
console.log("🚀 ~ ex6:", arr2);

// ex7) [1,2, 'X', 'Y', 'Z', 4, 5] 만들기
const ex7 = [...arr2];
ex7.splice(2, 1, "X", "Y", "Z");
console.log("🚀 ~ ex7:", ex7);

// ex8) 위 7번 문제를 splice를 사용하지 말고 작성하시오.
const ex8 = [...arr2.slice(0, 2), "X", "Y", "Z", ...arr2.slice(3)];
console.log("🚀 ~ ex8:", ex8);

console.log("🚀 ~ arr2:", arr2);
console.log("🚀 ~ arr2:", arr2.toSpliced(2, 2));
console.log("🚀 ~ arr2:", arr2);

console.log("--------------------------");
let sum1 = 0;
for (let item of arr) sum1 += item;
console.log("🚀 ~ sum1:", sum1);
const sum2 = arr.reduce((sum, item) => sum + item, 0);
// sum = 0
// item = 1 ==> 0 + 1 ==> sum(1)
// item = 22 ==> 1 + 22 ==> sum(23)
// item = 3 ==> 23 + 3 ==> sum(26)
// sum2 = 26
console.log("🚀 ~ sum2:", sum2);

console.log("--------------------------");
const namestr = users.reduce((acc, item) => `${acc} ${item.name}`, "");
console.log("🚀 ~ namestr:", namestr);

const objs = [{ id: 1 }, { name: "Hong" }, { addr: "Seoul", id: 5 }];
const result = objs.reduce((acc, item) => ({ ...acc, ...item }), {});
console.log("🚀 ~ result:", result);
