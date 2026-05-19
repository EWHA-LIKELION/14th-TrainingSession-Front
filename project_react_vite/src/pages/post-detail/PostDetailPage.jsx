import { useParams } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import PostArticle from "./PostArticle";
import CommentSection from "./CommentSection";
import { useEffect, useState } from "react";
import api from "../../api";

function PostDetailPage() {
  const { id } = useParams();
  
const [ post, setPost] = useState(null);


useEffect(()=> {
    const fetchPosts = async () => {
        try{
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
    <div className="min-h-screen bg-gray-4 font-pretendard">
      <PageHeader />

      <main className="mx-auto flex max-w-3xl flex-col gap-6 px-5 py-8">
        <PostArticle post={post} />
        <CommentSection comments={post?.comments} />
      </main>
    </div>
  );
}

export default PostDetailPage;