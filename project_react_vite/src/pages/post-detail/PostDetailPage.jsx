import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { getPost } from "@/api/post";

import PageHeader from "@/components/PageHeader";
import PostArticle from "./PostArticle";
import CommentSection from "./CommentSection";

const PostDetailPage = () => {
  const { id } = useParams();

  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await getPost(id);

        console.log(data);

        setPost(data);
      } catch (error) {
        // 인터셉터에서 정리한 에러 객체가 넘어옵니다.
        console.error(error.message);
      }
    };

    fetchPost();
  }, [id]);

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
