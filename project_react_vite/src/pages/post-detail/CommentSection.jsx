import CommentItem from "./CommentItem";
import { useState, useEffect } from "react";

// 1. 전역 상태 관리 스토어 임포트
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

const CommentSection = ({ postId }) => {
  const [comment, setComment] = useState("");
  const [commentList, setCommentList] = useState(comments);

  // 2. 스토어에서 showToast 함수 가져오기
  const showToast = useToastStore((state) => state.showToast);

  // 3. 버튼 클릭 시 실행될 함수 정의
  const handleSubmit = (e) => {
    // 토스트 띄우기 (문구, 타입)
    e.preventDefault();
    showToast("로그인 후 댓글을 입력할 수 있어요", "alert");
  };

  useEffect(() => {
    console.log("현재 글자 수:", comment.length);
  }, [comment]);

  return (
    <section className="flex w-[751px] flex-col items-start gap-7 rounded-lg bg-white p-[30px]">
      <h3 className="text-2xl leading-8 font-semibold text-black">
        댓글{" "}
        <span className="text-gray-1 text-2xl leading-8 font-semibold">
          {commentList.length}
        </span>
      </h3>

      <div className="flex w-full items-start gap-3 self-stretch">
        <img
          src="/images/profile.png"
          className="aspect-square h-[45px] w-[45px] rounded-full object-cover"
          alt="profile"
        />
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="댓글을 입력하세요"
          className="text-gray-2 border-gray-2 flex min-h-[100px] flex-1 resize-none items-center self-stretch overflow-hidden rounded-lg border px-4 py-3 text-base leading-5 font-normal"
        />
      </div>

      <div className="flex w-full items-center justify-end gap-3">
        <span className="text-gray-2 text-xs">{comment.length} / 100</span>
        <button
          // 4. onClick 이벤트 연결
          onClick={handleSubmit}
          disabled={comment.length === 0}
          className="bg-gray-2 flex h-[35px] items-center justify-center gap-[10px] rounded-lg px-5 py-3 text-center text-base leading-6 font-semibold tracking-normal text-white disabled:opacity-50"
        >
          댓글 작성
        </button>
      </div>

      <ul className="flex w-[700px] flex-col items-start bg-white">
        {commentList.map((c) => (
          <CommentItem
            key={c.id}
            author={c.author}
            date={c.date}
            content={c.content}
            isMyComment={c.isMyComment}
          />
        ))}
      </ul>
    </section>
  );
};

export default CommentSection;
