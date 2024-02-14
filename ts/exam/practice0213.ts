const isStringNumber = (value: unknown): value is [string, number] =>
  Array.isArray(value) &&
  typeof value[0] === "string" &&
  typeof value[1] === "number";

const f1 = (value: number | string | boolean | [string, number]) => {
  if (isStringNumber(value)) {
    console.log(value[0].toUpperCase(), value[1].toFixed());
  }
};

interface Animal {}

interface Dog extends Animal {
  name: string;
}

interface Cat extends Animal {
  punch(): void;
}

class Retriever implements Dog {
  constructor(public name: string) {
    this.name = name;
  }
}

function isDog(a: Animal): a is Dog {
  // return a instanceof Retriever;
  return "name" in a && !("punch" in a);
}

const cart = {
  X: 1,
  Y: 2,
  Z: 3,
};

type T1 = "X" | "Y" | "Z";
type T2 = keyof typeof cart;

const constCart = {
  X: 1,
  Y: 2,
  Z: 3,
} as const;

type T3 = 1 | 2 | 3;
type T4 = (typeof constCart)[keyof typeof constCart];

interface IUser {
  id: number;
  age: number;
  name: string;
}

interface IDept {
  id: number;
  age: string;
  dname: string;
  captain: string;
}

type Change<T, K extends keyof T, U> = {
  [k in keyof T]: k extends K ? U : T[k];
};
type DeptCaptain = Change<IDept, "captain", IUser>;
// type Err = Change<IDept, 'somekey', IUser>; // Error!!!

type Item = { item: string; price: number };
type ItemPrice<T, U> = {
  [k in keyof T]: k extends "item" ? keyof U : T[k];
};

const stock = { X: 1, Y: 2, Z: 30 };

const itemPrices: ItemPrice<Item, typeof stock>[] = [
  { item: "X", price: 1000 },
  { item: "Y", price: 2000 },
  { item: "Z", price: 3000 },
];

const total = itemPrices.reduce(
  (curr, itemPrice) => curr + stock[itemPrice.item] * itemPrice.price,
  0
);
