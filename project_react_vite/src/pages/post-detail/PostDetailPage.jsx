import PageHeader from "../../components/PageHeader";
import PostArticle from "./PostArticle";
import CommentSection from "./CommentSection";

const PostDetailPage = () => {
  return (
    <>
      <PageHeader />
      <main>
        <PostArticle />
        <CommentSection />
      </main>
    </>
  );
};

export default PostDetailPage;
