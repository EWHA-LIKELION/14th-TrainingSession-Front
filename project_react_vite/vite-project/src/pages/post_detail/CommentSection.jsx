import CommentItem from "./CommentItem";
import { useState } from "react";

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
  return (
    <section>
      <span>댓글</span>
      <span>n</span>
      <form>
        <div>
          <img src="/images/profile.png" />
          <textarea
            onChange={(e) => setComment(e.target.value)}
            placeholder="댓글을 입력하세요."
            required
          ></textarea>
        </div>
        <div>
          <button disabled={comment.length === 0} type="submit">
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
