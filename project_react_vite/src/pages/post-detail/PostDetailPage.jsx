import { useParams } from "react-router-dom"; // useParams는 URL의 매개변수에 접근할 수 있게 해줌
import { useQuery } from "@tanstack/react-query"; // useQuery는 데이터를 가져오고 캐싱하는 데 사용되는 React Query의 훅
import PageHeader from "../../components/PageHeader"; // ../은 상위 폴더로 이동한다는 뜻
import PostArticle from "./PostArticle"; // ./은 같은 폴더 내에서 찾는다는 뜻
import CommentSection from "./CommentSection";

// API 연동
import { useEffect, useState } from "react";
import api from "../../api"; // api.js에서 export한 axios 인스턴스 불러오기

function PostDetailPage() {
  // useParams를 사용하여 URL에서 id 매개변수를 추출. "구조 분해 할당"
  const { id } = useParams();

  // useQuery를 사용하여 API에서 게시물 데이터를 가져옴.
  // queryKey는 캐싱과 관련된 고유한 키로, "post"와 id를 조합하여 사용. queryFn은 데이터를 가져오는 함수로,
  // axios 인스턴스를 사용하여 API 요청을 보내고 응답 데이터를 반환.
  const { data: post } = useQuery({
    queryKey: ["post", id],

    queryFn: async () => {
      const response = await api.get(`/blog/${id}`);

      return response.data;
    },
  });

  return (
    // min-h-screen: 화면 전체 높이
    // pt: 헤더 높이만큼 본문 아래로 밀어줌!
    <div className="min-h-screen bg-gray-3 pt-16 pb-20 flex flex-col items-center gap-4">
      <PageHeader />
      <main className="flex flex-col items-center mt-11.25 gap-10">
        <PostArticle post={post} />{" "}
        {/* API에서 받아온 post 데이터를 PostArticle 컴포넌트에 전달 */}
        <CommentSection comments={post?.comments} />
      </main>
    </div>
  );
}

export default PostDetailPage;
