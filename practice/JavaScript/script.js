//script.js

// --READ: HTML에서 필요한 요소 가져오기

const input = document.querySelector("#todo-input");
const btn = document.querySelector("#todo-btn");
const list = document.querySelector("#todo-list");
const countEl = document.querySelector("#todo-count");

console.log(input);
console.log(btn);
console.log(list);

// --CREATE: 새 li 요소 만들기

const newItem1 = document.createElement("li");
const newItem2 = document.createElement("li");

newItem1.textContent = "자바스크립트 공부하기";
newItem2.innerHTML = `
 <h5>likelion2026</h5>
 <p class="comment-content">유익해요!</p>`;

console.log(newItem1);
console.log(newItem2);

// --APPEND: 만든 요소를 목록에 붙이기

list.append(newItem1);
list.prepend(newItem2);
