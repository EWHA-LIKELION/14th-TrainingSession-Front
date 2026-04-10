const CommentItem = ({ 
    author = "작성자", 
    date = "0000. 00. 00. 00:00", 
    content = "댓글 내용",
    isMyComment
}) => {
    return (
        <div className="flex flex-col w-[700px]">
            <div className="flex gap-3 p-5">
                <img src="/images/profile.png" alt="profile" className="w-[45px] h-[45px] rounded-full aspect-square object-cover"/>
                <div className="flex flex-col gap-[10px] w-full">
                    <div className="flex items-center justify-between w-full">
                        <div className="flex flex-col gap-1">
                            <span className="text-black text-base font-semibold leading-5">{author}</span>
                            <span className="text-gray-2 text-xs font-medium leading-4">{date}</span>
                        </div>
                        {isMyComment ? (
                            <div className="flex gap-2">
                                <button className="text-gray-1 text-center text-sm font-medium leading-[14px] tracking-normal">수정</button>
                                <button className="text-error text-center text-sm font-medium leading-[14px] tracking-normal">삭제</button>
                            </div>
                        ) : null}
                    </div>
                    <p className="max-w-[680px] self-stretch text-base text-black font-normal leading-5">{content}</p>
                </div>
            </div>
            <div className="w-[380px] h-px bg-gray-3 mx-auto" />
        </div>
    );
};

export default CommentItem;