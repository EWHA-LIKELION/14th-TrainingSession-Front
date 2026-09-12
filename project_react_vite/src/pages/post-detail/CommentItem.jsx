import Profile from "@/assets/images/profile.png";

const CommentItem = ({
  author = "작성자",
  date = "0000. 00. 00. 00:00",
  content = "댓글 내용",
  isMyComment,
}) => {
  return (
    <li className="flex w-[43.75rem] flex-col items-start gap-3 bg-white p-5">
      <header className="flex items-center justify-between self-stretch">
        <div className="flex items-center gap-2">
          <img
            src={Profile}
            alt="profile"
            className="bg-grey-3 aspect-square h-[2.8125rem] w-[2.8125rem] shrink-0 rounded-full object-cover"
          />
          <div className="flex flex-col items-start gap-1">
            <h5 className="font-pretendard text-center text-base leading-5 font-semibold text-black">
              {author}
            </h5>
            <p className="text-grey-2 font-pretendard text-xs leading-4 font-medium">
              {date}
            </p>
          </div>
        </div>
        {isMyComment ? (
          <div className="flex items-center gap-2 text-xs font-medium">
            <button className="text-grey-1 font-pretendard flex items-center justify-center gap-2 text-center text-sm leading-none font-medium tracking-normal">
              수정
            </button>
            <button className="text-error font-pretendard flex items-center justify-center gap-2 text-center text-sm leading-none font-medium tracking-normal">
              삭제
            </button>
          </div>
        ) : null}
      </header>
      <div className="flex max-w-[42.5rem] flex-col items-start gap-3 self-stretch px-[3.25rem]">
        <p className="font-pretendard text-base leading-5 font-normal text-black">
          {content}
        </p>
      </div>
    </li>
  );
};

export default CommentItem;
