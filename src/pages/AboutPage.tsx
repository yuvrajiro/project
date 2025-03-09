import React from "react";
import Footer from "../components/Footer";

const AboutPage: React.FC = () => {
  return (
    <div>
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 px-6 md:px-12 overflow-hidden">
    <div className="min-h-screen flex flex-col justify-center items-center text-center p-6">
      <h1 className="text-4xl font-bold"> Powering the Future of AI with Expert-Curated Data</h1>

      {/* Startup Description */}
      <p className="text-lg text-gray-600 max-w-3xl mt-6 leading-relaxed">
        Lab<sub>10</sub>x was founded by a team of <strong>PhD students from Indian Institute of Technology</strong>, united by a common vision:
        to accelerate the development of <strong>Artificial General Intelligence (AGI)</strong> by providing AI companies with 
        <strong> expert-curated, domain-specific training data</strong>. While large language models have shown remarkable advancements, 
        they are still limited by the <strong> quality and depth of their training data</strong>. Public datasets are often 
        <strong> noisy, outdated, and lack deep domain expertise</strong>, leading to models that hallucinate facts and struggle with 
        complex reasoning. Our mission is to <strong> bridge this gap</strong> by curating and validating 
        <strong> high-precision datasets</strong> in <strong> STEM, coding, and advanced reasoning </strong>—ensuring that AI models 
        learn from the best, just as humans do.
      </p>

      <p className="text-lg text-gray-600 max-w-3xl mt-4 leading-relaxed">
        By collaborating with top researchers, scientists, and engineers, Lab<sub>10</sub>x is shaping a future where AI 
        is <strong>not just fast, but accurate, reliable, and deeply knowledgeable</strong>. We believe that <strong>AGI will not 
        be achieved merely by scaling models, but by refining the data they learn from</strong>. Through 
        <strong> expert-guided curation, rigorous validation, and continual updates</strong>, we empower AI companies with 
        <strong> the highest-quality training data</strong>, unlocking breakthroughs in fields ranging from 
        <strong> quantum computing and neuroscience to software engineering and mathematical reasoning</strong>.
      </p>

      {/* CEO Quote */}
      <div className="bg-[#007BFF]/10 dark:bg-[#007BFF]/20 p-6 mt-8 rounded-lg shadow-md max-w-2xl">
        <p className="text-xl italic text-gray-800 dark:text-gray-200">
          Artificial General Intelligence will redefine every aspect of human civilization, from science and medicine 
          to creativity and decision-making. But without expert knowledge as its foundation, AGI will be 
          a powerful mind without wisdom. At Lab<sub>10</sub>x, we are ensuring that AI learns from the best minds 
          of today, so it can become the greatest mind of tomorrow.
        </p>
        <p className="text-lg font-semibold mt-4">— Rahul Goswami, CEO of Lab<sub>10</sub>x</p>
        </div>
        </div>
      </section>
      

      
    
    <Footer />
    </div>
  );
};

export default AboutPage;
