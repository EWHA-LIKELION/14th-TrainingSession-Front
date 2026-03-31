import CommentItem from "./CommentItem";
import { useState, useEffect } from "react";

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

    useEffect(() => {
        console.log("현재 글자 수:", comment.length);
    }, [comment]);

    return (
        <section>
            <h3>
                댓글 <span>{commentList.length}</span>
            </h3>

            <div>
                <img src="/images/profile.png" />
                <textarea 
                    value = {comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="댓글을 입력하세요"
                />
            </div> 

            <div>{comment.length} / 100</div>  
            <button disabled={comment.length === 0}>
                댓글 작성
            </button>

            <ul>
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