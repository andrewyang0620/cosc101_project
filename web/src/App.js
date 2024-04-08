import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage/Home';
import Center from './pages/CenterPage/Center';
import News from './pages/NewsPage/NewsPage';
import DetailPages from './pages/CenterPage/DetailPages';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learning-center" element={<Center />} />
          <Route path="/learning-center/events/:reviewId" element={<DetailPages />} />
          <Route path="/programs" element={<Center />} />
          <Route path="/blog-news" element={<News />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

