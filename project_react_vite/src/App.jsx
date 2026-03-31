import { Routes, Route } from 'react-router-dom'; // BrowserRouter는 main.jsx에서!
import PostDetailPage from './pages/post-detail/PostDetailPage';

function App() {

  return (
      <Routes>
        <Route path="/post/:id" element={<PostDetailPage />} /> {/* Routing 실습: /post 경로로 접속하면 PostDetailPage 컴포넌트가 렌더링되도록 설정 */}
      </Routes>
  );

}


export default App;