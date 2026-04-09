import { useParams } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import PostArticle from "./PostArticle";
import CommentSection from "./CommentSection";

function PostDetailPage() {
    const { id } = useParams();

    return (
        <>
            <PageHeader />
            <main className="max-w-[811px] mx-auto px-[30px] pt-[45px] pb-[30px] flex flex-col gap-10">
                <PostArticle id={id} />
                <CommentSection postId={id} />
            </main>
        </>
    );
}

export default PostDetailPage;