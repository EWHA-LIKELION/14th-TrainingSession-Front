const textarea = document.querySelector(".comment-form textarea"); // 댓글 입력창
const commentList = document.querySelector(".comment"); // 댓글 목록 (ul)
const countEl = document.querySelector(".comment-count"); // 댓글 개수 표시 (span)


function updateCommentCount() {  // 현재 댓글개수 세기 (li 요소 개수)
  const commentItems = document.querySelectorAll(".comment li");
  const count = commentItems.length;

// ⭐ 삼항 연산자 활용한 부분: 
// 댓글이 0개이면 ➜ "0"
// 1개 이상이면 ➜ 숫자 표시
  countEl.textContent = count > 0 ? count : "0";
}

updateCommentCount(); // 페이지 로딩 시 초기 댓글 개수 표시

function validateComment(text) {  // validateComment (빈 댓글 등록 막기 )
  if (text.length === 0) {  // 빈 댓글 등록 X
    alert("댓글을 입력해 주세요.");
    return false;
  }
  return true;
}


// ─────────────── ⭐ 요 밑으로는 댓글 추가하는 코드 (CREATE → APPEND) ⭐ ────────────────

// 입력된 텍스트 가져오기
const commentText = textarea.value;
// 앞에서 만들었떤? validateComment 함수 사용 (세션 때 얘기했던 재사용성이 보이는 부분)
if (validateComment(commentText) === false) {
  alert("유효하지 않은 댓글입니다.");
}

// ────── 1️⃣ CREATE : 새 댓글 li 요소 만들(었으나, 화면에는 안 보이는 상태)) ──────
const newComment = document.createElement("li");

// innerHTML로 댓글 구조 채우기, 기존 HTML 댓글 구조와 동일하가
newComment.innerHTML =
  "<header>" +
    "<div class='comment-header-info'>" +
      "<img src='./images/profile.png' alt='profile' />" +
      "<div class='comment-info'>" +
        "<h5>likelion2026</h5>" +
        "<p>2026.03.20</p>" +
      "</div>" +
    "</div>" +
    "<div class='comment-btn'>" +
      "<button class='change'>수정</button>" +
      "<button class='delete'>삭제</button>" +
    "</div>" +
  "</header>" +
  "<p class='comment-content'>" + commentText + "</p>";


// ──────────── 2️⃣ APPEND : 만든 댓글을 목록에 붙여야 됨 ────────────

// 댓글 목록에 새 댓글 추가
commentList.append(newComment);

// 댓글 등록 후 입력창 비우기
textarea.value = "";

// 댓글 개수 업데이트
updateCommentCount();