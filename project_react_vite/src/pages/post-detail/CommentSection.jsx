import CommentItem from "./CommentItem";
import { useEffect, useState } from "react";
import useToastStore from "../../store/useToastStore";

const CommentSection = ({ comments = [] }) => {

  const [comment, setComment] = useState("");

  const showToast = useToastStore((state) => state.showToast);

  useEffect(() => {
    console.log("현재 글자 수:", comment.length);
  }, [comment]);

  const handleSubmit = (e) => {
    e.preventDefault();
    showToast("로그인 후 댓글을 입력할 수 있어요.", "alert");
  };

  return (
    
    <section className="flex flex-col gap-5">
      <div className="text-lg font-semibold text-black">
        댓글
        <span className="ml-1 text-main-1">{comments.length}</span>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-end gap-3 rounded-lg border border-gray-3 bg-gray-4 p-4"
      >
        <div className="flex w-full gap-3">
          <img
            src="/images/profile.png"
            alt="profile"
            className="h-10 w-10 rounded-full"
          />

          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="댓글을 입력하세요."
            required
            maxLength={100}
            className="min-h-24 flex-1 resize-none bg-transparent text-sm outline-none"
          />
        </div>

        <div className="align-items: center;
flex: 1 0 0;
align-self: stretch;">
          <span className="text-sm text-gray-1">{comment.length}/100</span>

          <button
            disabled={comment.length === 0}
            type="submit"
            className="rounded-md bg-main-1 px-4 py-2 text-sm font-semibold text-white disabled:bg-gray-2"
          >
            댓글 작성
          </button>
        </div>
      </form>

      <ul className="flex flex-col">
        {comments?.map((comment) => (

          <CommentItem

          key={comment.id}

          author={comment.username}

          date={new
          Date(comment.created_at).toLocaleDateString()}

          content={comment.comment_text}

          isMyComment={comment.isMyComment}

          />
        
        ))}
         
      </ul>
    </section>
  );
};

export default CommentSection;