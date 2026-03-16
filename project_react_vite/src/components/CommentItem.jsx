const CommentItem = ({ author, date, content }) => {
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
        <div>
          <button className="change">수정</button>
          <button className="delete">삭제</button>
        </div>
      </header>
      <p>{content}</p>
    </li>
  );
};

export default CommentItem;
