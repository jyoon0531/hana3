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

type A1 = [string, number, string];

type B1 = [boolean, ...A1];

const a1: A1 = ["str", 1, "B"];
const b1: B1 = [true, ...a1];

// array ==> tuple ==> union
// const bts = ["A", "B", "O", "AB"] as const;
type BTS = ["A", "B", "O", "AB"];
const bts: BTS = ["A", "B", "O", "AB"];

type BT<T extends unknown[]> = T[number];

const bloodType: BT<BTS> = "AB";

type Reading = { page: number };
type Writing = { title: string };
type ReadWrite = Reading | Writing;

const x1: ReadWrite = { title: "aaa" };
const x2: ReadWrite = { title: "aaa", page: 1 };
const x3: ReadWrite = { page: 1 };

x1.title;
// x2.page = 9;
// x2[page]

interface User2 {
  id: number;
  name: string;
}

interface Dept {
  id: number;
  dname: string;
  captain: string;
}

// interface Ud2 extends Partial<User>, Partial<Dept>{
//   addr: string;
// }

interface Ud2 {
  // <이 부분을 작성하시오>
  [key: string]: string | number;
  id: number; // 필수값을 작성해줘야 함!
  addr: string;
}

// type  Ud2 = (User | Dept) & {addr : string}

const ud2: Ud2 = { id: 1, name: "HH", addr: "Seoul" };
const ud3: Ud2 = { id: 1, dname: "HH", captain: "HH", addr: "Seoul" };
