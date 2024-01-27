const { name: n, age = 30 } = { name: "Lee" };

const fn = ({ age }) => age; // user = {id: 1, name: 'P', age: 33}
const { age2: age3 = fn(user) } = { age22: 20 }; // age2 = 30, age3 = 33

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i of arr) {
  console.log(i);
  if (i > 5) break;
}
