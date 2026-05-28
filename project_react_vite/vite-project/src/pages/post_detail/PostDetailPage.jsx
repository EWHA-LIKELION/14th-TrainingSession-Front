import { useParams } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import PostArticle from "./PostArticle";
import CommentSection from "./CommentSection";
import { useQuery } from "@tanstack/react-query";
import { api } from "../../api";

//import { axios } from "axios";
//import { useEffect, useState } from "react";

const PostDetailPage = () => {
  const { id } = useParams();

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
