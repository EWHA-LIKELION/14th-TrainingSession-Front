import profileImage from "@/assets/images/profile.png";

const CommentItem = ({
  author = "작성자",
  date = "0000. 00. 00. 00:00",
  content = "댓글 내용",
  isMyComment,
}) => {
  return (
    <div className="flex w-[700px] flex-col">
      <div className="flex gap-3 p-5">
        <img
          src={profileImage}
          alt="profile"
          className="aspect-square h-[45px] w-[45px] rounded-full object-cover"
        />
        <div className="flex w-full flex-col gap-[10px]">
          <div className="flex w-full items-center justify-between">
            <div className="flex flex-col gap-1">
              <span className="text-base leading-5 font-semibold text-black">
                {author}
              </span>
              <span className="text-gray-2 text-xs leading-4 font-medium">
                {date}
              </span>
            </div>
            {isMyComment ? (
              <div className="flex gap-2">
                <button className="text-gray-1 text-center text-sm leading-[14px] font-medium tracking-normal">
                  수정
                </button>
                <button className="text-error text-center text-sm leading-[14px] font-medium tracking-normal">
                  삭제
                </button>
              </div>
            ) : null}
          </div>
          <p className="max-w-[680px] self-stretch text-base leading-5 font-normal text-black">
            {content}
          </p>
        </div>
      </div>
      <div className="bg-gray-3 mx-auto h-px w-[380px]" />
    </div>
  );
};

export default CommentItem;
