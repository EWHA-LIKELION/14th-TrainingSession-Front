import PageHeader from "./components/PageHeader";
import PostArticle from "./components/pages/PostArticle";
import CommentSection from "./components/pages/post-detail/CommentSection";

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

export default App
