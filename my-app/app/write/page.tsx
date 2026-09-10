// 게시글 작성 페이지 - 실제 폼 로직은 Client Component인 Form에 위임
import Form from "@/app/_components/form";

const Write = () => {
  return (
    <main>
      {" "}
      <h5>게시물 작성하기</h5> <Form />
    </main>
  );
};

export default Write;
