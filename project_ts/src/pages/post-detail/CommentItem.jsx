const CommentItem = ({ author, date, content, isMyComment }) => {
  return (
    <li className="flex w-full flex-col gap-3 px-5 py-5">
      <header className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          <img
            src="/images/profile.png"
            alt="profile"
            className="h-11 w-11 shrink-0 rounded-full object-cover"
          />

          <div className="flex flex-col gap-1">
            <h5 className="text-base leading-5 font-semibold text-black">
              {author}
            </h5>
            <p className="text-gray-2 text-xs leading-4 font-medium">{date}</p>
            <p className="mt-2 mb-4 max-w-[556px] text-base leading-5 font-normal text-black">
              {content}
            </p>
          </div>
        </div>

        {isMyComment ? (
          <div className="flex items-center gap-2">
            <button className="text-gray-1 text-sm leading-4 font-medium">
              수정
            </button>
            <button className="text-error text-sm leading-4 font-medium">
              삭제
            </button>
          </div>
        ) : null}
      </header>
      <div className="bg-gray-3 mx-auto h-px w-[60%]"></div>
    </li>
  );
};

export default CommentItem;
