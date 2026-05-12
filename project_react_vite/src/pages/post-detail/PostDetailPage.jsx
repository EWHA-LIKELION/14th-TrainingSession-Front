import { useParams } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import PostArticle from "./PostArticle";
import CommentSection from "./CommentSection";

const PostDetailPage = () => {
  const { id } = useParams();

  return (
    <div className="flex flex-col items-center justify-center">
      <PageHeader />
      <main className="bg-gray-4 mt-11.25 mb-27.5 flex flex-col justify-center gap-10">
        <PostArticle id={id} />
        <CommentSection />
      </main>
    </div>
  );
};

export default PostDetailPage;
