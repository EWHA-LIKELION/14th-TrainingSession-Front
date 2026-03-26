const tags = ["#태그", "#태그"];

const PostArticle = () => {
    return (
        <article>

            <header>
                <div>
                    <img src="/images/profile.png" alt="프로필 사진" />
                    <div>
                        <h6><strong>TuttoShin</strong></h6>
                        <p>2026.03.16</p>
                    </div>
                </div>
            </header>
            <section>
                <h1>신지민, 과제 제출 성황리에 마쳐...</h1>
            </section>

            {/* 태그 목록 */}
            <ul>
                {tags.map((tag, index) => (
                <li key={index}>{tag}</li>
            ))}
            </ul>


            <section>
                3월 12일 교육 세션이 끝나고 과연 내가 이걸 할 수 있을까 싶었습니다. 시행착오도 많았고 지금 결과물로 제출하는 코드도 완벽하다고 생각하진 않지만... 어쨌든 제출했다는 사실 자체가 기쁘네요!! <br /><br />
                예시 사진으로 주신 강아지 사진🐶이 너무 귀여워서 덕분에 힐링하며 과제했습니다. <br />
                <img src="/images/photo.png" alt="본문 사진" />
            </section>
            <footer>
                <img src="/icons/like.svg" alt="좋아요" />
                <h6>0</h6>
                <img src="/icons/comment.svg" alt="댓글" />
                <h6>0</h6>
            </footer>

        </article>

);

};

export default PostArticle;