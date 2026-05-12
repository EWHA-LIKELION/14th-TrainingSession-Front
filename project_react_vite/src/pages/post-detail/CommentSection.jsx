import React from "react";
import CommentItem from "./CommentItem";
import { useState, useEffect } from "react";
import useToastStore from "../../store/useToastStore";

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

function CommentSection() {
  const showToast = useToastStore((state) => state.showToast);

  const handleSubmit = (e) => {
    e.preventDefault();
    showToast("로그인 후 댓글을 입력할 수 있어요.", "alert");
  };

  const [comment, setComment] = useState("");
  useEffect(() => {
    console.log("현재 글자 수:", comment.length);
  }, [comment]);
  return (
    <section className="flex h-[29.125rem] flex-col items-start justify-between self-stretch">
      <div className="flex flex-col items-start gap-7 self-stretch">
        <div className="font-pretendard text-2xl leading-8 font-semibold text-black">
          댓글{" "}
          <span className="text-grey-1 font-pretendard text-2xl leading-8 font-semibold">
            n
          </span>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex w-full flex-col items-end gap-5 self-stretch"
          // action="submit_url"
        >
          <div className="flex h-[5.3125rem] w-full items-start gap-3 self-stretch">
            <div className="bg-grey-3 h-[2.8125rem] w-[2.8125rem] shrink-0 overflow-hidden rounded-full">
              <img
                className="h-full w-full object-cover"
                src="/images/profile.png"
                alt="profile"
              />
            </div>
            <textarea
              className="border-grey-2 focus:border-main-1 font-pretendard placeholder:text-grey-2 flex-1 resize-none self-stretch rounded-lg border bg-white p-[0.75rem_1rem] text-base leading-5 font-normal transition-colors outline-none placeholder:overflow-hidden placeholder:text-ellipsis placeholder:whitespace-nowrap"
              onChange={(e) => setComment(e.target.value)}
              placeholder="댓글을 입력하세요."
              required
            ></textarea>
          </div>

          <button
            className={`font-pretendard flex h-[2.1875rem] items-center justify-center gap-2.5 rounded-lg px-5 py-3 text-[1rem] leading-5 font-normal text-white ${comment.length === 0 ? "bg-grey-2" : "bg-main-1"}`}
            disabled={comment.length === 0}
            type="submit"
          >
            댓글 작성
          </button>
        </form>
      </div>

      <ul className="flex w-full flex-col items-center gap-2 self-stretch">
        {comments.map((comment, index) => (
          <React.Fragment key={comment.id}>
            <CommentItem
              key={comment.id}
              author={comment.author}
              date={comment.date}
              content={comment.content}
              isMyComment={comment.isMyComment}
            />
            {index !== comments.length - 1 && (
              <div className="border-grey-2 w-[23.75rem] border-b" />
            )}
          </React.Fragment>
        ))}
      </ul>
    </section>
  );
}

export default CommentSection;
