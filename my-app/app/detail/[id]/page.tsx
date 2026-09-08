import Image from "next/image";
import likelionSymbol from "@/public/images/likelion-symbol.png";
import type Posting from "@/types/posting";
import { getPostingDetail, getPostingList } from "@/apis/posting";

const Detail = async ({
  params,
}: {
  params: Promise<{ id: string; searchParams: string }>;
}) => {
  const { id } = await params;
  const response = await getPostingDetail(id);
  const posting: Posting = response.data;

  return (
    <main>
      <Image
        src={likelionSymbol}
        alt="멋쟁이사자처럼 심볼"
        placeholder="blur"
      />
      <h2>{posting.title}</h2>

      <p>{posting.content}</p>
    </main>
  );
};

export default Detail;
