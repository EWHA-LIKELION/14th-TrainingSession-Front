const CommentItem = ({
  author = "작성자",
  date = "0000. 00. 00. 00:00",
  content = "댓글 내용",
  isMyComment = Boolean,
  showDivider = true,
}) => {
  return (
    <li className="flex flex-col items-start gap-3 p-5 self-stretch">
      <header className="flex justify-between items-center self-stretch">
        <div className="flex items-center gap-2.5">
          <img
            src="/images/profile.png"
            alt="profile"
            className="w-10 h-10 rounded-full"
          />
          <div className="flex flex-col items-start justify-center">
            <h5 className="text-base font-semibold leading-5 text-black">
              {author}
            </h5>
            <p className="text-xs font-medium leading-4 text-gray-2">{date}</p>
          </div>
        </div>
        {isMyComment ? (
          <div className="flex gap-2">
            <button className="text-sm font-semibold leading-none text-gray-1 text-center">
              수정
            </button>
            <button className="text-sm font-semibold leading-none text-error text-center">
              삭제
            </button>
          </div>
        ) : null}
      </header>
      <p className="ml-12 mb-3 text-base font-normal leading-5 text-black self-stretch">
        {content}
      </p>

      {showDivider && (
        <div className="w-[380px] h-[1px] bg-gray-3 my-2.5 self-center"></div>
      )}
    </li>
  );
};

export default CommentItem;
