import {useState} from "react"
const posts = [
  {id: '1', title: "HTML & CSS 심화 과제", content: "맥날 감튀 먹고싶다", 
    author: "아기사자", date:"2026.03.31", tags: ["HTML", "CSS", "맥도날드"]},
  {id: '2', title: "React Hook 정리", content: "멋사 파이팅 멋사 사랑해",
     author: "멋쟁이사자", date:"2026.04.01", tags: ["React", "멋쟁이사자처럼", "아자뵤"]},
]

const PostArticle = ({id}) => {
    const post = posts.find((p)=>p.id===id);
    const [likeCount,setLikeCount] = useState(0); // 좋아요 수 세기

    if(!post) return <div>게시물을 찾을 수 없습니다.</div>

    return (
      <article className="flex flex-col items-start self-stretch w-full bg-white p-5">
        {/* 게시물 작성자 정보 */}
        <header className="flex items-center gap-2 self-stretch">
          <img className="w-[2.8125rem] h-[2.8125rem] aspect-square rounded-full object-cover shrink-0 bg-gray-200" src="/images/profile.png" alt="profile" />
          <div className="flex flex-col items-start gap-1 w-[5.9375rem] shrink-0">
            <h3 className="text-black font-pretendard text-base font-semibold leading-5 w-full truncate">{post?.author}</h3>
            <p className="text-grey-2 font-pretendard text-xs font-medium leading-4 self-stretch truncate">{post?.date}</p>
          </div>
        </header>
        {/* 게시물 제목 */}
        <div className="flex flex-col items-start gap-4 self-stretch mt-5">
        <h1 className="self-stretch text-black font-pretendard text-4xl font-semibold leading-10">{post?.title}</h1>
        {/* 해시태그 목록 */}
        <ul className="flex items-center gap-2">
          {post.tags.map((tag, index) => (
            <li className="flex items-center h-[1.74419rem] px-3 py-2 gap-1 bg-main-2 rounded-[0.17444rem] text-main-1 text-center font-pretendard text-xs font-medium leading-4" key={index}>#{tag}</li>
          ))}
        </ul>
        </div>
        {/* 게시물 본문 */}
        <p className="self-stretch my-[1.875rem] text-grey-1 font-pretendard text-base font-normal leading-5">
          {post.content}
        </p>
        {/* 게시물 이미지 */}
        <img className="w-[43.125rem] h-[43.125rem] aspect-square rounded-lg border-[0.5px] border-grey-2 bg-lightgray object-cover object-center" src="/images/photo.png" alt="photo" />
        
        {/* 좋아요, 댓글 버튼 영역 */}
        <footer className="flex items-center gap-4 self-stretch mt-11">
          <button className="flex items-center gap-1 text-grey-2 text-center font-pretendard text-base font-normal leading-5"
           onClick={() => setLikeCount(likeCount+1)}>
            <img src="/icons/like.svg" alt="like" className="w-5 h-5 aspect-square" />
            {likeCount}
          </button>
          <button className="flex items-center gap-1 text-grey-2 text-center font-pretendard text-base font-normal leading-5">
            <img src="/icons/comment.svg" alt="comment" className="w-5 h-5 aspect-square" />
            0
          </button>
        </footer>
      </article>
    );
}

export default PostArticle;