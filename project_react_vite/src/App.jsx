import PageHeader from "./components/PageHeader";
import PostArticle from "./components/PostArticle";
import CommentSection from "./components/CommentSection";

function App() {
  return (
    <>
      <PageHeader />
      <main>
        <PostArticle />
        <CommentSection />
      </main>
    </>
  );
}

export default App;
