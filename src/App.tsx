import React from 'react';
import Navbar from './components/NavBar';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';


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
        </Routes>
        </Router>

        
      </div>
    </div>
  );
}

export default App;