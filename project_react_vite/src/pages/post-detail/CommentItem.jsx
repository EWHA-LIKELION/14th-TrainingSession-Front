const CommentItem = ({ 
    author = "작성자", 
    date = "0000. 00. 00. 00:00", 
    content = "댓글 내용",
    isMyComment
}) => {
    return (
        <div>
                <img src="/images/profile.png" alt="profile"/>
                <div>
                    <div>
                        <div>
                            <span>{author}</span>
                            <span>{date}</span>
                        </div>
                        {isMyComment ? (
                            <div>
                                <button>수정</button>
                                <button>삭제</button>
                            </div>
                        ) : null}
                    </div>
                    <p>{content}</p>
                </div>
        </div>
        
    );
};

export default CommentItem;