const PostArticle = ({ post }) => {
  return (
    <article className="flex w-full flex-col gap-3 rounded-lg bg-white p-[30px]">
      {/*게시물 작성자 정보*/}
      <header className="flex items-center gap-2">
        <img
          src="/images/profile.png"
          alt="profile"
          className="h-11 w-11 rounded-full object-cover"
        />

        <div className="flex flex-col">
          <h3 className="text-sm font-semibold text-black">likelion2026</h3>
          <p className="text-gray-2 text-xs">
            {post?.date && new Date(post.date).toLocaleDateString}
          </p>
        </div>
      </header>
      {/*게시물 제목*/}
      <h1 className="text-[32px] leading-10 font-semibold text-black">
        {post?.title}
      </h1>
      {/*해시태그 목록*/}
      <ul className="flex gap-2">
        {post?.tags.map((tag, index) => (
          <li
            key={index}
            className="bg-main-2 text-main-1 rounded-[3px] px-3 py-2 text-xs"
          >
            {tag}
          </li>
        ))}
      </ul>
      {/*게시물 본문*/}
      <p className="text-gray-1 mt-4 mb-4 text-base leading-5 font-normal">
        {post?.body}
      </p>
      {/*게시물 이미지*/}
      <div className="border-gray-3 overflow-hidden rounded-lg border">
        <img
          src="/images/photo.png"
          alt="photo"
          className="aspect-square w-full object-cover"
        />
      </div>
      {/*좋아요/댓글 버튼 영역*/}
      <footer className="flex items-center gap-4">
        <button className="text-gray-2 mt-8 mb-4 flex items-center gap-1 text-sm">
          <img src="/icons/like.svg" alt="like" />0
        </button>
        <button className="text-gray-2 mt-8 mb-4 flex items-center gap-1 text-sm">
          <img src="/icons/comment.svg" alt="comment" />0
        </button>
      </footer>
    </article>
  );
};

export default PostArticle;
