import { useParams } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import PostArticle from "./PostArticle";
import CommentSection from "./CommentSection";

import { useEffect, useState } from "react";
import api from "../../api";

function PostDetailPage() {
  const [post, setPost] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get(`/blog/${id}`);

        console.log(response.data); // 개발자 도구용

        setPost(response.data);
      } catch (error) {
        console.error(error); // 에러 시 메세지 출력
      }
    };

    fetchPosts();
  }, [id]); // id가 바뀌면 useEffect 다시 실행

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
