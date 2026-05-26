import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import api from "../../api";
import PageHeader from "../../components/PageHeader";
import PostArticle from "./PostArticle";
import CommentSection from "./CommentSection";

const PostDetailPage = () => {
  const { id } = useParams();

  const { data: post } = useQuery({
    queryKey: ["post", id],
    queryFn: async () => {
      const response = await api.get(`/blog/${id}`);
      return response.data;
    },
  });

  return (
    <div className="flex flex-col items-center justify-center">
      <PageHeader />
      <main className="bg-gray-4 mt-11.25 mb-27.5 flex flex-col justify-center gap-10">
        <PostArticle post={post} />
        <CommentSection comments={post?.comments} />
      </main>
    </div>
  );
};

export default PostDetailPage;
