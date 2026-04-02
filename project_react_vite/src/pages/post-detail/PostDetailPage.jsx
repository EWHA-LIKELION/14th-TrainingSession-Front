import { useParams } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import PostArticle from "./PostArticle";
import CommentSection from "./CommentSection";

function PostDetailPage() {
    const { id } = useParams();

    return (
        <>
            <PageHeader />
            <main>
                <PostArticle id={id} />
                <CommentSection postId={id} />
            </main>
        </>
    );
}

export default PostDetailPage;