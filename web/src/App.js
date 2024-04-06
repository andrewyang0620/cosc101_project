import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage/Home';
import Center from './pages/CenterPage/Center';
import News from './pages/NewsPage/NewsPage'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learning-center" element={<Center />} />
          <Route path="/programs" element={<Center />} />
          <Route path="/blog-news" element={<News />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

