function f(a) {
  return a ** 2;
}

const af = (a) => a ** 2;

console.log(f(3));
console.log(af(3));

function f2(a, b) {
  const c = a ** b;
  return Math.sqrt(c);
}

const af2 = (a, b) => {
  c = a ** b;
  return Math.sqrt(c);
};
console.log(f2(3, 4));
console.log(af2(3, 4));

function fff_org(a) {
  return function (b) {
    for (let i = 1; i < 10; i += 1) {
      console.log(`${a} x ${i} = ${a * i}`);
    }
  };
}

const fff = (a) => (b) => {
  for (let i = 1; i < 10; i += 1) {
    console.log(`${a} x ${i} = ${a * i}`);
  }
};

// const gugu2dan = gugudan(2);
// const gugu3dan = gugudan(3);
// console.log(gugu2dan());
