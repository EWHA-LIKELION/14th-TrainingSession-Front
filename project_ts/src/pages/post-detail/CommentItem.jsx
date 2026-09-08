const CommentItem = ({
    author = "작성자", 
    date = "0000. 00. 00. 00:00", 
    content = "댓글 내용",
    isMyComment}) => {
    return (
      <li className="flex flex-col items-start w-[43.75rem] p-5 gap-3 bg-white">
        <header className="flex items-center justify-between self-stretch">
          <div className="flex items-center gap-2">
            <img src="/images/profile.png" alt="profile" className="shrink-0 w-[2.8125rem] h-[2.8125rem] aspect-square rounded-full object-cover bg-grey-3"/>
            <div className="flex flex-col items-start gap-1">
              <h5 className="text-black text-center font-pretendard text-base font-semibold leading-5">{author}</h5>
              <p className="text-grey-2 font-pretendard text-xs font-medium leading-4">{date}</p>
            </div>
          </div>
          {isMyComment ? (
          <div className="flex items-center gap-2 text-xs font-medium">
            <button className="flex justify-center items-center gap-2 text-grey-1 text-center font-pretendard text-sm font-medium leading-none tracking-normal">수정</button>
            <button className="flex justify-center items-center gap-2 text-error text-center font-pretendard text-sm font-medium leading-none tracking-normal">삭제</button>
           </div>
          ) : null}
              
        </header>
        <div className="flex flex-col items-start px-[3.25rem] gap-3 self-stretch max-w-[42.5rem]">
          <p className="text-black font-pretendard text-base font-normal leading-5">{content}</p>
        </div>
      </li>
          
    );
}

export default CommentItem;