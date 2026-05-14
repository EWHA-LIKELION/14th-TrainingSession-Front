import PostDetailPage from "./pages/post-detail/PostDetailPage";
import { Routes, Route, Navigate } from "react-router-dom";
import useToastStore from "./store/useToastStore";
import { ToastManager } from "./components/Toast";

function App() {
  const { text, type, isOpen, closeToast } = useToastStore();

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/post/1" replace />} />
        <Route path="/post/:id" element={<PostDetailPage />} />
      </Routes>

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
