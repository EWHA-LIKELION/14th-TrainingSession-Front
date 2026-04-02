const tags = ["#태그", "#태그"];
const posts = [
    {id: "1", title: "HTML & CSS 심화 과제"},
    {id: "2", title: "Reaact Hook 정리"},
];

const PostArticle = ({id}) => {
    const post = posts.find((p) => p.id === id);

    return (
        <article>
            <header  class="container"> 
                <img src="./images/profile.png" class="profile-img" />
                <div class="writer-box">    
                    <h3>likelion2026</h3> 
                    <p>2026.MM.DD</p>  
                </div>
            </header> 
                <h1>{post?.title}</h1>
                <ul class="tag-box">
                </ul>
                <ul>
{tags.map((tag, index) => (
<li key={index}>{tag}</li>
))}
</ul>
                <div class="post-content">
                    <p>
                        이것은 본문입니다. 여기에 더 많은 텍스트가 들어갈 수 있습니다. 게시물의 내용은 여러 단락으로 구성될 수 있으며, 다양한 주제에 대해 이야기할 수 있습니다.
                    </p>
                    <br/>
                    <p>두 번째 단락입니다. 여기에는 더 많은 정보와 세부 사항이 포함될 수 있습니다.</p>
                </div>

                <div class="post-image">
                <img src="images/photo.png"/>
                </div>

                <footer class="article-footer">
                    <button><img src="./icons/like.svg" alt="like"/> 0</button>
                    <button><img src="./icons/comment.svg" alt="comment"/> 0</button>
                </footer>
        </article>
    );
};

export default PostArticle;