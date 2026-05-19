const tags = ["#태그", "#태그"];

const PostArticle = ({ post }) => {
  return (
    <article className="gap-11">
      <div className="flex flex-col items-start justify-start gap-7 self-stretch">
        <div className="flex flex-col items-start justify-start gap-5 self-stretch">
          <header className="inline-flex items-center justify-start gap-2">
            {/* <h1>{post?.title}</h1> */}

            <div className="inline-flex items-center justify-start gap-2">
              <img
                className="h-11 w-11 rounded-full"
                src="/images/profile.png"
              />
              <div className="inline-flex w-24 flex-col items-start justify-start gap-1">
                <div className="text-Black justify-center text-center font-['Pretendard'] text-base leading-5 font-semibold">
                  likelion2026
                </div>
                <div className="text-Gray-2 justify-center self-stretch font-['Pretendard'] text-xs leading-4 font-medium">
                  {post?.date && new Date(post.date).toLocaleDateString()}
                </div>
              </div>
            </div>
          </header>

          <div className="flex flex-col items-start justify-start gap-3 self-stretch">
            <div className="flex flex-col items-start justify-start gap-7 self-stretch">
              <div className="flex flex-col items-start justify-start gap-4 self-stretch">
                <h1 className="text-Black justify-center self-stretch font-['Pretendard'] text-3xl leading-10 font-semibold">
                  {post?.title}
                </h1>

                <ul className="flex gap-2">
                  {tags.map((tags, index) => (
                    <li
                      className="bg-Main-2 text-Main-1 rounded-sm px-3 py-1 text-xs"
                      key={index}
                    >
                      {tags}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-Gray-1 justify-center self-stretch font-['Pretendard'] text-base leading-5 font-normal">
                {post?.body}
              </div>
            </div>
          </div>
        </div>

        <img
          className="outline-Gray-2 relative h-[690px] w-[690px] rounded-lg outline outline-[0.50px] outline-offset-[-0.25px]"
          src="/images/photo.png"
        />
      </div>
      <footer className="mt-11 inline-flex items-center justify-start gap-4">
        <div className="flex items-center justify-start gap-1">
          <div className="inline-flex items-center justify-start gap-1">
            <img src="/icons/like.svg" />
            <span className="text-Gray-2 justify-start text-center font-['Pretendard'] text-base leading-5 font-normal">
              0
            </span>
          </div>
          <div className="inline-flex items-center justify-start gap-1">
            <img src="/icons/comment.svg" />
            <span className="text-Gray-2 justify-start text-center font-['Pretendard'] text-base leading-5 font-normal">
              0
            </span>
          </div>
        </div>
      </footer>
    </article>
  );
};

export default PostArticle;
