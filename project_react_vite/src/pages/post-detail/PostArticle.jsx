const tags = ["#태그", "#태그"];


const PostArticle = ({ post }) => {

  return (
    <article className="flex flex-col gap-6 rounded-xl bg-white p-6 shadow-sm">
      <header className="flex items-center gap-3">
        <img
          src="/images/profile.png"
          alt="profile"
          className="h-12 w-12 rounded-full"
        />

        <div className="text-black">
          <h3 className="font-semibold">likelion2026</h3>
          <p className="text-sm text-gray-1">{post?.date && new Date(post.date).toLocaleDateString()}</p>
        </div>
      </header>

      <h1 className="text-2xl font-bold text-black">
        {post?.title}
      </h1>

      <ul className="flex gap-2">
        {tags.map((tag, index) => (
          <li
            key={index}
            className="rounded-full bg-main-2 px-3 py-1 text-sm text-main-1"
          >
            {tag}
          </li>
        ))}
      </ul>

      <div className="space-y-4 text-black leading-7">
        <p>
          {post?.body}
        </p>
      </div>

      <div className="overflow-hidden rounded-xl">
        <img
          src="/images/photo.png"
          alt="post"
          className="w-full object-cover"
        />
      </div>

      <footer className="flex gap-4 border-t border-gray-3 pt-4">
        <button className="flex items-center gap-1 text-gray-1">
          <img src="/icons/like.svg" alt="like" />
          0
        </button>

        <button className="flex items-center gap-1 text-gray-1">
          <img src="/icons/comment.svg" alt="comment" />
          0
        </button>
      </footer>
    </article>
  );
};

export default PostArticle;