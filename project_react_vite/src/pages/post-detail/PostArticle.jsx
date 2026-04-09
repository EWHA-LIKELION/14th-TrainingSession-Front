const tags = ["#태그", "#태그"];

const posts = [
  { id: "1", title: "HTML & CSS 심화 과제" },
  { id: "2", title: "React Hook 정리" },
];

const PostArticle = ({ id }) => {
  const post = posts.find((p) => p.id === id);

  return (
    <article className="flex w-187.75 flex-col items-start rounded-lg bg-white p-7.5">
      <header className="flex flex-row gap-2">
        <img
          src="/images/profile.png"
          alt="profile"
          className="aspect-square h-11.25 w-11.25 rounded-[45px]"
        />
        <div className="flex flex-col items-start gap-1">
          <h3 className="text-center text-base font-semibold text-black">
            likelion2026
          </h3>
          <p className="text-gray-2 font- self-stretch text-xs">2026.MM.DD</p>
        </div>
      </header>

      <h1 className="mt-5 self-stretch text-[32px] font-semibold text-black">
        {post?.title}
      </h1>

      <ul className="mt-4 flex items-center gap-2">
        {tags.map((tag, index) => (
          <li
            key={index}
            className="bg-main-2 text-main-1 flex items-center rounded-xs px-3 py-2 text-xs font-medium"
          >
            {tag}
          </li>
        ))}
      </ul>

      <p className="text-gray-1 mt-7.5 self-stretch text-base font-normal">
        이것은 본문입니다. 여기에 더 많은 텍스트가 들어갈 수 있습니다. 게시물의
        내용은 여러 단락으로 구성될 수 있으며, 다양한 주제에 대해 이야기할 수
        있습니다.
        <br />
        <br />두 번째 단락입니다. 여기에는 더 많은 정보와 세부 사항이 포함될 수
        있습니다.
      </p>

      <img
        src="/images/photo.png"
        alt="photo"
        className="border-gray-2 mt-7.5 aspect-square h-172.5 w-172.5 rounded-lg border-[0.5px]"
      />

      <footer className="mt-11 flex items-center gap-4">
        <button className="text-gray-1 flex flex-row gap-1 text-center text-base font-normal">
          <img src="/icons/like.svg" alt="like" />0
        </button>
        <button className="text-gray-1 flex flex-row gap-1 text-center text-base font-normal">
          <img src="/icons/comment.svg" alt="comment" />0
        </button>
      </footer>
    </article>
  );
};

export default PostArticle;
