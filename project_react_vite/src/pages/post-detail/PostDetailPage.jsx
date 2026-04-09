import { useParams } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import PostArticle from "./PostArticle";
import CommentSection from "./CommentSection";

function PostDetailPage() {
  const { id } = useParams();
  return (
    <>
      <PageHeader />
      <main className="min-h-screen bg-gray-4 flex flex-col items-center px-4 py-6">
        <div className="flex w-full max-w-[751px] flex-col gap-[45px]">
          <PostArticle id={id} />
          <CommentSection />
        </div>
      </main>
    </>
  );
}
export default PostDetailPage;
