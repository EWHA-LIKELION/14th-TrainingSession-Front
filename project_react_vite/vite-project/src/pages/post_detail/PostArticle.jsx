const tags = ["#태그", "#태그"];

const PostArticle = () => {
  return (
    <article>
      <header>
        <div>
          <img src="./images/profile.png" />
          <div>
            <div>
              <div>likelion2026</div>
              <div>2026. DD. MM</div>
            </div>
          </div>
        </div>
      </header>

      <h1>게시물 제목입니다.</h1>
      <ul>
        {tags.map((tags, index) => (
          <li key={index}>{tags}</li>
        ))}
      </ul>

      <div>
        이것은 본문입니다. 여기에 더 많은 텍스트가 들어갈 수 있습니다. 게시물의
        내용은 여러 단락으로 구성될 수 있으며, 다양한 주제에 대해 이야기할 수
        있습니다.
      </div>

      <div>
        두 번째 단락입니다. 여기에는 더 많은 정보와 세부 사항이 포함될 수
        있습니다.
      </div>
      <br />
      <img src="./images/photo.png" />

      <footer>
        <div>
          <div>
            <img src="./icons/like.svg" />
            <span>0</span>
          </div>
          <div>
            <img src="./icons/comment.svg" />
            <span>0</span>
          </div>
        </div>
      </footer>
    </article>
  );
};

export default PostArticle;
