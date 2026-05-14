const tags = ["#태그", "#태그"];

const PostArticle = ({ post }) => {
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
          <p className="text-gray-2 font- self-stretch text-xs">
            {post?.date && new Date(post.date).toLocaleDateString()}
          </p>
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
        {post?.body}
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
