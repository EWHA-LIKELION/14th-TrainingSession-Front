import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostDetailPage from "./pages/post-detail/PostDetailPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/post/:id" element={<PostDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
