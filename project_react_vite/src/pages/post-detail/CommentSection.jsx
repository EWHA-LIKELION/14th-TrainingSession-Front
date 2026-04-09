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
    <section>
      <div>
        댓글
        <span>2</span>
      </div>

      <form action="submit_url">
        <div>
          <img src="/images/profile.png" alt="profile" />
          <textarea
            value={comment}
            // onChange={(e) => {
            //   comment = e.target.value;
            // }}
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
