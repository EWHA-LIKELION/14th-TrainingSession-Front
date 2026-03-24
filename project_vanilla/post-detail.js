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

// mock 데이터 준비
const mockTags = ['멋쟁이사자처럼', '프론트엔드', '자바스크립트', '교육세션']; 

const tagList = document.querySelector('.tag-list'); // HTML에서 가져옴

// 기존 하드코딩된 태그 먼저 지우기
const existingTags = document.querySelectorAll('.hashtag');
existingTags.forEach(function(tag) {
    tag.remove();
});

// map으로 순회하며 요소 만들어서 배열로 반환하기
const tagElements = mockTags.map(function(tagText) {
    const newTag = document.createElement('li'); // li 만들어 붙임
    newTag.classList.add('hashtag');
    newTag.textContent = `#${tagText}`; // 태그 앞에 '#' 붙이기

    tagList.append(newTag); // 주의!! return 하기 전에 append 해야함

    return newTag;
});


// 이벤트 위임(Event Delegation)을 사용해서 댓글 목록 전체에 이벤트를 걸어줌
commentList.addEventListener('click', function(event) {

    if (event.target.classList.contains('delete-button')) { // 클릭된 버튼이 삭제 버튼인지 확인
        
        // 클릭된 삭제 버튼과 가장 가까운 댓글과 구분선 찾기
        const commentItem = event.target.closest('.comment-item');

        const divider = commentItem.nextElementSibling;

        // 화면에서 댓글과 구분선 삭제
        if (commentItem) commentItem.remove();
        if (divider && divider.classList.contains('comment-divider')) divider.remove();

        // 댓글 수 업데이트
        commentCount--;
        countDisplay.textContent = commentCount > 0 ? commentCount : "0";
    }
});


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
                <div class="comment-controls">
                    <button type="button" class="correction-button">수정</button>
                    <button type="button" class="delete-button">삭제</button>
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