// 게시글 목록 페이지
import type Posting from "@/types/posting";
import { getPostingList } from "@/apis/posting"; // API 함수로 목록 조회
import Image from "next/image"; // next/image 최적화 이미지
import likelionSymbol from "@/public/images/likelion-symbol.png";

import Link from "next/link"; // Link 컴포넌트로 상세 페이지 이동

const List = async () => {
  const response = await getPostingList();
  const postings: Posting[] = response.data;

  return (
    <main>
      <Image src={likelionSymbol} alt="likelion-symbol" placeholder="blur" />
      <ul>
        {postings.map((item) => (
          <li key={item.id}>
            {/* 절대 경로(/detail/...) 사용: 상대 경로는 현재 라우트에 따라 깨질 수 있음 */}
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
