import React from "react";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import { Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";


interface NavbarProps {
    darkMode: boolean;
    toggleDarkMode: () => void;
  }
  


const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
    return (<nav className="fixed w-full bg-white/90 dark:bg-[#0A192F]/90 backdrop-blur-sm z-50 py-4 px-6 md:px-12 flex justify-between items-center border-b border-gray-100 dark:border-gray-800">
            <MathJaxContext>
              <div className="flex items-center space-x-2">
                {/* <Brain className="h-8 w-8 text-[#007BFF]" /> */}
                {/* <img src="/Designer.png" alt="Lab10x Logo" className="h-16 w-auto" /> */}
                <Link to="/" className="text-xl font-bold hover:text-[#007BFF] transition-colors">
                <span className="text-xl font-bold"><MathJax>$${" \\huge \\mathcal{Lab}_{\\mathcal{10}}\\mathcal{x}"}$$</MathJax>
                </span>
                </Link>
              </div>
              </MathJaxContext>
              <div className="flex items-center space-x-6">
                <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </button>
                <Link to="/about" className="text-lg font-medium text-gray-700 dark:text-white hover:text-[#007BFF]">
          About
            </Link>
                <a href="#contact" className="hidden md:block px-5 py-2 bg-[#007BFF] hover:bg-[#0056b3] text-white rounded-md transition-colors">
                  Get in Touch
                </a>
              </div>
            </nav>)
};

export default Navbar;