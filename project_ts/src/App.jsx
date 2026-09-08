import { Routes, Route } from "react-router-dom"; // BrowserRouter는 main.jsx에서!
import PostDetailPage from "./pages/post-detail/PostDetailPage";

// 전역 상태 관리
import { useToastStore } from "./store/useToastStore";
import { ToastManager } from "./components/Toast";

function App() {
  const { isOpen, text, type, closeToast } = useToastStore();

  return (
    <>
      <Routes>
        <Route path="/post/:id" element={<PostDetailPage />} />{" "}
        {/* Routing 실습: /post 경로로 접속하면 PostDetailPage 컴포넌트가 렌더링되도록 설정 */}
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
