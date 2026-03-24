const input = document.getElementById("comment-input");
const button = document.getElementById("comment-btn");
const list = document.getElementById("comment-list");
const count = document.getElementById("comment-count");
const tagList = document.getElementById("tag-list");

// === 상태 === //
// 기존 댓글 개수 먼저 반영
let comments = Array.from(document.querySelectorAll(".comment"));

// === 댓글 개수 업데이트 === //
function updateCount() {
    const currentComments = document.querySelectorAll(".comment");
    count.textContent = 
        currentComments.length === 0 ? "0" : currentComments.length;
}

// 최초 실행 (기존 댓글 반영)
updateCount();


// === 댓글 추가 === //
button.addEventListener("click", function () {
    const text = input.value;

    // 1. 빈 댓글 체크 
    if (!validateComment(text)) {
        alert("댓글을 입력하세요!");
        return;
    }

    // 2. 배열에 추가 (CREATE)
    comments.push(text);

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

    // 구분선 추가 
    const divider = document.createElement("div");
    divider.classList.add("divider");

    list.appendChild(newComment);
    list.appendChild(divider);

    // 4. 입력창 초기화 
    input.value = "";

    // 5. 댓글 개수 업데이트
    updateCount();
});


// === 댓글 유효성 검사 === //
function validateComment(text) {
    return text.trim() !== "";
}


// === 댓글 삭제 === //
list.addEventListener("click", function (e) {
    if (e.target.classList.contains("delete")) {
        const comment = e.target.closest(".comment");
        const divider = comment.nextElementSibling;

        comment.remove();
        if (divider && divider.classList.contains("divider")) {
            divider.remove();
        }

        updateCount();
    }
});


// === 태그 렌더링 === //
const tags = ["멋사", "프론트엔드"];  // mock 데이터 

function renderTags() {
    tagList.innerHTML = tags
        .map(tag => `<span>#${tag}</span>`)
        .join("");
}

renderTags();