import { rand } from "./utils/index.js";

// function Promise(cb) {
//   const thenFns = [];
//   const catchFns = [];
//   const finalFns = [];
//   this.state = "pending";

//   cb(
//     (succ) => thenRecur(succ),
//     (err) => catchRecur(err)
//   );

//   Promise.prototype.then = (fn) => {
//     // prototype -> 외부에서 불러서 쓸 수 있게
//     thenFns.push(fn);
//     return this; // Builder Pattern
//   };

//   Promise.prototype.catch = (fn) => {
//     catchFns.push(fn);
//     return this;
//   };
//   const finalRunner = () => {
//     for (const f of finalFns) f();
//   };

//   const catchRecur = (preErr) => {
//     this.state = "rejected";
//     const fn = catchFns.shift();
//     if (!fn) {
//       finalRunner();
//       if (preErr instanceof Error) throw preErr;
//       else throw new Error(preErr);
//     }
//     try {
//       fn(preErr);
//       return finalRunner();
//     } catch (error) {
//       catchRecur(error);
//     }
//   };

//   const thenRecur = (preRet) => {
//     const fn = thenFns.shift();
//     if (!fn) {
//       this.state = "fulfilled";
//       return finalRunner();
//     }
//     if (preRet instanceof Promise) {
//       preRet
//         .then((res) => {
//           const r = fn(res);
//           console.log("🚀 r:", r);
//           r.catch((e) => {
//             catchRecur(e);
//           });
//         })
//         .then(thenRecur)
//         .catch((err) => {
//           catchRecur(err);
//         });
//     } else {
//       try {
//         const ret = fn(preRet);
//         thenRecur(ret);
//       } catch (error) {
//         catchRecur(error);
//       }
//     }
//   };
// }

const randtime = new Promise((resolve) => {
  const sec = rand(1, 4) * 500;
  setTimeout(() => resolve(sec), sec);
});

const randTime = () =>
  new Promise((resolve) => {
    const sec = rand(1, 4) * 500;
    setTimeout(() => resolve(sec), sec);
  });

const isParellel = true;
console.time("promi");
if (isParellel) {
  Promise.all([randTime(), randTime(), randTime()]).then(() =>
    console.timeEnd("promi")
  ); // EventLoop는 1ms마다 돌고, TaskQueue에서 cb함수 하나씩 가져와서 Callstack 올리므로 끝이 3ms
} else {
  randTime()
    .then((x) => {
      console.log(x);
      return randTime();
    })
    .then((x) => {
      console.log(x);
      return randTime();
    })
    .then((x) => {
      console.log(x);
      return randTime();
    })
    .then(() => console.timeEnd("promi"));
}
