"use client"; // 클라이언트 컴포넌트 -> use Hook 같은 거 쓰려면!! 필요함
// _를 앞에 붙이는 이유는 해당 폴더를 url로 사용하지 않겠다는 의미.
// page.tsx 파일을 안 만들면 상관없긴 하지만,,,

import type Posting from "@/types/posting";
import { useRouter } from "next/navigation";
import { postPosting } from "@/apis/posting";

const Form = () => {
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData: FormData = new FormData(e.currentTarget);

    await postPosting(formData); // 인터셉터 에러 처리 했으니까 try catch 필요 xx

    router.push("/list");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="제목" required />

      <textarea name="content" placeholder="내용" required />

      <button type="submit">게시</button>
    </form>
  );
};

export default Form;
