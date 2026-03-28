const CommentItem = ({ author, date, content, isMyComment }) => {
  return (
    <li>
      <header>
        <div>
          <img src="public/images/profile.png" alt="profile" />
          <div>
            <h5>{author}</h5>
            <p>{date}</p>
          </div>
        </div>
        {isMyComment ? (
          <div>
            <button className="change">수정</button>
            <button className="change">삭제</button>
          </div>
        ) : null}
      </header>
      <p>{content}</p>
    </li>
  );
};
export default CommentItem;
