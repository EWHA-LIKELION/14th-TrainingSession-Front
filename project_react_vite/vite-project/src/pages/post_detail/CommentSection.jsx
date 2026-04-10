import CommentItem from "./CommentItem";
import { useEffect, useState } from "react";

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
    <section className="mx-auto w-full max-w-[690px]">
      <div className="justify-center">
        <span class="text-Black font-['Pretendard'] text-2xl leading-8 font-semibold">
          댓글
        </span>
        <span className="gap-2"> </span>
        <span class="text-Gray-1 font-['Pretendard'] text-2xl leading-8 font-semibold">
          n
        </span>
      </div>
      <form className="flex-1 gap-2 p-2">
        <div className="flex flex-row gap-2">
          <img src="/images/profile.png" className="h-11 w-11 rounded-full" />
          <div className="border-Gray-2 flex items-center justify-start self-stretch rounded-lg border px-4 py-3">
            <textarea
              className="text-Gray-2 w-96 justify-start font-['Pretendard'] text-base leading-5 font-normal outline-none"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="댓글을 입력하세요."
              required
            ></textarea>
          </div>
          {/* <div> 글자수: {comment.length} / 100 </div> */}
        </div>
        <div className="mt-5 flex flex-row-reverse">
          <button
            disabled={comment.length === 0}
            type="submit"
            className="bg-Gray-2 flex h-9 items-center justify-center gap-2.5 overflow-hidden rounded-lg px-5 py-3 text-white"
          >
            댓글 작성
          </button>
        </div>
      </form>

      <ul>
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
