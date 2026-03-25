import CommentItem from "./CommmentItem"

const comments = [
  { id: 1,
    author: "likelion2026",
    date: "2026. 03. 01. 18:36",
    content: "유익한 정보네요. 도움이 많이 되었습니다.",
    isMyComment: true,},
  { id: 2,
    author: "likelion2026",
    date: "2026. 03. 01. 12:48",
    content: "좋은 글 감사합니다!",
    isMyComment: false,},];

import { useState } from "react";

const CommentSection = () => {
    const [ comment, setComment ] = useState("");
    return (
      <section>
        <div>
          댓글
          <span>n</span>
        </div>
        
        <form action="submit_url">
          <div>
            <img src="./images/profile.png" alt="profile" />
            <textarea 
              onChange={(e) => {
                comment = setComment(e.target.value);
              }}
            placeholder="댓글을 입력하세요." required></textarea>
          </div>
          <button disabled = {comment.length === 0} type="submit">댓글 작성</button>
        </form>
        
        <ul>
         {comments.map((comment) => (
          <CommentItem
          key={comment.id}
          author={comment.author}
          date={comment.date}
          content={comment.content}
          isMyComment={comment.isMyComment}/>
          ))}
        </ul>
      </section>
    );
}

export default CommentSection;