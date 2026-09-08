import type Posting from "@/types/posting";
import { getPostingList } from "@/apis/posting";
import Link from "next/link";

const List = async () => {
  const response = await getPostingList();
  const postings: Posting[] = response.data;

  return (
    <ul>
      {postings.map((item) => (
        <li key={item.id}>
          <Link href={`/detail/${item.id}`}>
            <h4>{item.title}</h4>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default List;
