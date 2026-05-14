const CommentItem = ({
  author = "작성자",
  date = "0000.00.00. 00:00",
  content = "댓글 내용",
  isMyComment,
}) => {
  return (
    <li className="flex flex-col gap-3 border-b border-gray-3 py-5">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="/images/profile.png"
            alt="profile"
            className="h-10 w-10 rounded-full"
          />

          <div>
            <h5 className="font-semibold text-black">{author}</h5>
            <p className="text-sm text-gray-1">{date}</p>
          </div>
        </div>

        {isMyComment ? (
          <div className="flex gap-3">
            <button className="text-sm text-gray-1">수정</button>

            <button className="text-sm text-error">삭제</button>
          </div>
        ) : null}
      </header>

      <p className="text-sm leading-6 text-black">{content}</p>
    </li>
  );
};

export default CommentItem;
