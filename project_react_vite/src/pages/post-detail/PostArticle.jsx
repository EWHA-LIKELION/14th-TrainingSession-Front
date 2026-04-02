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
      <article>
        {/* 게시물 작성자 정보 */}
        <header>
          <img src="/images/profile.png" alt="profile" />
          <div>
            <h3>{post?.author}</h3>
            <p>{post?.date}</p>
          </div>
        </header>
        {/* 게시물 제목 */}
        <h1>{post?.title}</h1>
        {/* 해시태그 목록 */}
        <ul style={{ display: 'flex', listStyle: 'none', gap: '10px', padding: 0 }}>
          {post.tags.map((tag, index) => (
            <li key={index}>#{tag}</li>
          ))}
        </ul>
        {/* 게시물 본문 */}
        <p>
          {post.content}
        </p>
        {/* 게시물 이미지 */}
        <img src="/images/photo.png" alt="photo" />
        {/* 좋아요, 댓글 버튼 영역 */}
        <footer>
          <button onClick={() => setLikeCount(likeCount+1)}>
            <img src="/icons/like.svg" alt="like" />
            {likeCount}
          </button>
          <button>
            <img src="/icons/comment.svg" alt="comment" />
            0
          </button>
        </footer>
      </article>
    );
}

export default PostArticle;