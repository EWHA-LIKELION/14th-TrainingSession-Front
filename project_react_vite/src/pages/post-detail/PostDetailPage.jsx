import { useParams } from "react-router-dom"; // useParams는 URL의 매개변수에 접근할 수 있게 해줌
import PageHeader from "../../components/PageHeader"; // ../은 상위 폴더로 이동한다는 뜻
import PostArticle from "./PostArticle"; // ./은 같은 폴더 내에서 찾는다는 뜻
import CommentSection from "./CommentSection";

// API 연동
import { useEffect, useState } from "react";
import axios from "axios";

function PostDetailPage() {
  //1.  useState 훅을 사용하여 post 상태값과 setPost 함수를 초기화
  const [post, setPost] = useState(null);

  const { id } = useParams();
  // useParams를 사용하여 URL에서 id 매개변수를 추출. "구조 분해 할당"

  //2. 컴포넌트가 마운트될 때 API에서 게시물 데이터를 가져옴
  // 현재는 Method가 받아오는 GET이라서 body는 필요없음
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // 호출
        const response = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/blog/${id}`,
        );

        console.log(response.data); // 원래 없어도 되지만, 개발자 도구에서 확인하려고 사용

        setPost(response.data);
      } catch (error) {
        console.error(error); // 문제가 생기면 콘솔에 에러 메시지 출력
      }
    };

    fetchPosts();
  }, [id]); // id가 바뀔 때마다 이 useEffect가 다시 실행됨

  return (
    // min-h-screen: 화면 전체 높이
    // pt: 헤더 높이만큼 본문 아래로 밀어줌!
    <div className="min-h-screen bg-gray-3 pt-16 pb-20 flex flex-col items-center gap-4">
      <PageHeader />
      <main className="flex flex-col items-center mt-11.25 gap-10">
        <PostArticle post={post} />{" "}
        {/* API에서 받아온 post 데이터를 PostArticle 컴포넌트에 전달 */}
        <CommentSection comments={post?.comments} />
      </main>
    </div>
  );
}

export default PostDetailPage;
