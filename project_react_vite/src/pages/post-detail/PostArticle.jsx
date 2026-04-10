import { useState } from "react"; // 좋아요 기능 구현을 위해 UseState 불러오기

const tags = ["#태그", "#태그"];
const posts = [
  {
    id: "1",
    title: "신지민, 과제 제출 성황리에 마쳐...",
    date: "2026. 03. 16.",
    content:
      "3월 12일 교육 세션이 끝나고 과연 내가 이걸 할 수 있을까 싶었습니다. 시행착오도 많았고 지금 결과물로 제출하는 코드도 완벽하다고 생각하진 않지만... 어쨌든 제출했다는 사실 자체가 기쁘네요!! 예시 사진으로 주신 강아지 사진🐶이 너무 귀여워서 덕분에 힐링하며 과제했습니다.",
    postTags: ["#HTML", "#CSS", "#교육세션"],
  },
  {
    id: "2",
    title: "어느덧 React Hook 공부까지!",
    date: "2026. 03. 31.",
    content: "드디어 진짜 웹페이지를 만드는 것 같아 두근두근 합니다!!!🤩",
    postTags: ["#JavaScript", "#React", "#프론트엔드"],
  },
];

const PostArticle = ({ id }) => {
  const post = posts.find((p) => p.id === id); // posts 배열에서 id가 일치하는 게시물을 찾음
  const [likeCount, setLikeCount] = useState(0); // 좋아요 수 상태 관리 (초깃값은 0)
  const handleLikeClick = () => {
    // 좋아요 클릭 시 실행될 함수
    setLikeCount(likeCount + 1); // 현재 숫자에 +1
  };

  return (
    <article className="bg-white w-[691px] min-h-[1043px] p-7.5 rounded-lg flex flex-col">
      <header className="flex items-center self-stretch gap-2.5">
        <div className="flex items-center gap-2">
          <img
            src="/images/profile.png"
            alt="프로필 사진"
            className="w-11.25 h-11.25 rounded-full object-cover"
          />
          <div className="flex flex-col items-start self-stretch justify-center">
            <h6 className="text-base font-semibold leading-5 text-black">
              TuttoShin
            </h6>
            {/* 고정된 날짜 대신 post 객체의 date 연결 */}
            <p className="text-sm font-medium leading-4 text-gray-2 self-stretch">
              {post?.date}
            </p>
          </div>
        </div>
      </header>
      <section className="mt-6 self-stretch">
        {/*title 연결*/}
        <h1 className="text-[32px] font-semibold leading-10 text-black">
          {post?.title}
        </h1>{" "}
        {/* post가 존재할 때 title을 보여줌. "?"를 쓰는 이유: 타이틀이 없을 수도 있다! */}
      </section>

      {/* 전역 태그 대신, 해당 포스트의 postTags 배열을 map으로 순회 */}
      <ul className="flex gap-1 mt-4">
        {post?.postTags.map((tag, index) => (
          <li
            key={index}
            className="flex h-7 py-2 px-3 items-center justify-center bg-main-2 rounded-[3px]"
          >
            <span className="text-main-1 text-center text-xs font-semibold leading-4">
              {tag}
            </span>
          </li>
        ))}
      </ul>

      <section className="mt-8 self-stretch flex-grow text-base font-normal leading-5 text-gray-1">
        {/* content 연결 */}
        <p className="whitespace-pre-wrap">{post?.content}</p>

        <div className="mt-6 w-full h-full rounded-lg border-[0.5px] border-gray-3 overflow-hidden">
          {/* img 태그에 rounded 넣지 말고 div 태그 하나 더 만들어!! */}
          <img
            src="/images/photo.png"
            alt="본문 사진"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
      <footer className="mt-10 flex items-center gap-4">
        <div className="flex items-center gap-1.5">
          <img
            src="/icons/like.svg"
            alt="좋아요"
            onClick={handleLikeClick} // 좋아요 아이콘 클릭 시 handleLikeClick 함수 실행
            className="w-5 h-5 cursor-pointer" // 좋아요 아이콘에 마우스 올렸을 때 포인터로 변경
          />
          <h6 className="text-base font-normal leading-5 text-gray-2">
            {likeCount}
          </h6>{" "}
          {/* 고정된 0 대신 상태값 보이게!! */}
        </div>
        <img
          src="/icons/comment.svg"
          alt="댓글"
          className="w-5 h-5 cursor-pointer"
        />
        <h6 className="text-base font-normal leading-5 text-gray-2 -ml-2">0</h6>
      </footer>
    </article>
  );
};

export default PostArticle;
