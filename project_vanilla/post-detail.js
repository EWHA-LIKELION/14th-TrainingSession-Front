const commentCountEl = document.querySelector('.comment-count');
const commentList = document.querySelector('.comment-list');
const textarea = document.querySelector('.comment-write-box textarea');

function updateCommentCount() {
  const commentCount = document.querySelectorAll('.comment-list li').length;
  commentCountEl.textContent = commentCount === 0 ? "0" : commentCount;
}

function validateComment(text) {
  return text.trim() !== "";
}

function addComment() {
  const text = textarea.value;

  if (!validateComment(text)) {
    alert("댓글을 작성해주세요.");
    return;
  }

   const newComment = document.createElement('li');

  newComment.innerHTML = `
    <header class="comment-header">
      <div class="comment-header-info">
        <img src="images/profile.png" class="profile-img small" alt="profile" />
        <div class="comment-info">
          <h5>likelion2026</h5>
          <p>${new Date().toLocaleString()}</p>
        </div>
      </div>
      <div class="comment-actions">
        <button class="change" type="button">수정</button>
        <button class="delete" type="button">삭제</button>
      </div>
    </header>
    <p class="comment-text">${text}</p>
  `;


  commentList.append(newComment);

  textarea.value = "";

  updateCommentCount();
}

updateCommentCount();

