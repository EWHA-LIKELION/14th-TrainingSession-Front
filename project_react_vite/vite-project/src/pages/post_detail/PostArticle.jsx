const tags = ["#태그", "#태그"];
const posts = [{ id: "1" }, { id: "2" }];

const PostArticle = ({ id }) => {
  const post = posts.find((p) => p.id === id);
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
                  2026. DD. MM
                </div>
              </div>
            </div>
          </header>

          <div className="flex flex-col items-start justify-start gap-3 self-stretch">
            <div className="flex flex-col items-start justify-start gap-7 self-stretch">
              <div className="flex flex-col items-start justify-start gap-4 self-stretch">
                <h1 className="text-Black justify-center self-stretch font-['Pretendard'] text-3xl leading-10 font-semibold">
                  게시물 제목입니다.
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
                이것은 본문입니다. 여기에 더 많은 텍스트가 들어갈 수 있습니다.
                게시물의 내용은 여러 단락으로 구성될 수 있으며, 다양한 주제에
                대해 이야기할 수 있습니다.
              </div>

              <div className="text-Gray-1 justify-center self-stretch font-['Pretendard'] text-base leading-5 font-normal">
                두 번째 단락입니다. 여기에는 더 많은 정보와 세부 사항이 포함될
                수 있습니다.
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
