console.log("DOM.js");

const div = document.createElement("div");
div.innerText = "innerText"; // TextNode
div.style.backgroundColor = "tomato";
div.style.color = "white";

const span = document.createElement("span");
div.append(span);
span.innerHTML = "<br>Span: <strong>strong</strong>";

document.body.append(div);

const btn = document.createElement("button");
btn.textContent = "BTN";
document.body.append(btn);

function toUpper(el) {
  el.innerText = el.innerText.toUpperCase();
}

btn.addEventListener("click", (evt) => {
  //   alert("BTN clicked");
  const bbb = document.getElementById("li2");
  toUpper(bbb);
  const ul = document.querySelector(".bg-yellow");
  const aaa = ul.firstElementChild;
  console.log("🚀 aaa:", aaa);
  toUpper(aaa);
  const ccc = ul.lastElementChild;
  toUpper(ccc);
});

console.log(div.textContent);
console.log(div.innerText);
console.log(div.innerHTML);
