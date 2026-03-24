// 페이지 로드 시(새로고침 포함) 기존 댓글 개수 반영
document.addEventListener("DOMContentLoaded", updateCommentCount);

// --READ: 필요한 데이터 가져오기
const commentForm = document.querySelector("form");
const commentInput = document.getElementById("user_comment");
const commentSection = document.querySelector("section"); // 댓글이 추가될 영역
const countDisplay = document.querySelectorAll("#comment_count"); // 댓글 개수 표시

// 빈 댓글 등록 막기
function validateComment(content) {
  if (content.trim() === "" || content === "댓글을 입력하세요.") {
    return false;
  }
  return true;
}

// 댓글 등록 이벤트 리스너
commentForm.addEventListener("submit", function (e) {
  e.preventDefault(); // 페이지 새로고침 방지

  const content = commentInput.value;

  // 빈 댓글 검사
  if (!validateComment(content)) {
    alert("내용을 입력해주세요.");
    return;
  }

  // 새 댓글 목록에 표현 (Create)
  const newComment = `
  <div class="comment">
    <div class="comment_container">
      <img src="./images/profile.png" />
      <div class="comment_content">
        <div class="profile_text">
          <div class="nickname">likelion2026</div>
          <div class="date">2026. DD. MM</div>
        </div>
        <div class="comment_text">
          ${content}
        </div>
      </div>
      <div class="comment_edit_buttons">
        <button class="button_edit">수정</button>
        <button class="button_delete">삭제</button>
      </div>
    </div>
    <div class="horizontal-line"></div>
  </div>
  `;

  // 화면에 추가
  // form 태그가 끝난 직후(afterend)에 이 HTML을 삽입
  commentForm.insertAdjacentHTML("afterend", newComment);

  commentInput.value = "";

  // 댓글 등록 후 입력창 비우기
  commentInput.value = " ";

  // 댓글 개수 업데이트
  updateCommentCount();
});

// 삭제 버튼 클릭 이벤트 리스너
commentSection.addEventListener("click", function (e) {
  // 클릭된 요소가 삭제 버튼인지 확인
  if (e.target.classList.contains("button_delete")) {
    const deleteBtn = e.target;

    if (confirm("댓글을 삭제하시겠습니까?")) {
      deleteComment(deleteBtn);
    }
  }
});

// 댓글 삭제 함수
function deleteComment(button) {
  // 삭제할 댓글 찾기 (눌린 삭제 버튼과 가장 가까운 comment)
  const commentElement = button.closest(".comment");

  if (commentElement) {
    // el.remove()를 사용하여 .comment 전체(내용 + 구분선)를 삭제
    commentElement.remove();

    // 삭제 후 상단/하단의 댓글 개수 UI 업데이트
    updateCommentCount();
  }
}

// 전체 댓글 개수 관리
function updateCommentCount() {
  // 문서 전체에서 .comment 클래스 개수만 가져옴
  const currentCount = document.querySelectorAll(".comment").length;

  // 삼항 연산자로 업데이트
  countDisplay.forEach((display) => {
    display.textContent = currentCount ? currentCount : 0;
  });
}

// mock 데이터를 map으로 렌더링
const tags = ["JavaScript", "HTML", "CSS", "Frontend"];
const tagListEl = document.querySelector(".tag_list");

tagListEl.innerHTML = tags
  .map((tag) => `<li class="tag">#${tag}</li>`)
  .join("");
