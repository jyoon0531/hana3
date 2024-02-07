console.log("Hello, Typscript!");

type User = {
  id: number;
  name: string;
};

const s: string = "abc";
let i = 1;

const hong: User = { id: 1, name: "Hong" };
const kim: User = { id: 1, name: "Kim" };

// console.bulb("No Pain, No Gain !!");

let rapper = "Tom";
rapper.length; // OK

// rapper.push('!');

type TUser = {
  id: number;
  name: string;
};

type TUser2 = {
  id: number;
  name: string;
  addr?: string;
};

// const hong: TUser = { id: 1, name: "Hong", addr: "Pusan" };
const lee: TUser2 = { id: 1, name: "Hong", addr: "Pusan" };

let tmpUser: TUser = lee;
let partner: TUser = { ...lee, id: 2, name: "Kim" };
// let partner2: TUser = { ...hong, id: 3, addr: "Daejeon" };
let friend: TUser = { ...lee };
const xxx = { id: 9, addr: "Sokcho" };
// let friend2: TUser = { ...xxx, id: 8 };
