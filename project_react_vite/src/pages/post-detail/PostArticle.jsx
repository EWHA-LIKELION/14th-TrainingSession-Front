const tags = ["#태그", "#태그"];

const PostArticle = ()  => {
    return (
        <article>
        {/*게시물 작성자 정보*/}
        <header>
          <img src="./images/profile.png" alt="profile" />
          <div>
            <h3>likelion2026</h3>
            <p>2026.MM.DD</p>
          </div>
        </header>
        {/*게시물 제목*/}
        <h1>게시물 제목입니다.</h1>
        {/*해시태그 목록*/}
        <ul>
            {tags.map((tag, index) => (
                <li key={index}>{tag}</li>
            ))}
        </ul>
        {/*게시물 본문*/}
        <p>
          이것은 본문입니다. 여기에 더 많은 텍스트가 들어갈 수 있습니다.
          게시물의 내용은 여러 단락으로 구성될 수 있으며, 다양한 주제에 대해
          이야기할 수 있습니다.
          <br />
          <br />
          두 번째 단락입니다. 여기에는 더 많은 정보와 세부 사항이 포함될 수
          있습니다.
        </p>
        {/*게시물 이미지*/}
        <img src="/public/images/photo.png" alt="photo" />
        {/*좋아요/댓글 버튼 영역*/}
        <footer>
          <button>
            <img src="/public/icons/like.svg" alt="like" />
            0
          </button>
          <button>
            <img src="/public/icons/comment.svg" alt="comment" />
            0
          </button>
        </footer>
      </article>
    );
};

export default PostArticle;