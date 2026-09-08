import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { getPost } from "../../api/post";
import type { Post } from "../../types/post";

import PageHeader from "../../components/PageHeader";
import PostArticle from "./PostArticle";
import CommentSection from "./CommentSection";

const PostDetailPage = () => {
  const { id } = useParams();

  // ⭐ 앞에서 정의한 Post 타입을 여기서 사용합니다.
  //    처음엔 데이터가 없으니 null, 받아오면 Post 가 들어옵니다. → Post | null
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    if (!id) return; // id 가 없으면 요청하지 않습니다.

    const fetchPost = async () => {
      try {
        const data = await getPost(id);

        console.log(data);

        setPost(data);
      } catch (error) {
        console.error(error);
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
