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
  newComment.textContent = text;

  commentList.append(newComment);

  textarea.value = "";

  updateCommentCount();
}

updateCommentCount();

