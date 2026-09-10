import { getPostingList } from "@/apis/posting";
import Link from "next/link";
import Image from "next/image";
import likelionSymbol from "@/public/images/likelion-symbol.png";

export const dynamic = "force-dynamic";

const List = async () => {
  const { data: postings } = await getPostingList();

  return (
    <main>
      <Image
        src={likelionSymbol}
        alt="멋쟁이사자처럼 심볼"
        placeholder="blur"
      />
      <ul>
        {postings.map((item) => (
          <li key={item.id}>
            <Link href={`/detail/${item.id}`}>
              <h4>{item.title}</h4>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};
export default List;
