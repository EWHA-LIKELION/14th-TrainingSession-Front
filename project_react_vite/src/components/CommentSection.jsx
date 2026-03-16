import CommentItem from "./CommentItem";

const comments = [
  {
    id: 1,
    author: "likelion2026",
    date: "2026. 03. 01. 18:36",
    content: "유익한 정보네요. 도움이 많이 되었습니다.",
  },
  {
    id: 2,
    author: "likelion2026",
    date: "2026. 03. 01. 12:48",
    content: "좋은 글 감사합니다!",
  },
];

const CommentSection = () => {
  return (
    <section>
      <div>
        댓글
        <span>{comments.length}</span>
      </div>

      <form action="submit_url">
        <div>
          <img src="./images/profile.png" alt="profile" />
          <textarea placeholder="댓글을 입력하세요." required></textarea>
        </div>
        <button type="submit">댓글 작성</button>
      </form>

      <ul>
        {comments.map((comment) => (
          <CommentItem
            key={comment.id}
            author={comment.author}
            date={comment.date}
            content={comment.content}
          />
        ))}
      </ul>
    </section>
  );
};

export default CommentSection;
