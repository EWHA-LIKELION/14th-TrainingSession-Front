import PageHeader from '../../components/PageHeader';
import PostArticle from './PostArticle';
import CommentSection from './CommentSection';

function PostDetailPage() {
  return (
    <div>
      <PageHeader />
      <PostArticle />
      <CommentSection />
    </div>
  );
}

export default PostDetailPage;