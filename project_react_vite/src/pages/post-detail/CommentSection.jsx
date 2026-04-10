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
        <section className="flex flex-col items-start p-[30px] gap-7 rounded-lg bg-white w-[751px]">
            <h3 className="text-black text-2xl font-semibold leading-8">
                댓글 <span className="text-gray-1 text-2xl font-semibold leading-8">{commentList.length}</span>
            </h3>

            <div className="flex items-start self-stretch w-full gap-3">
                <img src="/images/profile.png" className="w-[45px] h-[45px] rounded-full aspect-square object-cover"/>
                <textarea 
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="댓글을 입력하세요"
                    className="flex items-center px-4 py-3 flex-1 self-stretch overflow-hidden text-gray-2 text-base font-normal leading-5 text-ellipsis whitespace-nowrap border border-gray-2 rounded-lg min-h-[100px] resize-none"
                />
            </div>

            <div className="flex justify-end items-center gap-3 w-full">
                <span className="text-gray-2 text-xs">{comment.length} / 100</span>
                <button 
                    disabled={comment.length === 0}
                    className="flex justify-center items-center h-[35px] px-5 py-3 gap-[10px] rounded-lg bg-gray-2 text-white text-center text-base font-semibold leading-6 tracking-normal disabled:opacity-50"
                >
                    댓글 작성
                </button>
            </div>

            <ul className="flex flex-col items-start w-[700px] bg-white">
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