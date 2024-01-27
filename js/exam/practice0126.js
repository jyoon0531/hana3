for (let i = 0.1; i < 1; i += 0.1) {
  // console.log(Math.round(i * 100) / 100);
  console.log(+i.toFixed(1));
}

function getCharLength(x) {}

function addPoints(a, b) {
  // const alen = a.toString().length;
  // const blen = b.toString().length;
  // const len = alen > blen ? alen : blen;

  const len = Math.max(a.toString().length, b.toString().length);
  const ret = +(a + b).toFixed(len - 2);
  console.log("ret: ", ret);
}

addPoints(0.21354, 0.1); // 0.31354
addPoints(0.14, 0.28); // 0.42
addPoints(0.34, 0.226); // 0.566

const user = { id: 1, name: "Hong", passwd: "xxx", addr: "Seoul" };
const { passwd, ...userInfo } = user;
console.log(userInfo);

const arr = [[{ id: 1 }], [{ id: 2 }, { id: 3 }]];
const [[{ id: id1 }], [{ id: id2 }, { id: id3 }]] = arr;
console.log(id1, id2, id3);
