const CommentItem = ({ author, date, content, isMyComment }) => {
  return (
    <li>
      <header>
        <div>
          <img src="./images/profile.png" alt="profile" />
          <div>
            <h5>{author}</h5>
            <p>{date}</p>
          </div>
        </div>
        {isMyComment ? (
          <div>
            <button className="change">수정</button>
            <button className="delete">삭제</button>
          </div>
        ) : null}
      </header>
      <p>{content}</p>
    </li>
  );
};

export default CommentItem;
