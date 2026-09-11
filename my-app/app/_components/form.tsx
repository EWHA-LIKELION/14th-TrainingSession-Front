"use client";

import { useRouter } from "next/navigation";
import { postPosting } from "@/apis/posting";

const Form = () => {
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData: FormData = new FormData(e.currentTarget);
    await postPosting(formData);
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
