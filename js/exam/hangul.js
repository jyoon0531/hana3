import assert from "assert";

const ㄱ = "ㄱ".charCodeAt(0);
const ㅎ = "ㅎ".charCodeAt(0);
const 가 = "가".charCodeAt(0);

// "lLmMnNrR013678"
const JAUM_ALPHA_NUMS = [
  108, 76, 109, 77, 110, 78, 114, 82, 48, 49, 51, 54, 55, 56,
];

// const isEndJaum = (str) => {
//   const s = str.charCodeAt(str.length - 1);
//   return JAUM_ALPHA_NUMS.includes(s) || s >= ㄱ;
// };
