import React from 'react';
import Navbar from './components/NavBar';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import { Blog } from '@/pages/Blog';
import BlogPost from '@/pages/BlogPost';
import { People } from './pages/Peoples';
import BlogByKeyword from '@/pages/BlogByKeyword';
import BlogByCategory from '@/pages/BlogByCategory'; // ✅ New import
import BlogByAuthor from '@/pages/BlogByAuthor'; // ✅ New import


function App() {
  const [darkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-white dark:bg-[#0A192F] text-[#0A192F] dark:text-white">
        {/* Navigation */}
        <Router>
        < Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="blog" element={<Blog />} />
          <Route path="people" element={<People />} />
          <Route path="blogs/:slug" element={<BlogPost />} />
          <Route path="blog/keyword/:keyword" element={<BlogByKeyword />} />  {/* ✅ New route */}
          <Route path="blog/category/:category" element={<BlogByCategory />} /> {/* ✅ New Route */}
          <Route path="blog/author/:author" element={<BlogByAuthor />} /> {/* ✅ New Route */}
        </Routes>
        < Footer />
        </Router>

        
      </div>
    </div>
  );
}

export default App;