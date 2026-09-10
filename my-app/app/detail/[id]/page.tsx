import type Posting from "@/types/posting";
import { getPostingDetail, getPostingList } from "@/apis/posting";

const Detail = async ({
  params,
}: {
  params: Promise<{ id: string; searchParams: string }>;
}) => {
  const { id } = await params;
};

export default Detail;