const sampleUrl = "https://jsonplaceholder.typicode.com/users/1";
const sampleUrl2 = "https://jsonplaceholder.typicode.com/posts/1";
// const myFetch = (url) => fetch(url).then((res) => res.json());

// myFetch를 이용하는 코드
// myFetch(sampleUrl).then((user) => {
//   console.log("user>>>", user);
// });

// fetch(sampleUrl)
//   .then((res) => res.json())
//   .then((data) => console.log("data>>", data));     // promise 2번

// const isAsyncAwait = true;

// if (isAsyncAwait) {
//   const res = await fetch(sampleUrl);
//   const data = await res.json();
//   console.log("🚀 ~ data:", data);
// } else {
//   fetch(sampleUrl)
//     .then((res) => res.json())
//     .then((data) => console.log("data>>", data));
// }

const promiFetch = (url) =>
  new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => res.json()) // promise를 return 받으면 .then으로 받아야 한다
      .then(resolve);
  });

const asyncFetch = async (url) => {
  const res = await fetch(url);
  //   const data = await res.json();
  return res.json();
};

const data = await asyncFetch(sampleUrl); // promiFetch는 Promise instance를 담고 있기 때문에 await로 풀어줘야 한다
// console.log("🚀 promiFetch~ data:", data);
console.log("🚀 asyncFetch~ data:", data);

const rets = [sampleUrl, sampleUrl2].map(async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  console.log("🚀 ~ rets ~ data:", data); // 실행은 되지만 결과를 담을 곳이 없다!
  return data;
});
console.log("🚀 ~ rets:", rets);

const f = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/1");

  if (!res.ok) throw new Error("Failt to Fetch!!");

  // <2초 sleep하도록 이 부분을 작성해 보세요!>
  await new Promise((resolve) => setTimeout(resolve), 2000); // 시간만 딜레이

  const data = await res.json();

  return data.name;
};

console.log(await f());

const myFetch = () =>
  new Promise((resolve, reject) =>
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.json())
      .then(resolve)
      .catch(reject)
  );
