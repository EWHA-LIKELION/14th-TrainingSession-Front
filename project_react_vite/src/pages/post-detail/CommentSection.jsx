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

import { use, useState } from "react";
import { useEffect } from "react";



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
                    value = {comment} // hooks 실습1: hook으로 관리하는 comment 상태값을 textarea의 value로 설정
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="댓글을 입력하세요." required>
                    </textarea>
                    <div>{comment.length}/100</div> {/* hooks 실습2: 글자 수 제한 100자라고 가정 */}
                    
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
                        isMyComment={comment.isMyComment}
                    />

                ))}
            </ul>
        </section>
        
    );
};

export default CommentSection;