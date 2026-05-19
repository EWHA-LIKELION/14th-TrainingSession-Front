import { useParams } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import PostArticle from "./PostArticle";
import CommentSection from "./CommentSection";

import { useEffect, useState } from "react";

import axios from "axios";

function PostDetailPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/blog/${id}`,
        );

        console.log(response.data);

        setPost(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPosts();
  }, [id]);

  return (
    <>
      <PageHeader />
      <main className="bg-White inline-flex max-w-[751px] flex-col items-start justify-center gap-3 overflow-hidden rounded-lg p-7">
        <PostArticle post={post} />
        <CommentSection comments={post?.comments} />
      </main>
    </>
  );
}

export default PostDetailPage;
