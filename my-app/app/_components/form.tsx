// 작성 폼
"use client"; // onSubmit, useState/useRouter 등 이벤트/훅 사용을 위해 Client Component로 선언
import type Posting from "@/types/posting";
import { useRouter } from "next/navigation";
import { postPosting } from "@/apis/posting";
const Form = () => {
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData: FormData = new FormData(e.currentTarget);
    await postPosting(formData);
    router.push("/list"); // 작성 후 목록 페이지로 이동
  };
  return (
    <form onSubmit={handleSubmit}>
      {" "}
      <input type="text" name="title" placeholder="제목" required />{" "}
      <textarea name="content" placeholder="내용" required />{" "}
      <button type="submit">게시</button>{" "}
    </form>
  );
};
export default Form;
