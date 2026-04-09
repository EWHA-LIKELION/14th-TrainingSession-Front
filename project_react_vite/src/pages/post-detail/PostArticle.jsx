const posts = [
  {
    id: "1",
    title: "Tailwindcss 실습!",
    tags: ["#멋사", "#사랑해"],
  },
  {
    id: "2",
    title: "두 번째 페이지 연결하기~",
    tags: ["#두번째 태그는", "#이렇게 바뀝니다"],
  },
];
const PostArticle = ({ id }) => {
  const post = posts.find((p) => p.id === id);
  return (
    <article className="flex w-full flex-col gap-3 rounded-lg bg-white p-[30px]">
      {/*게시물 작성자 정보*/}
      <header className="flex items-center gap-2">
        <img src="/images/profile.png" alt="profile" className="h-11 w-11 rounded-full object-cover"/>
        <div className="flex flex-col">
          <h3 className="text-sm font-semibold text-black">likelion2026</h3>
          <p className="text-xs text-gray-2">2026. MM. DD</p>
        </div>
      </header>
      {/*게시물 제목*/}
      <h1 className="text-[32px] font-semibold leading-10 text-black">{post?.title}</h1>
      {/*해시태그 목록*/}
      <ul className="flex gap-2">
        {post?.tags.map((tag, index) => (
          <li key={index} className="rounded-[3px] bg-main-2 px-3 py-2 text-xs text-main-1">{tag}</li>
        ))}
      </ul>
      {/*게시물 본문*/}
      <p className="text-base font-normal leading-5 text-gray-1 mt-4 mb-4">
        이것은 본문입니다. 여기에 더 많은 텍스트가 들어갈 수 있습니다. 게시물의
        내용은 여러 단락으로 구성될 수 있으며, 다양한 주제에 대해 이야기할 수
        있습니다.
        <br />
        <br />두 번째 단락입니다. 여기에는 더 많은 정보와 세부 사항이 포함될 수
        있습니다.
      </p>
      {/*게시물 이미지*/}<div className="overflow-hidden rounded-lg border border-gray-3">
      <img src="/images/photo.png" alt="photo" className="aspect-square w-full object-cover"/>
      </div>
      {/*좋아요/댓글 버튼 영역*/}
      <footer className="flex items-center gap-4">
        <button className="flex items-center gap-1 text-sm text-gray-2 mt-8 mb-4">
          <img src="/icons/like.svg" alt="like"/>0
        </button>
        <button className="flex items-center gap-1 text-sm text-gray-2 mt-8 mb-4">
          <img src="/icons/comment.svg" alt="comment" />0
        </button>
      </footer>
    </article>
  );
};

export default PostArticle;
