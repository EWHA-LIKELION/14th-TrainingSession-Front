import { useState, useEffect } from "react";
import CommentItem from "./CommentItem";

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
  // let comment = "";
  const [comment, setComment] = useState("");

  //comment가 바뀔 때마다 실행
  useEffect(() => {
    console.log("현재 글자 수:", comment.length);
  }, [comment]);

  return (
    <section className="flex w-187.75 flex-col items-start gap-7 rounded-lg bg-white p-7.5">
      <div className="flex gap-1 text-2xl font-semibold text-black">
        댓글
        <span className="text-gray-1 text-2xl font-semibold">2</span>
      </div>

      <form
        action="submit_url"
        className="flex flex-col items-end justify-center gap-5 self-stretch"
      >
        <div className="flex items-start gap-3 self-stretch">
          <img
            src="/images/profile.png"
            alt="profile"
            className="aspect-square h-11.25 w-11.25 rounded-[45px]"
          />
          <textarea
            value={comment}
            // onChange={(e) => {
            //   comment = e.target.value;
            // }}
            onChange={(e) => setComment(e.target.value)}
            placeholder="댓글을 입력하세요."
            required
            className="placeholder-gray-2 border-gray-2 flex w-158.5 items-center self-stretch rounded-lg border bg-white px-4 py-3"
          ></textarea>
        </div>
        <div className="flex w-full items-center justify-between">
          <div className="text-gray-1 flex pl-13 text-base font-medium">
            {comment.length} / 100
          </div>
          <button
            disabled={comment.length === 0}
            type="submit"
            className="bg-gray-2 flex items-center justify-center rounded-lg px-5 py-1.5 text-center text-base font-semibold text-white"
          >
            댓글 작성
          </button>
        </div>
      </form>

      {/* 1단계: props 개념 설명 - CommentItem을 직접 두 번 사용 */}
      {/* <ul>
        <CommentItem
          author="likelion2026"
          date="2026. 03. 01. 18:36"
          content="유익한 정보네요. 도움이 많이 되었습니다."
          isMyComment={true}
        />
        <CommentItem
          author="likelion2026"
          date="2026. 03. 01. 12:48"
          content="좋은 글 감사합니다!"
          isMyComment={false}
        />
      </ul> */}

      {/* 2단계: map으로 리팩토링 */}
      <ul className="h flex flex-col gap-2">
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
