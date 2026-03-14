const tags = ["#태그", "#태그"];

function PostArticle() {
  return (
    <article>
      <header>
        <img src="./images/profile.png" alt="profile" />
        <div>
          <h3>likelion2026</h3>
          <p>2026.MM.DD</p>
        </div>
      </header>

      <h1>게시물 제목입니다.</h1>

      <ul>
        {tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>

      <p>
        이것은 본문입니다. 여기에 더 많은 텍스트가 들어갈 수 있습니다. 게시물의
        내용은 여러 단락으로 구성될 수 있으며, 다양한 주제에 대해 이야기할 수
        있습니다.
        <br />
        <br />두 번째 단락입니다. 여기에는 더 많은 정보와 세부 사항이 포함될 수
        있습니다.
      </p>

      <img src="./images/photo.png" alt="photo" />

      <footer>
        <button>
          <img src="./icons/like.svg" alt="like" />0
        </button>
        <button>
          <img src="./icons/comment.svg" alt="comment" />0
        </button>
      </footer>
    </article>
  );
}

export default PostArticle;
