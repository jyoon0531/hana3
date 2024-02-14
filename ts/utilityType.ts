type User = { id: number; name: string; age: number };

// type UserProfile = Omit<User, 'age'> & {addr: string};
interface UserProfile extends Omit<User, "age"> {
  addr: string;
}
let iUser: UserProfile = { id: 1, name: "Hong", addr: "Seoul" };

let users = [{ name: "Hong" }, { age: 23 }, { id: 1, addr: "Seoul" }];

type Users = typeof users;

type FullUser = {
  [k in keyof Users[number]]: Users[number][k];
};

// type FullUser = Partial<Record<keyof Users[number], number|string>>;
// type FullUser = Record<string, number|string>;
const ret: FullUser = users.reduce((acc, item) => ({ ...acc, ...item }), {});

console.log(ret);

export {};
