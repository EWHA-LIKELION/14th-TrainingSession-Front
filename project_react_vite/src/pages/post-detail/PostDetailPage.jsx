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
      <main className="mx-auto flex max-w-[811px] flex-col gap-10 px-[30px] pt-[45px] pb-[30px]">
        <PostArticle post={post} />
        <CommentSection comments={post?.comments} />
      </main>
    </>
  );
}

export default PostDetailPage;
