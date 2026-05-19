import CommentItem from "./CommentItem";
import { useState, useEffect } from "react";
import { useToastStore } from "../../store/useToastStore";

// 구조 분해 할당
const CommentSection = ({ comments }) => {
  const [comment, setComment] = useState("");
  useEffect(() => {
    console.log("현재 글자 수:", comment.length);
  }, [comment]);

  // Store Hook 호출
  const showToast = useToastStore((state) => state.showToast);

  const handleSubmit = (e) => {
    e.preventDefault(); // 폼 제출 후 페이지 새로고침 발생되는 것 막음
    showToast("로그인 후 댓글을 입력할 수 있어요", "alert");
  };

  return (
    <section className="bg-white w-172 p-7.5 rounded-lg flex flex-col gap-6">
      <div className="flex items-center gap-2">
        {/* 댓글 텍스트 */}
        <h2 className="text-2xl font-semibold leading-8 text-black">댓글</h2>
        {/* 댓글 수 n */}
        <span className="text-2xl font-semibold leading-8 text-gray-1">
          {comments?.length || 0}
        </span>
      </div>

      <form
        action="submit_url"
        onSubmit={handleSubmit}
        className="flex flex-col gap-3"
      >
        <div className="flex items-center self-stretch gap-3">
          <img
            src="/images/profile.png"
            alt="profile"
            className="w-10 h-10 rounded-full mb-11"
          />
          <div className="w-158.5 h-21 flex-1 flex py-3 px-4 items-center border border-gray-2 rounded-lg">
            <textarea
              className="w-full -mt-3 text-base font-normal leading-5 text-black placeholder:text-gray-2 outline-none resize-none overflow-hidden whitespace-nowrap text-ellipsis"
              value={comment} // hooks 실습1: hook으로 관리하는 comment 상태값을 textarea의 value로 설정
              onChange={(e) => setComment(e.target.value)}
              placeholder="댓글을 입력하세요."
              required
            ></textarea>
            <div className="text-base font-normal leading-5 text-gray-2 self-end">
              {comment.length}/100
            </div>{" "}
            {/* hooks 실습2: 글자 수 제한 100자라고 가정 */}
          </div>
        </div>
        <button
          type="submit"
          className="self-end h-8 px-5 flex items-center justify-center gap-2.5 rounded-lg bg-gray-2 transition-colors hover:bg-gray-1"
        >
          <span className="text-base font-semibold leading-6 text-white">
            댓글 작성
          </span>
        </button>
      </form>

      <ul className="flex flex-col -mt-2">
        {/* API에서 받아온 comments 배열을 map으로 순회하면서 CommentItem
        컴포넌트 렌더링 */}
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
