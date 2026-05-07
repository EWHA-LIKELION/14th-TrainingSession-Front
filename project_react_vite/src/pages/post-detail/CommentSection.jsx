import CommentItem from "./CommentItem";
import { useEffect, useState } from "react";
import useToastStore from "../../store/useToastStore";

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
  const showToast = useToastStore((state) => state.showToast);
  useEffect(() => {
    console.log("현재 글자 수:", comment.length);
  }, [comment]);

  const handleSubmit = (e) => {
    e.preventDefault(); // 폼 제출 후 페이지 새로고침 발생되는 것 막음
    showToast("로그인 후 댓글을 입력할 수 있어요", "alert");
    setComment("");
  };
  return (
    <section className="flex w-full flex-col gap-7 rounded-lg bg-white p-7.5">
      <div className="flex items-center gap-1 text-2xl leading-8 font-semibold text-black">
        <span>댓글</span>
        <span className="text-gray-1 text-2xl leading-8 font-semibold">
          {comments.length}
        </span>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div className="flex items-start gap-3">
          <img
            src="/images/profile.png"
            alt="profile"
            className="mt-1 h-11.25 w-11.25 shrink-0 rounded-full object-cover"
          />

          <div className="border-gray-2 flex flex-1 items-center rounded-lg border px-4 py-3">
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="댓글을 입력하세요."
              required
              maxLength={100}
              className="placeholder:text-gray-2 h-15.25 flex-1 resize-none bg-transparent text-sm text-black outline-none"
            ></textarea>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-gray-2 text-sm font-medium">
            {comment.length} / 100
          </div>

          <button
            disabled={comment.length === 0}
            type="submit"
            className="bg-gray-2 flex h-[35px] items-center justify-center rounded-lg px-5 text-sm leading-none font-semibold whitespace-nowrap text-white disabled:cursor-not-allowed disabled:opacity-100"
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
