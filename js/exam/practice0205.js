// setTimeout(function () {
//   console.log("depth1", new Date());
//   setTimeout(function () {
//     console.log("depth2", new Date());
//     setTimeout(function () {
//       console.log("depth3", new Date());
//       throw new Error("Already 3-depth!!");
//     }, 3000);
//   }, 2000);
// }, 1000);

const depthTimer = (depth) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`depth${depth}`, new Date());
      if (depth >= 3) reject(new Error("Already 3-depth"));
      resolve(depth + 1);
    }, depth * 1000);
  });

// 1) then 방식
// depthTimer(1)
//   .then(depthTimer)
//   .then(depthTimer)
//   .catch((err) => console.error(err));

// 2) await 방식
// try {
//   const r1 = await depthTimer(1);
//   const r2 = await depthTimer(2);
//   const r3 = await depthTimer(3);
// } catch (err) {
//   console.error(err);
// }

//직렬처리 병렬처리

const sampleUrl = "https://jsonplaceholder.typicode.com/posts?userId=1";

const getPosts = async (url) => {
  const posts = await asyncFetch(url);
  // console.log("🚀 ~ getPosts ~ posts:", posts);
  // console.log(posts[0]);
};

// const getComments = (url) => {};
const userId = 1;

const res = await fetch(
  `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
);

const posts = (await res.json()).map(({ id: postId, title }) => ({
  postId,
  title,
}));
console.log("🚀 ~ posts ~ posts:", posts);

// for (const post of posts) {
//   post.comments = await getComments(post.postId);
// }

async function getComments(postId) {
  const cRes = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
  );
  return cRes.json();
}

// const promi = () => new Promise((resolve) => {
// setTimeout(())
// })

const asyncFetch = async (url) => {
  const res = await fetch(url);
  return res.json();
};

getPosts(sampleUrl);
