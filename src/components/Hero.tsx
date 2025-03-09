import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 px-6 md:px-12 overflow-hidden">
          <div className="absolute inset-0 opacity-10 dark:opacity-20 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-r from-[#007BFF]/20 to-[#00FF9F]/20"></div>
            <div className="grid grid-cols-10 grid-rows-10 h-full w-full">
              {Array.from({ length: 100 }).map((_, i) => (
                <div key={i} className="border-[0.5px] border-[#007BFF]/20"></div>
              ))}
            </div>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-block px-3 py-1 rounded-full bg-[#007BFF]/10 dark:bg-[#007BFF]/20 text-[#007BFF] text-sm font-medium">
                  Expert-Curated AI Training Data
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  The Future of LLM Training: Domain-Specific & Expert-Curated Data
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Unlock unparalleled precision in AI training with our PhD-driven dataset solutions in STEM, coding, and reasoning.
                </p>
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                  <a href="#contact" className="px-6 py-3 bg-[#007BFF] hover:bg-[#0056b3] text-white rounded-md transition-colors text-center font-medium">
                    Get in Touch
                  </a>
                  <a href="#solutions" className="px-6 py-3 border border-[#0A192F] dark:border-white text-[#0A192F] dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors text-center font-medium">
                    See Our Data Solutions
                  </a>
                </div>
              </div>
              <div className="relative h-64 md:h-auto">
                <img 
                  src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                  alt="AI Neural Network Visualization" 
                  className="rounded-lg shadow-xl object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#007BFF]/30 to-transparent rounded-lg"></div>
              </div>
            </div>
          </div>
        </section>
  );
};

export default Hero;
