import CommentItem from "./CommentItem";
import { useEffect, useState } from "react";
import { useToastStore } from "../../Store/useToastStore";
import type { Comment } from "../../types/post";

interface CommentSectionProps {
  comments?: Comment[];
}

const CommentSection = ({ comments }: CommentSectionProps) => {
  const showToast = useToastStore((state) => state.showToast);

  const [comment, setComment] = useState("");

  useEffect(() => {
    console.log("현재 글자 수:", comment.length);
  }, [comment]);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault(); // 폼 제출 후 페이지 새로고침 발생되는 것 막음
    //console.log("sss");
    showToast("alert", "로그인 후 입력하세요");
  };

  //textarea 값 변경 이벤트
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  return (
    <section className="mx-auto w-full">
      <div className="justify-center">
        <span className="text-Black font-['Pretendard'] text-2xl leading-8 font-semibold">
          댓글
        </span>
        <span className="gap-2"> </span>
        <span className="text-Gray-1 font-['Pretendard'] text-2xl leading-8 font-semibold">
          n
        </span>
      </div>
      <form onSubmit={handleSubmit} className="flex-1 gap-2 p-2">
        <div className="flex flex-row gap-2">
          <img src="/images/profile.png" className="h-11 w-11 rounded-full" />
          <div className="border-Gray-2 flex items-center justify-start self-stretch rounded-lg border px-4 py-3">
            <textarea
              className="text-Gray-2 w-96 justify-start font-['Pretendard'] text-base leading-5 font-normal outline-none"
              value={comment}
              //onChange={(e) => setComment(e.target.value)}

              onChange={handleChange}
              //이벤트 핸들러를 함수로 분리하면 자동 추론이 안 되므로, e(이벤트) 타입을 직접 정의
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
            //onClick={handleSubmit}
          >
            댓글 작성
          </button>
        </div>
      </form>

      <ul>
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
