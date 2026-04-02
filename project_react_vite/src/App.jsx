import PostDetailPage from "./pages/post-detail/PostDetailPage";
import { BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
  
      <Routes>
        <Route path ="/post/:id" element={<PostDetailPage/>}/>
      </Routes>
 
  );
}

export default App;
