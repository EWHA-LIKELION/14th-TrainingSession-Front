import { useParams } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import PostArticle from "./PostArticle";
import CommentSection from "./CommentSection";
import { useEffect, useState } from "react";
import api from "../../api";

function PostDetailPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get(`/blog/${id}`);
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
