// 페이지 로드 시(새로고침 포함) 기존 댓글 개수 반영
document.addEventListener("DOMContentLoaded", updateCommentCount);

// --READ: 필요한 데이터 가져오기
const commentForm = document.querySelector("form");
const commentInput = document.getElementById("user_comment");
const commentSection = document.querySelector("section"); // 댓글이 추가될 영역
const countDisplay = document.querySelectorAll("#comment_count"); // 댓글 개수 표시

// 빈 댓글 등록 막기 (유효성 검사 함수)
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

  // 2. 새 댓글 목록에 표현 (Create)
  const newComment = document.createElement("div");
  newComment.className = "comment_container";
  newComment.innerHTML = `
    <img src="./images/profile.png" />
    <div class="comment_content">
      <div class="profile_text">
        <div class="nickname">likelion2026</div>
        <div class="date">2026. 03. 19</div>
      </div>
      <div class="comment_text">${content}</div>
    </div>
    <div class="comment_edit_buttons">
      <button class="button_edit">수정</button>
      <button class="button_delete">삭제</button>
    </div>
  `;

  const line = document.createElement("div");
  line.className = "horizontal-line";

  // 화면에 추가
  commentSection.appendChild(newComment);
  commentSection.appendChild(line);

  // 3. 댓글 등록 후 입력창 비우기
  commentInput.value = "";

  // 4. 댓글 개수 업데이트
  updateCommentCount();
});

function updateCommentCount() {
  // 문서 전체에서 .comment_container 클래스 개수만 가져옴
  const currentCount = document.querySelectorAll(".comment_container").length;

  // 삼항 연산자로 업데이트
  countDisplay.forEach((display) => {
    display.textContent = currentCount ? currentCount : 0;
  });
}
