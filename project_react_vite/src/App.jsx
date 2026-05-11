import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostDetailPage from "./pages/post-detail/PostDetailPage";

// 전역 상태 관리
import useToastStore from "./store/useToastStore";
import { ToastManager } from "./components/Toast";

function App() {
  const { type, text, isOpen, closeToast } = useToastStore();

  return (
    <>
      <Routes>
        <Route path="/post/:id" element={<PostDetailPage />} />
      </Routes>

      {/* 토스트 */}
      <ToastManager
        type={type}
        text={text}
        isOpen={isOpen}
        onClose={closeToast}
      />
    </>
  );
}

export default App;
