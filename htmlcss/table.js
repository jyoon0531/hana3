const users = [
  { id: 1, name: "홍길동", tel: "01088889991", addr: "서울" },
  { id: 2, name: "김길동", tel: "01088889992", addr: "부산" },
  { id: 3, name: "이길동", tel: "01088889993", addr: "서울" },
  { id: 4, name: "박길동", tel: "01088889994", addr: "서울" },
];

// const tbody = document.querySelector("tbody");
// users.map((item) => {
//   const tr = document.createElement("tr");
// });

const COL_IDX = { id: 0, name: 1, tel: 2, addr: 3, btns: 4 };
users.forEach((user) => {
  const row = userTable.insertRow();
  const cells = Array(4);
  for (const [k, v] of Object.entries(user)) {
    cells[COL_IDX[k]] = v;
  }

  cells.forEach((val) => (row.insertCell().innerText = val));
  const btn = document.createElement("button");
  btn.textContent = "DEL";
  btn.addEventListener("click", (evt) => {
    row.remove();
  });
  row.insertCell().append(btn);
});
