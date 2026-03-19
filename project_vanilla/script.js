const input = document.getElementById("comment-input");
const button = document.getElementById("comment-btn");
const list = document.getElementById("comment-list");
const count = document.getElementById("comment-count");
const existingComments = document.querySelectorAll(".comment").length;

let comments = [];
let totalCount = existingComments;

count.textContent = existingComments;

function updateCount() {
    count.textContent = totalCount === 0 ? "0" : totalCount;
}

button.addEventListener("click", function () {
    const text = input.value;

    // 1. 빈 댓글 체크 
    if (!validateComment(text)) {
        alert("댓글을 입력하세요!");
        return;
    }

    // 2. 배열에 추가 (CREATE)
    comments.push(text);

    totalCount++;

    // 3. 댓글 요소 생성 (APPEND)
    const newComment = document.createElement("div");
    newComment.classList.add("comment");
    
    newComment.innerHTML = `
        <img src="images/profile.png">
        <div class="comment-body">
            <div class="comment-top">
                <div class="comment-user-info">
                    <span class="comment-user">likelion2026</span>
                    <span class="comment-date">방금 전</span>
                </div>

                <div class="comment-actions">
                    <span>수정</span>
                    <span class="delete">삭제</span>
                </div>
            </div>
    
            <p>${text}</p>
        </div>
    `;

    list.appendChild(newComment);

    const divider = document.createElement("div");
    divider.classList.add("divider");
    list.appendChild(divider);

    // 4. 입력창 초기화 
    input.value = "";

    // 5. 댓글 개수 업데이트
    updateCount();
});

function validateComment(text) {
    return text.trim() !== "";
}