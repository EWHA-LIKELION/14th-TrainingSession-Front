const CommentItem = ({
  author = "작성자이름",
  date = "날짜",
  content = "댓글내용",
  isMyComment = true,
}) => {
  return (
    <div className="p-4">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center justify-start gap-2">
          <img src="/images/profile.png" />

          <div className="inline-flex flex-col items-start justify-start gap-1">
            <div className="text-Black justify-center text-center font-['Pretendard'] text-base leading-5 font-semibold">
              {author}
            </div>
            <div className="text-Gray-2 justify-center font-['Pretendard'] text-xs leading-4 font-medium">
              {date}
            </div>
          </div>
        </div>
        {isMyComment ? (
          <div className="flex flex-row items-center gap-2">
            <button className="text-Gray-1 font-['Pretendard'] text-sm font-medium">
              수정
            </button>
            <button className="text-Error font-['Pretendard'] text-sm font-medium">
              삭제
            </button>
          </div>
        ) : null}
      </div>
      <div className="text-Black m-2 w-full max-w-[680px] justify-center pl-11 font-['Pretendard'] text-base leading-5 font-normal">
        {content}
      </div>
    </div>
  );
};

export default CommentItem;
