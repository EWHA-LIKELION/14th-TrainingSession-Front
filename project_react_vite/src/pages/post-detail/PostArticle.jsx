import { useState } from "react";

const PostArticle = ({ post }) => {
  const [likeCount, setLikeCount] = useState(0); // 좋아요 수 세기

  if (!post) return <div>게시물을 찾을 수 없습니다.</div>;

  return (
    <article className="flex w-full flex-col items-start self-stretch bg-white p-5">
      {/* 게시물 작성자 정보 */}
      <header className="flex items-center gap-2 self-stretch">
        <img
          className="aspect-square h-[2.8125rem] w-[2.8125rem] shrink-0 rounded-full bg-gray-200 object-cover"
          src="/images/profile.png"
          alt="profile"
        />
        <div className="flex w-[5.9375rem] shrink-0 flex-col items-start gap-1">
          <h3 className="font-pretendard w-full truncate text-base leading-5 font-semibold text-black">
            {post?.author}
          </h3>
          <p className="text-grey-2 font-pretendard self-stretch truncate text-xs leading-4 font-medium">
            {post?.date && new Date(post.date).toLocaleDateString()}
          </p>
        </div>
      </header>
      {/* 게시물 제목 */}
      <div className="mt-5 flex flex-col items-start gap-4 self-stretch">
        <h1 className="font-pretendard self-stretch text-4xl leading-10 font-semibold text-black">
          {post?.title}
        </h1>
        {/* 해시태그 목록 */}
        <ul className="flex items-center gap-2">
          {post?.tags?.map((tag, index) => (
            <li
              className="bg-main-2 text-main-1 font-pretendard flex h-[1.74419rem] items-center gap-1 rounded-[0.17444rem] px-3 py-2 text-center text-xs leading-4 font-medium"
              key={index}
            >
              #{tag}
            </li>
          ))}
        </ul>
      </div>
      {/* 게시물 본문 */}
      <p className="text-grey-1 font-pretendard my-[1.875rem] self-stretch text-base leading-5 font-normal">
        {post?.body}
      </p>
      {/* 게시물 이미지 */}
      <img
        className="border-grey-2 bg-lightgray aspect-square h-[43.125rem] w-[43.125rem] rounded-lg border-[0.5px] object-cover object-center"
        src="/images/photo.png"
        alt="photo"
      />

      {/* 좋아요, 댓글 버튼 영역 */}
      <footer className="mt-11 flex items-center gap-4 self-stretch">
        <button
          className="text-grey-2 font-pretendard flex items-center gap-1 text-center text-base leading-5 font-normal"
          onClick={() => setLikeCount(likeCount + 1)}
        >
          <img
            src="/icons/like.svg"
            alt="like"
            className="aspect-square h-5 w-5"
          />
          {likeCount}
        </button>
        <button className="text-grey-2 font-pretendard flex items-center gap-1 text-center text-base leading-5 font-normal">
          <img
            src="/icons/comment.svg"
            alt="comment"
            className="aspect-square h-5 w-5"
          />
          0
        </button>
      </footer>
    </article>
  );
};

export default PostArticle;
