// READ: HTML에서 필요한 요소들을 JS로 가져오기
const commentForm = document.querySelector('.comment-form');
const commentInput = document.querySelector('.comment-form textarea');
const commentList = document.querySelector('.comment');
const countDisplay = document.querySelector('.comment-count');

// 댓글 개수 업데이트 및 삼항 연산자 활용!!!
function updateCount() {
  // 현재 작성된 댓글(li)의 개수 가져오기
  const comments = document.querySelectorAll('.comment > li');
  const commentCount = comments.length;
  // 댓글이 0개일 때 -> "0", 1개 이상일 때 -> 숫자 표시
  countDisplay.textContent = commentCount === 0 ? "0" : `${commentCount}`;
}

// 빈 댓글 등록 막기: validateComment 함수!
function validateComment(text) {
  if (text.length === 0) {
    alert("내용을 입력해 주세요.");
    return false;
  }
  return true;
}

// 폼이 제출될 때 실행될 동작들..
commentForm.addEventListener('submit', function (e) {
  e.preventDefault(); // 새로고침 방지

  const text = commentInput.value; // 입력창에 쓰여 있는 텍스트 가져오기

  // 검사에서 통과하지 못하면(빈 댓글이면) 함수 종료
  if (!validateComment(text)) {
    return;
  }
  // 새 댓글이 목록에 추가되도록 구현! (CREATE -> APPEND)
  const newComment = document.createElement('li');

  // innerHTML을 활용하여 태그째로 구조 채워넣기
  newComment.innerHTML = `
    <header>
      <div class="comment-header-info">
        <img src="./images/profile.png" alt="profile" />
        <div class="comment-info">
          <h5>likelion2026</h5>
          <p>방금 전</p>
        </div>
      </div>
      <div class="comment-btn">
        <button class="change">수정</button>
        <button class="delete">삭제</button>
      </div>
    </header>
    <p class="comment-content">${text}</p>
  `;

  // APPEND: 만든 요소를 댓글 목록 맨 뒤에 꽂아넣기
  commentList.append(newComment);

  // 댓글 등록 후 입력창 비우기!
  commentInput.value = "";

  // 댓글 개수 업데이트하기!
  updateCount();
});

// 화면이 처음 로드될 때 기존에 있는 댓글 개수를 세어서 표시
updateCount();
