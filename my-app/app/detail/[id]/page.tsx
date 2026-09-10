import { getPostingDetail } from "@/apis/posting";

const Detail = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const { data: posting } = await getPostingDetail(id);

  return (
    <main>
      <h2>{posting.title}</h2>
      <p>{posting.content}</p>
    </main>
  );
};
export default Detail;
