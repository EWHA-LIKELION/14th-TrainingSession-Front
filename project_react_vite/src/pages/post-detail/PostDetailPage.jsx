import { useParams } from "react-router-dom";
import PageHeader from "../../components/PageHeader"
import PostArticle from "./PostArticle";
import CommentSection from "./CommentSection";

function PostDetailPage() {
  const {id} = useParams();

    return (
      <div className="min-h-screen bg-grey-4">
      <PageHeader/>
      <main className="flex flex-col items-center pt-[2.8125rem] pb-[6.88081rem] gap-10">
        <div className="flex flex-col items-start gap-3 w-[46.9375rem] p-[1.875rem] rounded-lg bg-white">
          <PostArticle id={id}/>
        </div>
        <div className="flex flex-col items-start w-[46.9375rem] p-[1.875rem] gap-[1.75rem] bg-white rounded-lg">
          <CommentSection />
        </div>
      </main>
      </div>
    )
  }
  
  export default PostDetailPage