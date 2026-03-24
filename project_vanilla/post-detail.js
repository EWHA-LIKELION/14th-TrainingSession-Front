// 게시물 상세 페이지 Java Script

// 1. <<댓글 수 표시 (삼항연산자 활용)>>

//댓글 리스트랑 댓글 수 표시하는 span 가져오기
const commentList = document.querySelector('.comment-list');
const commentCount = document.querySelector('.comment-count');

// 댓글 수 세는 함수 만들기
const updateCommentCount = () => {
    const itemCount = commentList.querySelectorAll('.comment-item').length;
    commentCount.textContent = itemCount === 0 ? "0" : itemCount;
}

//페이징 로딩하면 숫자 업데이트 되도록 실행!
updateCommentCount();

// 2. <<댓글 추가 기능>>

// 필요한 요소 가져오기
const commentForm = document.querySelector('.comment-form');
const commentInput = document.querySelector('#comment-input');

// 빈 댓글인지 검사하기
const validateComment = (text) => {
    if (text.trim() === ""){
        alert("댓글 내용을 입력해주세요 ㅠ.ㅠ");
        return false; //이걸 써야 댓글이 달리지 않음! 멈춰!!의 기능
    }
    return true;
}

// 댓글 작성 버튼 눌렀을 때 실행
commentForm.addEventListener('submit', (e) => {
    e.preventDefault(); // 폼 제출 시 새로고침 막기
    const commentText = commentInput.value; // 버튼을 누른 '지금'의 글자 가져오기
    if(!validateComment(commentText)) return; // 함수로 글자 입력되었는지 확인, return으로 통행 검사!

    // 댓글 작성 시간 나타내기
    const now = new Date();
    const year = now.getFullYear();
    const month = ('0' + (now.getMonth() + 1)).slice(-2);
    const day = ('0' + now.getDate()).slice(-2);
    const hours = ('0' + now.getHours()).slice(-2);
    const minutes = ('0' + now.getMinutes()).slice(-2);

    const dateString = `${year}. ${month}. ${day}. ${hours}:${minutes}`;

    // 댓글 목록에 추가하기
    const newComment = document.createElement('li');
    newComment.className = 'comment-item';

    newComment.innerHTML = `
        <img src="images/profile.png" class="profile-img-sm">
        <div class="comment-wrap">
            <div class="comment-header">    
                <div class="c-info">
                    <strong class="c-nickname">likelion2026</strong>
                    <span class="c-date">${dateString}</span>
                                </div>
                                <div class="c-actions">
                                    <button type="button" class="btn-action edit-btn">수정</button>
                                    <button type="button" class="btn-action del-btn">삭제</button>
                                </div>
                            </div>
                            <p class="comment-text">${commentText}</p>
                        </div>`;

    commentList.append(newComment);
    
    // 입력창 비우기
    commentInput.value="";

    updateCommentCount();
    commentInput.focus(); //보통 입력창으로 커서가 이동하니까

});

// 댓글 삭제 기능
commentList.addEventListener('click', (e) => {
    
    // 클릭된 버튼이 삭제 버튼인지 확인
    if (e.target.classList.contains('del-btn')) {
        
        // 삭제하려는 댓글 찾기...
        const commentItem = e.target.closest('.comment-item');
        
        if (confirm("정말로 삭제하시겠습니까? ㅠ.ㅠ")) {
            commentItem.remove(); // 삭제!
            updateCommentCount(); // 숫자 새로고침!
        }
    }
    else if (e.target.classList.contains('edit-btn')) {
        const commentItem = e.target.closest('.comment-item');
        alert("수정 기능 준비중 ~.~");
    }
});

// tag mock 데이터 -> map으로 렌더링
const tags = ['이화여대', '멋사'];
const tagList = document.querySelector('.post-tags');

const hashTags = tags.map(tag => 
    `<li class="tag">#${tag}</li>`).join(''); // 태그 간 , 없애기

tagList.innerHTML = hashTags;





