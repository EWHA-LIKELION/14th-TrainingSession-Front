import CommentItem from "./CommentItem";
import { useEffect, useState } from "react";

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
  useEffect(() => {
    console.log("현재 글자 수:", comment.length);
  }, [comment]);
  return (
    <section>
      <div>
        댓글
        <span>n</span>
      </div>

      <form action="submit_url">
        <div>
          <img src="/images/profile.png" alt="profile" />
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="댓글을 입력하세요."
            required
          ></textarea>
          <div>{comment.length} / 100</div>
        </div>
        <button disabled={comment.length === 0} type="submit">
          댓글 작성
        </button>
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
