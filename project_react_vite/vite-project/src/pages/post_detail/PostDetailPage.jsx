import { useParams } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import PostArticle from "./PostArticle";
import CommentSection from "./CommentSection";

function PostDetailPage() {
  const { id } = useParams();
  return (
    <>
      <PageHeader />
      <main className="bg-White inline-flex max-w-[751px] flex-col items-start justify-center gap-3 overflow-hidden rounded-lg p-7">
        <PostArticle id={id} />
        <CommentSection />
      </main>
    </>
  );
}

export default PostDetailPage;
