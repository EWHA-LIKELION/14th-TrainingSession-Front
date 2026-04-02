const CommentItem = ({
    author = "작성자", 
    date = "0000. 00. 00. 00:00", 
    content = "댓글 내용",
    isMyComment}) => {
    return (
      <li>
        <header>
          <div>
            <img src="/images/profile.png" alt="profile" />
            <div>
              <h5>{author}</h5>
              <p>{date}</p>
            </div>
          </div>
          {isMyComment ? (
          <div>
            <button>수정</button>
            <button>삭제</button>
           </div>
          ) : null}
              
        </header>
        <p>{content}</p>
      </li>
          
    );
}

export default CommentItem;