import React from 'react';
import CommentItem from "./CommentItem"
import { useState, useEffect } from "react";


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


const CommentSection = () => {
    const [ comment, setComment ] = useState("");
    useEffect(()=>{
      console.log("현재 글자 수:",comment.length);
    },[comment])
    return (
     
      <section className="flex h-[29.125rem] flex-col justify-between items-start self-stretch">
        <div className="flex flex-col items-start gap-7 self-stretch">
          <div className="text-black font-pretendard text-2xl font-semibold leading-8">
            댓글{' '}
            <span className="text-grey-1 font-pretendard text-2xl font-semibold leading-8">n</span>
          </div>
        
          <form className="flex flex-col items-end gap-5 self-stretch w-full" action="submit_url">
            <div className="flex h-[5.3125rem] items-start gap-3 self-stretch w-full">
              <div className="w-[2.8125rem] h-[2.8125rem] rounded-full overflow-hidden shrink-0 bg-grey-3">
                <img className="w-full h-full object-cover" src="/images/profile.png" alt="profile" />
              </div>
              <textarea className="flex-1 self-stretch p-[0.75rem_1rem] rounded-lg border border-grey-2 bg-white outline-none focus:border-main-1 transition-colors resize-none font-pretendard placeholder:text-grey-2 placeholder:overflow-hidden placeholder:text-ellipsis placeholder:whitespace-nowrap text-base font-normal leading-5"
              onChange={(e) => setComment(e.target.value)}
              placeholder="댓글을 입력하세요." required></textarea>
            </div>

            <button className={`flex h-[2.1875rem] px-5 py-3 justify-center items-center gap-2.5 rounded-lg font-pretendard text-[1rem] font-normal leading-5 text-white
            ${comment.length === 0 ? 'bg-grey-2' : 'bg-main-1'}`}
            disabled = {comment.length === 0} type="submit">댓글 작성</button>
          </form>
        </div>
        
        <ul className="flex flex-col items-center gap-2 self-stretch w-full">
         {comments.map((comment, index) => (
          <React.Fragment key={comment.id}>
          <CommentItem
          key={comment.id}
          author={comment.author}
          date={comment.date}
          content={comment.content}
          isMyComment={comment.isMyComment}/>
          {index !== comments.length - 1 && (
          <div className="w-[23.75rem] border-b border-grey-2" />
        )}
          </React.Fragment>
          ))}
        </ul>
      </section>
    );
}

export default CommentSection;