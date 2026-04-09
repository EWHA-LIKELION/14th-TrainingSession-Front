import { useParams } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import PostArticle from "./PostArticle";
import CommentSection from "./CommentSection";

function PostDetailPage() {
  const { id } = useParams();

  return (
    <div className="bg-grey-4 min-h-screen">
      <PageHeader />
      <main className="flex flex-col items-center gap-10 pt-[2.8125rem] pb-[6.88081rem]">
        <div className="flex w-[46.9375rem] flex-col items-start gap-3 rounded-lg bg-white p-[1.875rem]">
          <PostArticle id={id} />
        </div>
        <div className="flex w-[46.9375rem] flex-col items-start gap-[1.75rem] rounded-lg bg-white p-[1.875rem]">
          <CommentSection />
        </div>
      </main>
    </div>
  );
}

export default PostDetailPage;
