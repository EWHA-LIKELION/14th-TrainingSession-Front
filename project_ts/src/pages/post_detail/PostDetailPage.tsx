import { useParams } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import PostArticle from "./PostArticle";
import CommentSection from "./CommentSection";
import { useQuery } from "@tanstack/react-query";
import { api } from "../../api";
import type { Post } from "../../types/post";
import { useEffect, useState } from "react";
//import { axios } from "axios";

// 처음엔 데이터가 없으니 null, 받아오면 Post 가 들어옴 → Post | null

const [post, setPost] = useState<Post | null>(null);

const PostDetailPage = () => {
  const { id } = useParams();

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
    <>
      <PageHeader />
      <main className="bg-White inline-flex max-w-[751px] flex-col items-start justify-center gap-3 overflow-hidden rounded-lg p-7">
        <PostArticle post={post} />
        <CommentSection comments={post?.comments} />
      </main>
    </>
  );
};

export default PostDetailPage;
