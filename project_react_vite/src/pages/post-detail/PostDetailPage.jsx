import { useParams } from "react-router-dom"; // useParams는 URL의 매개변수에 접근할 수 있게 해줌
import PageHeader from "../../components/PageHeader"; // ../은 상위 폴더로 이동한다는 뜻
import PostArticle from "./PostArticle"; // ./은 같은 폴더 내에서 찾는다는 뜻
import CommentSection from "./CommentSection";

function PostDetailPage() {
  const { id } = useParams();
  {
    /* useParams를 사용하여 URL에서 id 매개변수를 추출. "구조 분해 할당" */
  }

  return (
    // min-h-screen: 화면 전체 높이
    // pt: 헤더 높이만큼 본문 아래로 밀어줌!
    <div className="min-h-screen bg-gray-3 pt-[65px] pb-20 flex flex-col items-center gap-4">
      <PageHeader />
      <main className="flex flex-col items-center mt-11.25 gap-10">
        <PostArticle id={id} /> {/* PostArticle 컴포넌트에 id prop 전달 */}
      </main>
      <CommentSection />
    </div>
  );
}

export default PostDetailPage;
