const CommentItem = ({ author, date, content, isMyComment }) => {
  return (
    <li className="flex w-175 flex-col items-start gap-2.5 bg-white p-5">
      <header className="flex w-full justify-between">
        <div className="flex flex-row items-center gap-2">
          <img
            src="/images/profile.png"
            alt="profile"
            className="aspect-square h-11.25 w-11.25"
          />
          <div className="flex flex-col items-start gap-1">
            <h5 className="text-center text-base font-semibold text-black">
              {author}
            </h5>
            <p className="text-gray-2 text-xs font-medium">{date}</p>
          </div>
        </div>
        {isMyComment ? (
          <div className="flex items-start gap-2">
            <button className="text-gray-1 text-center text-sm font-medium">
              수정
            </button>
            <button className="text-error text-center text-sm font-medium">
              삭제
            </button>
          </div>
        ) : null}
      </header>
      <p className="pl-13 text-base font-normal text-black">{content}</p>
    </li>
  );
};

export default CommentItem;
