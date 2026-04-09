import CommentItem from "./CommentItem";
import { useEffect, useState } from "react";

//mock data (실제 서버에서 받아올 데이터를 임시로 흉내낸 것)
const comments = [
  {
    id: 1,
    author: "likelion2026",
    date: "2026. 03. 01. 18:36",
    content: "유익한 정보네요. 도움이 많이 되었습니다.",
    isMyComment: true,
  },

  {
    id: 2,
    author: "likelion2026",
    date: "2026. 03. 01. 12:48",
    content: "좋은 글 감사합니다!",
    isMyComment: false,
  },
];

const CommentSection = () => {
  const [comment, setComment] = useState("");
  useEffect(() => {
    console.log("현재 글자 수:", comment.length);
  }, [comment]);
  return (
    <section className="flex w-full flex-col gap-7 rounded-lg bg-white p-7.5">
      <div className="flex items-center gap-1 text-2xl font-semibold leading-8 text-black">
        <span>댓글</span>
        <span className="text-2xl font-semibold leading-8 text-gray-1">
          {comments.length}
        </span>
      </div>

      <form action="submit_url" className="flex flex-col gap-3">
        <div className="flex items-start gap-3">
          <img
            src="/images/profile.png"
            alt="profile"
            className="mt-1 h-11.25 w-11.25 shrink-0 rounded-full object-cover"
          />

          <div className="flex flex-1 items-center rounded-lg border border-gray-2 px-4 py-3">
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="댓글을 입력하세요."
              required
              maxLength={100}
              className="h-15.25 flex-1 resize-none bg-transparent text-sm text-black outline-none placeholder:text-gray-2"
            ></textarea>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-sm font-medium text-gray-2">{comment.length} / 100</div>

          <button
            disabled={comment.length === 0}
            type="submit"
            className="flex h-[35px] items-center justify-center rounded-lg bg-gray-2 px-5 text-sm font-semibold leading-none text-white whitespace-nowrap disabled:cursor-not-allowed disabled:opacity-100"
          >
            댓글 작성
          </button>
        </div>
      </form>

      <ul className="flex w-full flex-col gap-0">
        {comments.map((comment) => (
          <CommentItem
            key={comment.id}
            author={comment.author}
            date={comment.date}
            content={comment.content}
            isMyComment={comment.isMyComment}
          />
        ))}
      </ul>
    </section>
  );
};

export default CommentSection;
