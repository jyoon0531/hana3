const assert = require("assert");

const hong = { id: 1, name: "Hong" };
const choi = { id: 5, name: "Choi" };
const kim = { id: 2, name: "kim" };
const lee = { id: 3, name: "Lee" };
const park = { id: 4, name: "Park" };
const users = [kim, lee, park];

const addUser = (user) => [...users, user];
const removeUser = (user) => users.filter((_user) => user.id !== _user.id);
const changeUSer = (oldUser, newUser) =>
  users.map((_user) => (_user.id === oldUser.id ? newUser : _user));
console.log(users);
console.log("add>>", addUser(hong));
console.log("remove>>", removeUser(lee));
console.log("change>>", changeUSer(kim, choi));

const arr2 = [1, 2, 3, true];
const ret1 = arr2.map((item) => item.toString());
assert.deepStrictEqual(ret1, ["1", "2", "3", "true"]);

// const classNames = (...args) =>
//   args.reduce((acc, item) => `${acc}${acc && item ? " " : ""}${item}`, "");
const classNames = (...args) =>
  args.reduce((acc, item) => `${acc}${acc && item && " "}${item}`, "");
const ret2 = classNames("", "a b c", "d", "", "e");
assert.strictEqual(ret2, "a b c d e");

const arr = [1, 2, 3, 4, 5];

const square = (n) => n ** 2;
const cube = (n) => n ** 3;
// const sqrt = (n) => Math.sqrt(n);
const sqrt = Math.sqrt;

const ret3 = arr
  .map(square)
  .map(sqrt) // (a) => f(a) <=> fn
  .map(cube);
console.log("🚀 ~ ret3:", ret3);

const ret3_2 = [square, sqrt, cube].reduce((acc, f) => f(acc), 2);
const bp1 = (n) => [square, sqrt, cube].reduce((acc, f) => f(acc), n); // 배열 안 함수의 순서를 변경할 수 있음!

console.log("🚀 ~ ret3_2:", ret3_2, bp1(2));
// const ret_3 = arr.map((item) => bp1(item));
const ret3_3 = arr.map(bp1);
console.log("🚀 ~ ret_3:", ret3_3);

const bpm = (fns, n) => fns.reduce((acc, f) => f(acc), n);
const ret3_4 = bpm([square, sqrt, cube], 2);
console.log("🚀 ~ ret3_4:", ret3_4);
