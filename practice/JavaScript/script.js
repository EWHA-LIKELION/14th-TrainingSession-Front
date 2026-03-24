//script.js
//javascript 기초 세션 + javascript 심화 세션
const input = document.querySelector("#todo-input");
const btn = document.querySelector("#todo-btn");
const list = document.querySelector("#todo-list");
const countEl = document.querySelector("#todo-count");

btn.addEventListener("click", function () {
  const text = input.value; // 1. READ — 입력창에 써있는 값 읽기

  if (text.length === 0) {
    // 2. 빈 값이면 중단

    alert("내용을 입력해 주세요.");

    return;
  }

  // 3. CREATE: 새 li 요소 만들기

  const newItem1 = document.createElement("li");
  newItem1.textContent = text;

  // const newItem2 = document.createElement("li");

  // newItem1.textContent = "자바스크립트 공부하기";
  // newItem2.innerHTML = `
  //  <h5>likelion2026</h5>
  //  <p class="comment-content">유익해요!</p>`;

  console.log(newItem1);
  // console.log(newItem2);

  //4. APPEND: 만든 요소를 목록에 붙이기

  list.append(newItem1);
  // list.prepend(newItem2);

  // const ewhain = {
  //   age: 20, //숫자 하나
  //   name: "아기사자", //문자열 하나
  // };
  // console.log(ewhain.age);
  // console.log(ewhain.name);

  //5. 입력창 초기화
  input.value = "";
});
