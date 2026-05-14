import { useParams } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import PostArticle from "./PostArticle";
import CommentSection from "./CommentSection";

function PostDetailPage() {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-gray-4 font-pretendard">
      <PageHeader />

      <main className="mx-auto flex max-w-3xl flex-col gap-6 px-5 py-8">
        <PostArticle id={id} />
        <CommentSection />
      </main>
    </div>
  );
}

export default PostDetailPage;