// READ
const commentForm = document.querySelector('.comment-form');
const commentInput = document.querySelector('.comment-input');
const commentList = document.querySelector('.comment-list');
const countDisplay = document.querySelector('.count');

// 처음에 댓글 두 개 있었으니까...
let commentCount = 2;

// 삼항 연산자로 초기 개수 표시
countDisplay.textContent = commentCount > 0 ? commentCount : "0";

// 빈 댓글 등록 막기 함수
function validateComment(text) {
    if (text.trim().length === 0) {
        alert("내용을 입력해 주세요.");
        return false;
    }
    return true;
}

commentForm.addEventListener('submit', function(event) {
    event.preventDefault(); // 폼 제출 시 페이지 새로고침 막기

    const text = commentInput.value; 

    // 빈 댓글 검사
    if (!validateComment(text)) return;

    // CREATE -> APPEND
    const newCommentItem = document.createElement('div');
    newCommentItem.classList.add('comment-item');
    

    newCommentItem.innerHTML = `
        <img src="./images/profile.png" alt="프로필 사진" class="comment-profile">
        <div class="comment-body">
            <div class="comment-header">
                <div class="user-info">
                    <strong>PuppySavesWorld</strong>
                    <span>2026.03.19 00:30</span>
                </div>
            </div>
            <p>${text}</p>
        </div>
    `;

    const divider = document.createElement('hr');
    divider.classList.add('comment-divider');

    // APPEND
    commentList.append(newCommentItem);
    commentList.append(divider);

    // 입력창 비우기
    commentInput.value = null;

    // 댓글 개수 업데이트
    commentCount++;
    // 삼항 연산자 다시 적용!!
    countDisplay.textContent = commentCount > 0 ? commentCount : "0";
});