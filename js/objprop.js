const user = {
  "": 1,
  " ": 1, // 'id': 1, '0y': 2 모두 OK!
  123: 1, // user[123], user['123'] OK, but user.123 is SyntaxError!!
  12345n: 2, // user[12345], user[12345n], user['12345'] OK, but user['12345n'] is undefined!
  true: 1, // OK  user[true]  user.true
  id: 2,
  [`name`]: "Hong", // But, `name`: 'Hong'은 SyntaxError: Unexpected template string!
  [Symbol()]: "Hong", // OK But, Symbol(): 'Hong'은 SyntaxError: Unexpected token ':'
  [`${new Date()}`]: 365, // OK! 'Sun Jul …': 365
  "my-friends": ["Han", "Kim"],
  getInfo: () => `${this.id}-${this.name}`, // OK! But, this is not user!
  getInfo() {
    return `${this.id}-${this.name}`;
  }, // OK! getInfo의 최종 <f.o>
};

console.log(Object.keys(user), Object.keys(user).length); // keys & 15, Symbol은 제외!!

console.log(Reflect.ownKeys(user), Reflect.ownKeys(user).length); // keys & 16 (+Symbol)

user.addr = "Seoul"; // ⇐⇒ user = {...user, addr: 'Seoul'}
console.log("addr" in user, user.hasOwnProperty("addr")); // true true
console.log("Ref.has>", Reflect.has(user, "addr")); // true
console.log("obj.getOwnPropSym>", Object.getOwnPropertySymbols(user)); // [ Symbol() ]

delete user.addr; // ⇔ Reflect.deleteProperty(user, 'addr');
console.log("addr" in user); // false

user[`${user.id}'s name`] = `Mr. ${user.name}`; // prop생성시 snapshot!!(id 변해도 고정)
console.log("user entries=", Object.entries(user)); // Symbol은 제외!!

function myEntries(obj) {
  const rets = []; // [ [k, v], [k, v], ... ]
  //   for (let k in obj) {
  for (let k of Reflect.ownKeys(obj)) {
    console.log(k);
    rets.push([k, obj[k]]);
  }
  return rets;
}

// myEntries(user);
console.log("myEntries>>", myEntries(user));
console.log(Object.getOwnPropertyDescriptor(user, "id"));
console.log("--------------------------------------------");
console.log(Object.getOwnPropertyDescriptor(user, "id"));
