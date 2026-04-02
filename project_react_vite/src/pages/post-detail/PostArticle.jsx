import { useState } from 'react'; // 좋아요 기능 구현을 위해 UseState 불러오기

const tags = ["#태그", "#태그"];
const posts = [
    { 
        id: "1", 
        title: "신지민, 과제 제출 성황리에 마쳐...",
        date: "2026. 03. 16.",
        content: "3월 12일 교육 세션이 끝나고 과연 내가 이걸 할 수 있을까 싶었습니다. 시행착오도 많았고 지금 결과물로 제출하는 코드도 완벽하다고 생각하진 않지만... 어쨌든 제출했다는 사실 자체가 기쁘네요!! 예시 사진으로 주신 강아지 사진🐶이 너무 귀여워서 덕분에 힐링하며 과제했습니다.",
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
    const handleLikeClick = () => { // 좋아요 클릭 시 실행될 함수
        setLikeCount(likeCount + 1); // 현재 숫자에 +1
    };
    
    return (
        <article>
            <header>
                <div>
                    <img src="/images/profile.png" alt="프로필 사진" />
                    <div>
                        <h6><strong>TuttoShin</strong></h6>
                        {/* 고정된 날짜 대신 post 객체의 date 연결 */}
                        <p>{post?.date}</p>
                    </div>
                </div>
            </header>
            <section>
            {/*title 연결*/}
            <h1>{post?.title}</h1> {/* post가 존재할 때 title을 보여줌. "?"를 쓰는 이유: 타이틀이 없을 수도 있다! */}
            </section>

            {/* 전역 태그 대신, 해당 포스트의 postTags 배열을 map으로 순회 */}
            <ul>
                {post?.postTags.map((tag, index) => (
                    <li key={index}>{tag}</li>
                ))}
            </ul>


            <section>
                {/* content 연결 */}
                {post?.content}
                <br /><br />
                <img src="/images/photo.png" alt="본문 사진" />
            </section>
            <footer>
                <img 
                    src="/icons/like.svg" 
                    alt="좋아요" 
                    onClick={handleLikeClick} // 좋아요 아이콘 클릭 시 handleLikeClick 함수 실행
                    style={{ cursor: "pointer" }} // 좋아요 아이콘에 마우스 올렸을 때 포인터로 변경
                />

                <h6>{likeCount}</h6> {/* 고정된 0 대신 상태값 보이게!! */}
                <img src="/icons/comment.svg" alt="댓글" />
                <h6>0</h6>
            </footer>

        </article>

);

};

export default PostArticle;