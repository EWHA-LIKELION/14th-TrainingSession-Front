import type Posting from "@/types/posting";
import { getPostingDetail } from "@/apis/posting";

const Detail = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const response = await getPostingDetail(id);
  const posting: Posting = await response.data;

  return (
    <main>
      <h2>{posting.title}</h2>
      <p>{posting.content}</p>
    </main>
  );
};

export default Detail;
