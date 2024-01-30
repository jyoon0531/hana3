// 연습문제 1
const arr = [100, 200, 300, 400, 500, 600, 700];

for (let k in arr) {
  console.log(k);
}

for (let k in arr) {
  console.log(arr[k]);
}

const obj = { name: "lim", addr: "Yongsan", level: 1, role: 9, receive: false };

for (let k in obj) {
  console.log("key: ", k);
  console.log("value: ", obj[k]);
}

// for (const [key, value] of Object.entries(obj)) {
//   console.log("value: ", value);
// }

for (let k of Object.keys(obj)) {
  console.log(k);
}

Object.defineProperty(obj, "level", { enumerable: false });
console.log(Object.entries(obj));

Object.defineProperty(obj, "role", { writable: false });
obj.role = "xxxxx";
console.log("role>>", obj.role);

// 연습문제 2
const arr2 = [
  ["A", 10, 20],
  ["B", 30, 40],
  ["C", 50, 60, 70],
];

function makeObjectFromArray(arr) {
  const newObj = {};
  for (const [key, ...value] of arr) {
    newObj[key] = value;
  }
  return newObj;
}

function makeArrayFromObject(obj) {
  // const newArr = Object.entries(obj);
  // for (let k in newArr) {
  //   newArr[k] = newArr[k].flat();
  // }
  const newArr = [];
  for (const k in obj) {
    newArr.push([k, ...obj[k]]); // 대괄호 없애기 위해 spread
  }

  return newArr;
}

console.log(makeObjectFromArray(arr2));
const objBefore = makeObjectFromArray(arr2);
console.log(makeArrayFromObject(objBefore));

// 연습문제 3
function copyObject(obj) {
  const newObj = {};
  for (const k in obj) {
    newObj[k] = obj[k];
  }
  return newObj;
}

const kim = { nid: 3, nm: "Hong", addr: "Pusan" };
const newKim = copyObject(kim); // shallow copy
newKim.addr = "Daegu";
console.log(kim.addr !== newKim.addr); // true면 통과!
