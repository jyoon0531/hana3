const arr = [100, 200, 300, 400, 500, 600, 700];

for (let k in arr) {
  console.log(k);
}

for (let k in arr) {
  console.log(arr[k]);
}

const obj = { name: "lim", addr: "Yongsan", level: 1, role: 9, receive: false };

const arr2 = [
  ["A", 10, 20],
  ["B", 30, 40],
  ["C", 50, 60, 70],
];

// const obj = Object.fromEntries(arr2);

function makeObjectFromArray(arr) {
  const newObj = {};
}

makeObjectFromArray(arr2);

// console.log(obj)

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
