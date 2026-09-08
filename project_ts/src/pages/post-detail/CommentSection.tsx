import { useState, useEffect } from "react";
import CommentItem from "./CommentItem";
import useToastStore from "../../store/useToastStore";
import type { Comment } from "../../types/post";

// ⭐ 이 컴포넌트가 받는 props 의 형태를 정의합니다.
//    comments 는 로딩 중엔 없을 수 있으니 optional(?) 로 둡니다.
interface CommentSectionProps {
  comments?: Comment[];
}

const CommentSection = ({ comments }: CommentSectionProps) => {
  const [comment, setComment] = useState("");
  const showToast = useToastStore((state) => state.showToast);

  // comment 가 바뀔 때마다 실행
  useEffect(() => {
    console.log("현재 글자 수:", comment.length);
  }, [comment]);

  // ⭐ 핸들러를 함수로 분리하면 e 의 타입을 직접 적어줘야 합니다.
  //    form 제출 이벤트 → React.SyntheticEvent
  //    (React 19 부터 FormEvent 는 deprecated. preventDefault 만 쓰면 SyntheticEvent 로 충분)
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    showToast("로그인 후 댓글을 입력할 수 있어요", "alert");
  };

  //    textarea 값 변경 이벤트 → React.ChangeEvent<HTMLTextAreaElement>
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  return (
    <section className="flex w-187.75 flex-col items-start gap-7 rounded-lg bg-white p-7.5">
      <div className="flex gap-1 text-2xl font-semibold text-black">
        댓글
        <span className="text-gray-1 text-2xl font-semibold">2</span>
      </div>

      <form
        onSubmit={handleSubmit}
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
            onChange={handleChange}
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
            className={`flex items-center justify-center rounded-lg px-5 py-1.5 text-center text-base font-semibold text-white ${comment.length === 0 ? "bg-gray-2" : "bg-[#00BC7D]"}`}
          >
            댓글 작성
          </button>
        </div>
      </form>

      {/* map 으로 댓글 목록 렌더링 */}
      <ul className="flex flex-col gap-2">
        {comments?.map((comment) => (
          <CommentItem
            key={comment.id}
            author={comment.username}
            date={new Date(comment.created_at).toLocaleDateString()}
            content={comment.comment_text}
            isMyComment={comment.isMyComment}
          />
        ))}
      </ul>
    </section>
  );
};

export default CommentSection;
