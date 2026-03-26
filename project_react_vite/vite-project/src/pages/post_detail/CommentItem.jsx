const CommentItem = ({
  author = "작성자이름",
  date = "날짜",
  content = "댓글내용",
  isMyComment = true,
}) => {
  return (
    <div>
      <div>
        <img src="/images/profile.png" />
        <div>
          <div>
            <div>{author}</div>
            <div>{date}</div>
          </div>
          <div>{content}</div>
        </div>
        {isMyComment ? (
          <div>
            <button>수정</button>
            <button>삭제</button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default CommentItem;
