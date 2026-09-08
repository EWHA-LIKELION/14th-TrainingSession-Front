import type { Post } from "../../types/post";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import PostArticle from "./PostArticle";
import CommentSection from "./CommentSection";

import { useQuery } from "@tanstack/react-query";
import api from "../../api";

function PostDetailPage() {
  const { id } = useParams();

  // 처음엔 데이터가 없으니 null, 받아오면 Post 가 들어옴 → Post | null
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    if (!id) return; // id 가 없으면 요청하지 않음 (간단한 방어)

    const fetchPost = async () => {
      try {
        const data = await getPost(id);

        setPost(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPost();
  }, [id]);

  const { data: post } = useQuery({
    queryKey: ["post", id],
    queryFn: async () => {
      const response = await api.get(`/blog/${id}`);
      return response.data;
    },
  });

  return (
    <div className="bg-grey-4 min-h-screen">
      <PageHeader />
      <main className="flex flex-col items-center gap-10 pt-[2.8125rem] pb-[6.88081rem]">
        <div className="flex w-[46.9375rem] flex-col items-start gap-3 rounded-lg bg-white p-[1.875rem]">
          <PostArticle post={post} />{" "}
        </div>
        <div className="flex w-[46.9375rem] flex-col items-start gap-[1.75rem] rounded-lg bg-white p-[1.875rem]">
          <CommentSection comments={post?.comments} />
        </div>
      </main>
    </div>
  );
}

export default PostDetailPage;
