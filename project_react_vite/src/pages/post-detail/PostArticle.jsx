const tags = ["#태그", "#태그"];

const PostArticle = () => {
    return (
        <div class="post-card">
            <div>
                <img src="/images/profile.png" />

                <div>
                    <span class="username">likelion2026</span>
                    <span class="date">2026.MM.DD</span>
                </div>
            </div>
    
            <article>

                <h1>HTML & CSS 심화 과제</h1>
            
                <ul>
                    {tags.map((tag, index) => (
                        <li key={index}>{tag}</li>
                    ))}
                </ul>
            
                <p>
                이것은 본문입니다. 여기에 더 많은 텍스트가 들어갈 수 있습니다. 게시물의 내용은 여러 단락으로 구성될 수 있으며, 다양한 주제에 대해 이야기할 수 있습니다.
                </p>

                <p>
                두 번째 단락입니다. 여기에는 더 많은 정보와 세부 사항이 포함될 수 있습니다.
                </p>

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