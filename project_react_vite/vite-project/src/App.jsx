import { Routes, Route } from "react-router-dom";
import PostDetailPage from "./pages/post_detail/PostDetailPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/post/:id" element={<PostDetailPage />} />
      </Routes>
    </>
  );
}

export default App;
