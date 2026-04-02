const tags = ["#태그", "#태그"];

const posts = [
    { 
        id: "1", 
        title: "HTML & CSS 심화 과제",
        content: "이것은 HTML & CSS 내용입니다.",
        tags: ["HTML", "CSS"] 
    },
    { 
        id: "2", 
        title: "React & Hook 정리",
        content: "React & Hook 내용입니다.",
        tags: ["React", "Hook"]
    }
];

const PostArticle = ({ id }) => {
    const post = posts.find((p) => p.id === id);
    return (
        <div className="post-card">
            <div>
                <img src="/images/profile.png" />

                <div>
                    <span className="username">likelion2026</span>
                    <span className="date">2026.MM.DD</span>
                </div>
            </div>
    
            <article>

                <h1>{post?.title}</h1>
            
                <ul> 
                    {post.tags.map((tag, index) => (
                        <li key={index}>#{tag}</li>
                    ))}
                </ul>
            
                <p>{post.content}</p>

                <img src="/images/photo.png" alt="게시글 사진" />
            </article>

            <div>
                <div>
                    <img src="/icons/like.svg" />
                    <span>0</span>
                </div>

                <div>
                    <img src="/icons/comment.svg" />
                    <span>0</span>
                </div>
            </div>
        </div>
    );
};

export default PostArticle;