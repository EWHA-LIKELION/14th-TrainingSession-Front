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
            <h5 className="text-base font-semibold leading-5 text-black">{author}</h5>
            <p className="text-xs font-medium leading-4 text-gray-2">{date}</p>
            <p className="max-w-[556px] text-base font-normal leading-5 text-black mt-2 mb-4">
              {content}
            </p>
          </div>
        </div>

        {isMyComment ? (
          <div className="flex items-center gap-2">
            <button className="text-sm font-medium leading-4 text-gray-1">수정</button>
            <button className="text-sm font-medium leading-4 text-error">삭제</button>
          </div>
        ) : null}
      </header>
      <div className="mx-auto h-px w-[60%] bg-gray-3"></div>
    </li>
  );
};

export default CommentItem;
