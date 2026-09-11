// Dynamic Routes ([id]) 게시글 상세 페이지
import type Posting from "@/types/posting";
import { getPostingDetail } from "@/apis/posting";

const Detail = async ({
  params,
}: {
  // Next.js 15+: params는 Promise이므로 await 필요
  params: Promise<{ id: string; searchParams: string }>;
}) => {
  const { id } = await params;
  const response = await getPostingDetail(id);
  const posting: Posting = response.data;

  return (
    <main>
      <h2>{posting.title}</h2> <p>{posting.content}</p>
    </main>
  );
};
export default Detail;
