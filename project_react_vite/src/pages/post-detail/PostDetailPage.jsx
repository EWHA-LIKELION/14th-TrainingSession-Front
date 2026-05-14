import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import PageHeader from "../../components/PageHeader";
import PostArticle from "./PostArticle";
import CommentSection from "./CommentSection";

const PostDetailPage = () => {
  const { id } = useParams();

  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
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
