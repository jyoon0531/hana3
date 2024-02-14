function add(a: number, b: string) {
  return `${a} - ${b}`;
}

function log(s: string) {
  return console.log("log>>", s);
}

type FirstArgs<F> = F extends (a: infer First, ...b: any) => any
  ? First
  : never;
type SecondArgs<F> = F extends (a: any, b: infer Second, ...r: any) => any
  ? Second
  : never;
type Args<F> = F extends (...args: infer P) => any ? P[number] : never; //number를 줘서 value 유니언으로

type A = FirstArgs<typeof add>; // number
type B = SecondArgs<typeof add>; // string
type C = Args<typeof add>; // number | string

// type AX = Args<typeof String.prototype.endsWith>;
// ⇒ string | number | undefined
type AX = Args<typeof String.prototype.charAt>;
// ⇒ number
