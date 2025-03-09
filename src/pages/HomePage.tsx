import React from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import { Brain, Code, FlaskRound as Flask, ChevronRight, CheckCircle, ArrowRight, BarChart3, Users, MessageSquare, Mail } from 'lucide-react';
import ConsultationForm from "../components/Form";

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      {/* Problem Statement */}
      <section className="py-16 px-6 md:px-12 bg-gray-50 dark:bg-[#0A192F]/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why This Matters</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Training LLMs with generic data leads to hallucinations and inaccuracies in critical domains like STEM and reasoning.
                Lab<sub>10x</sub> provides meticulously curated, domain-specific datasets designed by experts to enhance precision, 
                factual accuracy, and reasoning depth in AI models.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#007BFF]/10 dark:bg-[#007BFF]/20 p-3 rounded-full">
                    <Brain className="h-6 w-6 text-[#007BFF]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Current LLMs lack deep domain knowledge</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Generic training data fails to capture the nuances and complexities of specialized fields.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#007BFF]/10 dark:bg-[#007BFF]/20 p-3 rounded-full">
                    <BarChart3 className="h-6 w-6 text-[#007BFF]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Public datasets are noisy and unreliable</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Inconsistent quality and lack of expert validation lead to propagating errors in AI models.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#007BFF]/10 dark:bg-[#007BFF]/20 p-3 rounded-full">
                    <Users className="h-6 w-6 text-[#007BFF]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">AI needs expert-guided reasoning datasets</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Complex reasoning requires datasets created by domain experts who understand the nuances.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Before: Generic LLM Response</h3>
                  <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md">
                    <p className="text-gray-600 dark:text-gray-300 font-mono text-sm">
                      "The Schrödinger equation describes quantum systems using wave functions. It's a differential equation that's important in quantum mechanics."
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">After: Lab<sub>10x</sub> Enhanced LLM Response</h3>
                  <div className="bg-[#007BFF]/5 dark:bg-[#007BFF]/10 p-4 rounded-md border-l-4 border-[#007BFF]">
                    <p className="text-gray-600 dark:text-gray-300 font-mono text-sm">
                      "The time-dependent Schrödinger equation (iℏ∂Ψ/∂t = ĤΨ) describes how quantum states evolve, where Ĥ is the Hamiltonian operator representing the system's total energy. This fundamental equation enables precise prediction of quantum phenomena like tunneling and superposition, with applications in quantum computing and materials science."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section id="solutions" className="py-16 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">The Solution: What We Offer</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Our expert-curated datasets are designed to enhance the performance of LLMs in specialized domains,
                providing unparalleled accuracy and depth of knowledge.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-t-4 border-[#007BFF] hover:shadow-xl transition-shadow">
                <div className="mb-4">
                  <Flask className="h-12 w-12 text-[#007BFF]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">STEM Data</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Comprehensive datasets covering Physics, Mathematics, Biology, Chemistry, and Engineering, curated by PhD experts.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#00FF9F] mr-2" />
                    <span className="text-sm">Peer-reviewed content</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#00FF9F] mr-2" />
                    <span className="text-sm">Latest research incorporated</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#00FF9F] mr-2" />
                    <span className="text-sm">Multi-level complexity</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-t-4 border-[#007BFF] hover:shadow-xl transition-shadow">
                <div className="mb-4">
                  <Code className="h-12 w-12 text-[#007BFF]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Coding Data</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  High-quality codebases, problem-solving examples, and AI-generated feedback for programming tasks.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#00FF9F] mr-2" />
                    <span className="text-sm">Multiple programming languages</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#00FF9F] mr-2" />
                    <span className="text-sm">Best practices & patterns</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#00FF9F] mr-2" />
                    <span className="text-sm">Real-world applications</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-t-4 border-[#007BFF] hover:shadow-xl transition-shadow">
                <div className="mb-4">
                  <Brain className="h-12 w-12 text-[#007BFF]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Reasoning Data</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Expert-curated logical, causal, and ethical reasoning datasets for enhanced AI decision-making.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#00FF9F] mr-2" />
                    <span className="text-sm">Complex problem solving</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#00FF9F] mr-2" />
                    <span className="text-sm">Ethical frameworks</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#00FF9F] mr-2" />
                    <span className="text-sm">Causal inference training</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="inline-flex items-center space-x-2 bg-[#007BFF]/10 dark:bg-[#007BFF]/20 px-4 py-2 rounded-full text-[#007BFF] font-medium">
                <span>100+ PhDs contributing</span>
                <span>•</span>
                <span>Rigorous validation</span>
                <span>•</span>
                <span>Multiple formats</span>
              </div>
            </div>

            <div className="mt-8 text-center">
              <a href="#contact" className="inline-flex items-center px-6 py-3 bg-[#007BFF] hover:bg-[#0056b3] text-white rounded-md transition-colors font-medium">
                Explore Our Data Solutions
                <ChevronRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Why Us Section */}
        <section className="py-16 px-6 md:px-12 bg-gray-50 dark:bg-[#0A192F]/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Us?</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                See how Lab<sub>10x</sub> compares to other data sources for training large language models.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-700">
                    <th className="px-6 py-4 text-left text-sm font-semibold">Feature</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold">Open-Source Data</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold">Generic AI Data</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold bg-[#007BFF]/10 dark:bg-[#007BFF]/20">Lab<sub>10x</sub></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium">Expert-Curated</td>
                    <td className="px-6 py-4 text-center text-red-500">❌ No</td>
                    <td className="px-6 py-4 text-center text-yellow-500">⚠️ Partial</td>
                    <td className="px-6 py-4 text-center text-green-500 bg-[#007BFF]/5 dark:bg-[#007BFF]/10">✅ Yes</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium">Domain-Specific</td>
                    <td className="px-6 py-4 text-center text-red-500">❌ No</td>
                    <td className="px-6 py-4 text-center text-yellow-500">⚠️ Some</td>
                    <td className="px-6 py-4 text-center text-green-500 bg-[#007BFF]/5 dark:bg-[#007BFF]/10">✅ Yes</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium">High Precision</td>
                    <td className="px-6 py-4 text-center text-red-500">❌ No</td>
                    <td className="px-6 py-4 text-center text-yellow-500">⚠️ Inconsistent</td>
                    <td className="px-6 py-4 text-center text-green-500 bg-[#007BFF]/5 dark:bg-[#007BFF]/10">✅ Yes</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium">Reasoning Data</td>
                    <td className="px-6 py-4 text-center text-red-500">❌ No</td>
                    <td className="px-6 py-4 text-center text-red-500">❌ No</td>
                    <td className="px-6 py-4 text-center text-green-500 bg-[#007BFF]/5 dark:bg-[#007BFF]/10">✅ Yes</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium">Industry Use-Ready</td>
                    <td className="px-6 py-4 text-center text-red-500">❌ No</td>
                    <td className="px-6 py-4 text-center text-yellow-500">⚠️ Sometimes</td>
                    <td className="px-6 py-4 text-center text-green-500 bg-[#007BFF]/5 dark:bg-[#007BFF]/10">✅ Yes</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-12 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Performance Improvement with Lab<sub>10x</sub> Datasets</h3>
              <div className="h-64 relative">
                <div className="absolute bottom-0 left-0 w-full h-full flex items-end">
                  <div className="w-1/3 h-[30%] bg-gray-300 dark:bg-gray-600 mx-2 rounded-t-md relative group">
                    <div className="absolute -top-8 left-0 right-0 text-center text-sm font-medium">Open-Source</div>
                    <div className="absolute -bottom-8 left-0 right-0 text-center text-sm">30%</div>
                  </div>
                  <div className="w-1/3 h-[60%] bg-gray-400 dark:bg-gray-500 mx-2 rounded-t-md relative group">
                    <div className="absolute -top-8 left-0 right-0 text-center text-sm font-medium">Generic AI</div>
                    <div className="absolute -bottom-8 left-0 right-0 text-center text-sm">60%</div>
                  </div>
                  <div className="w-1/3 h-[95%] bg-[#007BFF] mx-2 rounded-t-md relative group">
                    <div className="absolute -top-8 left-0 right-0 text-center text-sm font-medium">Lab<sub>10</sub>x</div>
                    <div className="absolute -bottom-8 left-0 right-0 text-center text-sm">95%</div>
                  </div>
                </div>
              </div>
              <div className="mt-12 text-center">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  *Based on internal benchmarks measuring factual accuracy in STEM domains
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <a href="#contact" className="inline-flex items-center px-6 py-3 bg-[#007BFF] hover:bg-[#0056b3] text-white rounded-md transition-colors font-medium">
                Get a Sample Dataset
                <ChevronRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Experts Section */}
        <section className="py-16 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Backed by Experts</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Our data is curated by a network of PhD-level experts from prestigious institutions around the world.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-[#007BFF]/10 dark:bg-[#007BFF]/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-[#007BFF] font-bold">IITB</span>
                </div>
                <span className="text-sm text-center">IIT Bombay</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-[#007BFF]/10 dark:bg-[#007BFF]/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-[#007BFF] font-bold">IITD</span>
                </div>
                <span className="text-sm text-center">IIM Delhi</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-[#007BFF]/10 dark:bg-[#007BFF]/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-[#007BFF] font-bold">MIT</span>
                </div>
                <span className="text-sm text-center">Massachusetts Institute of Technology</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-[#007BFF]/10 dark:bg-[#007BFF]/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-[#007BFF] font-bold">+50</span>
                </div>
                <span className="text-sm text-center">More Top Institutions</span>
              </div>
            </div>

            <div className="mt-12 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#007BFF]/10 dark:bg-[#007BFF]/20 rounded-full flex items-center justify-center">
                    <span className="text-[#007BFF] font-bold">DR</span>
                  </div>
                </div>
                <div>
                  <p className="italic text-gray-600 dark:text-gray-300 mb-2">
                    Lab<sub>10</sub>x is addressing a critical gap in AI training. Their expert-curated datasets have significantly improved our models' performance in specialized domains.
                  </p>
                  <p className="font-medium">Vinay Kumar Giri</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Founder, RedReitor Financial Services</p>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <a href="#contact" className="inline-flex items-center px-6 py-3 border border-[#0A192F] dark:border-white text-[#0A192F] dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors font-medium">
                Meet Our Experts
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 px-6 md:px-12 bg-gray-50 dark:bg-[#0A192F]/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Partner with Us</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                We collaborate with AI leaders to build the next-generation intelligent models.
                Contact us for customized datasets tailored to your specific needs.
              </p>
            </div>

            

            <div className="grid md:grid-cols-2 gap-12">

              <ConsultationForm />


              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4">Why Partner With Us?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#00FF9F] mr-3 mt-0.5" />
                      <span>Access to exclusive, expert-curated datasets</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#00FF9F] mr-3 mt-0.5" />
                      <span>Customized solutions for your specific AI challenges</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#00FF9F] mr-3 mt-0.5" />
                      <span>Ongoing support from our team of PhD experts</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#00FF9F] mr-3 mt-0.5" />
                      <span>Continuous dataset updates with the latest research</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4">Our experts have delivered work to</h3>
                  <div className="grid grid-cols-3 gap-4">
                    {["AI2", "Anthropic", "ReadyTensor", "RedReitor", "StatML Labs", "+ More"].map((company, index) => (
                      <div key={index} className="flex items-center justify-center h-12 bg-gray-100 dark:bg-gray-700 rounded-md">
                        <span className="font-medium text-gray-500 dark:text-gray-400">{company}</span>
                      </div>
                    ))}
                  </div>
                </div>


                <div className="bg-[#007BFF]/10 dark:bg-[#007BFF]/20 p-6 rounded-lg">
                  <div className="flex items-center space-x-3 mb-4">
                    <MessageSquare className="h-6 w-6 text-[#007BFF]" />
                    <h3 className="text-xl font-semibold text-[#007BFF]">Need immediate assistance?</h3>
                  </div>
                  <p className="mb-4">Our team is ready to answer your questions and discuss your specific needs.</p>
                  <a href="mailto:rahul@labtenx.com" className="text-[#007BFF] font-medium hover:underline">
                    rahul@labtenx.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Find answers to common questions about our datasets and services.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">How are your datasets different from public data?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Our datasets are curated by PhD-level experts in each domain, ensuring accuracy, relevance, and depth that public datasets lack. Each entry undergoes rigorous validation and is structured specifically for LLM training.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">What formats do you provide data in?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We offer flexible formats including JSON, CSV, and specialized formats optimized for different LLM training frameworks. We can also customize the format to match your specific pipeline requirements.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Do you offer licensing options?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Yes, we provide various licensing models including exclusive, non-exclusive, and custom arrangements. Our team can work with you to determine the best licensing structure for your specific use case and budget.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Can you create custom datasets for our specific needs?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Absolutely. We specialize in creating bespoke datasets tailored to your specific domain and requirements. Our network of experts can be assembled to focus on your particular area of interest.
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <a href="#contact" className="inline-flex items-center px-6 py-3 border border-[#0A192F] dark:border-white text-[#0A192F] dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors font-medium">
                Have More Questions?
                <MessageSquare className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 px-6 md:px-12 bg-[#007BFF]/10 dark:bg-[#007BFF]/5">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Subscribe to our newsletter for the latest updates on our datasets and AI research insights.
              </p>
            </div>

            <div className="max-w-md mx-auto">
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-3 rounded-l-md border-y border-l border-gray-300 dark:border-gray-600 focus:ring-[#007BFF] focus:border-[#007BFF] bg-white dark:bg-gray-700"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#007BFF] hover:bg-[#0056b3] text-white rounded-r-md transition-colors font-medium"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>

        <Footer />

        
    </div>
  );
};

export default HomePage;