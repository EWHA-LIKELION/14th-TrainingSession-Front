import PageHeader from "./components/PageHeader";
import PostArticle from "./pages/PostArticle";
import CommentSection from "./pages/CommentSection";

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