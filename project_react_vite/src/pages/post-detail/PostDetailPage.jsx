import { useParams } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import PostArticle from "./PostArticle";
import CommentSection from "./CommentSection";
import { useQuery } from "@tanstack/react-query";
import api from "../../api";

function PostDetailPage() {
  const { id } = useParams();

  const { data: post } = useQuery({
    queryKey: ["post", id],
    queryFn: async () => {
      const response = await api.get(`/blog/${id}`);
      return response.data;
    },
  });

  return (
    <>
      <PageHeader />
      <main className="bg-gray-4 flex min-h-screen flex-col items-center px-4 py-6">
        <div className="flex w-full max-w-[751px] flex-col gap-[45px]">
          <PostArticle post={post} />
          <CommentSection comments={post?.comments} />
        </div>
      </main>
    </>
  );
}

export default PostDetailPage;
