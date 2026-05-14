const PostArticle = ({ post }) => {
  return (
    <div className="flex w-[751px] flex-col items-start gap-5 rounded-lg bg-white p-[30px]">
      <div className="flex items-center gap-3">
        <img
          src="/images/profile.png"
          className="aspect-square h-[45px] w-[45px] rounded-full object-cover"
        />

        <div className="flex flex-col">
          <span className="text-center text-base leading-5 font-semibold text-black">
            likelion2026
          </span>
          <span className="text-gray-2 self-stretch text-xs leading-4 font-medium">
            {post?.date && new Date(post.date).toLocaleDateString()}
          </span>
        </div>
      </div>

      <article className="flex flex-col self-stretch">
        <h1 className="mb-4 self-stretch text-[32px] leading-10 font-semibold text-black">
          {post?.title}
        </h1>

        <ul className="mb-[30px] flex gap-2">
          {post?.tags?.map((tag, index) => (
            <li
              key={index}
              className="bg-main-2 text-main-1 flex items-center gap-1 rounded px-3 py-2 text-sm"
            >
              #{tag}
            </li>
          ))}
        </ul>

        <p className="text-gray-1 mb-[30px] self-stretch text-base leading-5 font-normal">
          {post?.body}
        </p>

        <img
          src="/images/photo.png"
          alt="게시글 사진"
          className="border-gray-2 mb-11 aspect-square w-full rounded-lg border-[0.5px] object-cover"
        />
      </article>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          <img src="/icons/like.svg" className="aspect-square h-5 w-5" />
          <span className="text-gray-2 text-center text-base leading-5 font-normal">
            0
          </span>
        </div>

        <div className="flex items-center gap-1">
          <img src="/icons/comment.svg" className="aspect-square h-5 w-5" />
          <span className="text-gray-2 text-center text-base leading-5 font-normal">
            0
          </span>
        </div>
      </div>
    </div>
  );
};

export default PostArticle;
