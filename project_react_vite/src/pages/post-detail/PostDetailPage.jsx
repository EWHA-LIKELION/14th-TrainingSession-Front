import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import PageHeader from "../../components/PageHeader";
import PostArticle from "./PostArticle";
import CommentSection from "./CommentSection";
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

      <main className="mx-auto flex max-w-[811px] flex-col gap-10 px-[30px] pt-[45px] pb-[30px]">
        <PostArticle post={post} />
        <CommentSection comments={post?.comments} />
      </main>
    </>
  );
}

export default PostDetailPage;
