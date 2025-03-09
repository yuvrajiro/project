import { useEffect, useState } from "react";

export default function ReviewFlowGraph() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [hoveredNode, setHoveredNode] = useState(null);

  useEffect(() => {
    // Check system preference for dark mode
    const darkModeQuery: MediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(darkModeQuery.matches);
    
    // Add listener for changes
    darkModeQuery.addEventListener("change", (e: MediaQueryListEvent) => setIsDarkMode(e.matches));
    
    return () => darkModeQuery.removeEventListener("change", (e) => setIsDarkMode(e.matches));
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen p-6 transition-colors duration-500 ease-in-out overflow-x-auto ${isDarkMode ? "bg-gray-900 text-gray-200" : "bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-800"}`}>
      <div className="w-full flex justify-between items-center mb-8 sticky top-0 z-50 bg-opacity-90 backdrop-blur-sm p-4 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Double-Blinded Review Flow</h1>
        <button 
          onClick={toggleTheme} 
          className={`p-3 rounded-full transition-colors duration-300 ease-in-out ${isDarkMode ? "bg-gray-800 text-yellow-300" : "bg-blue-100 text-blue-600"}`}
        >
          {isDarkMode ? "🌞" : "🌙"}
        </button>
      </div>

      <div className="min-w-max pb-8">
        {/* Main horizontal flow */}
        <div className="flex justify-start items-start gap-6">
          {/* Phase 1: Content Creation */}
          <div className="phase-column">
            <div className="phase-header">
              <h2>Phase 1: Content Creation</h2>
            </div>
            
            <div className="phase-content">
              <div 
                className={`node bg-blue-500 ${isDarkMode ? "node-dark" : ""} ${hoveredNode === "expert-a" ? "scale-105" : ""}`}
                onMouseEnter={() => setHoveredNode("expert-a")}
                onMouseLeave={() => setHoveredNode(null)}
              >
                <div className="node-title">Expert A Creates Q&A</div>
                {hoveredNode === "expert-a" && (
                  <div className="description-popup">
                    Subject matter expert creates the initial set of questions and reference answers based on their domain expertise.
                  </div>
                )}
              </div>
              
              <div className="arrow-vertical">
                <div className="arrow-down"></div>
                <div className="arrow-up"></div>
              </div>
              
              <div 
                className={`node bg-indigo-500 ${isDarkMode ? "node-dark" : ""} ${hoveredNode === "formatting-check-1" ? "scale-105" : ""}`}
                onMouseEnter={() => setHoveredNode("formatting-check-1")}
                onMouseLeave={() => setHoveredNode(null)}
              >
                <div className="node-title">Formatting Review</div>
                {hoveredNode === "formatting-check-1" && (
                  <div className="description-popup">
                    A formatting reviewer checks the structure and presentation. If issues exist, content is returned to Expert A for revision in an iterative process until quality standards are met.
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className="phase-connector">
            <div className="arrow-horizontal"></div>
          </div>
          
          {/* Phase 2: Secondary Review */}
          <div className="phase-column">
            <div className="phase-header">
              <h2>Phase 2: Secondary Review</h2>
            </div>
            
            <div className="phase-content">
              <div 
                className={`node bg-purple-500 ${isDarkMode ? "node-dark" : ""} ${hoveredNode === "expert-b" ? "scale-105" : ""}`}
                onMouseEnter={() => setHoveredNode("expert-b")}
                onMouseLeave={() => setHoveredNode(null)}
              >
                <div className="node-title">Expert B Provides Answer</div>
                {hoveredNode === "expert-b" && (
                  <div className="description-popup">
                    A second subject matter expert answers the questions independently without seeing Expert A's answers, ensuring unbiased validation.
                  </div>
                )}
              </div>
              
              <div className="arrow-vertical">
                <div className="arrow-down"></div>
              </div>
              
              <div 
                className={`node bg-indigo-500 ${isDarkMode ? "node-dark" : ""} ${hoveredNode === "formatting-check-2" ? "scale-105" : ""}`}
                onMouseEnter={() => setHoveredNode("formatting-check-2")}
                onMouseLeave={() => setHoveredNode(null)}
              >
                <div className="node-title">Formatting Review</div>
                {hoveredNode === "formatting-check-2" && (
                  <div className="description-popup">
                    The formatting reviewer examines Expert B's answers for proper structure and presentation, preparing them for comparison.
                  </div>
                )}
              </div>
              
              <div className="arrow-vertical">
                <div className="arrow-down"></div>
              </div>
              
              <div 
                className={`node bg-violet-500 ${isDarkMode ? "node-dark" : ""} ${hoveredNode === "answer-comparison" ? "scale-105" : ""}`}
                onMouseEnter={() => setHoveredNode("answer-comparison")}
                onMouseLeave={() => setHoveredNode(null)}
              >
                <div className="node-title">Final Reviewer Compares Answers</div>
                {hoveredNode === "answer-comparison" && (
                  <div className="description-popup">
                    An independent reviewer evaluates both sets of answers, identifying agreements and discrepancies without knowing which expert provided which answer.
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className="phase-connector">
            <div className="arrow-horizontal"></div>
          </div>
          
          {/* Phase 3: Decision */}
          <div className="phase-column">
            <div className="phase-header">
              <h2>Phase 3: Decision</h2>
            </div>
            
            <div className="phase-content decision-phase">
              <div 
                className={`node bg-blue-600 ${isDarkMode ? "node-dark" : ""} ${hoveredNode === "decision" ? "scale-105" : ""}`}
                onMouseEnter={() => setHoveredNode("decision")}
                onMouseLeave={() => setHoveredNode(null)}
              >
                <div className="node-title">Match Decision</div>
                {hoveredNode === "decision" && (
                  <div className="description-popup">
                    Determine if both experts' answers align or if further review is needed to resolve discrepancies.
                  </div>
                )}
              </div>
              
              <div className="branch-container">
                <div className="branch-paths">
                  {/* Left path - Match */}
                  <div className="branch-path">
                    <div className="arrow-vertical">
                      <div className="arrow-down"></div>
                    </div>
                    
                    <div 
                      className={`node bg-green-500 ${isDarkMode ? "node-dark" : ""} ${hoveredNode === "match" ? "scale-105" : ""}`}
                      onMouseEnter={() => setHoveredNode("match")}
                      onMouseLeave={() => setHoveredNode(null)}
                    >
                      <div className="node-title">Match ✅ → Finalized</div>
                      {hoveredNode === "match" && (
                        <div className="description-popup">
                          When both experts' answers align, the Q&A is considered validated and moves directly to client submission.
                        </div>
                      )}
                    </div>
                    
                    <div className="arrow-vertical">
                      <div className="arrow-down"></div>
                    </div>
                    
                    <div 
                      className={`node bg-purple-600 ${isDarkMode ? "node-dark" : ""} ${hoveredNode === "client-submit" ? "scale-105" : ""}`}
                      onMouseEnter={() => setHoveredNode("client-submit")}
                      onMouseLeave={() => setHoveredNode(null)}
                    >
                      <div className="node-title">Client Submission</div>
                      {hoveredNode === "client-submit" && (
                        <div className="description-popup">
                          The fully validated, double-reviewed Q&A content is delivered to the client.
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Right path - No Match */}
                  <div className="branch-path">
                    <div className="arrow-vertical">
                      <div className="arrow-down"></div>
                    </div>
                    
                    <div 
                      className={`node bg-red-500 ${isDarkMode ? "node-dark" : ""} ${hoveredNode === "no-match" ? "scale-105" : ""}`}
                      onMouseEnter={() => setHoveredNode("no-match")}
                      onMouseLeave={() => setHoveredNode(null)}
                    >
                      <div className="node-title">No Match ❌ → Cross Review</div>
                      {hoveredNode === "no-match" && (
                        <div className="description-popup">
                          When discrepancies exist between expert answers, the Q&A enters a resolution phase where differences must be addressed.
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="phase-connector cross-review-connector">
            <div className="arrow-horizontal"></div>
          </div>
          
          {/* Phase 4: Cross Review Process */}
          <div className="phase-column">
            <div className="phase-header">
              <h2>Phase 4: Cross Review Process</h2>
            </div>
            
            <div className="phase-content">
              <div className="cross-review-container">
                {/* Option 1: Agree */}
                <div 
                  className={`node bg-blue-500 ${isDarkMode ? "node-dark" : ""} ${hoveredNode === "agree" ? "scale-105" : ""}`}
                  onMouseEnter={() => setHoveredNode("agree")}
                  onMouseLeave={() => setHoveredNode(null)}
                >
                  <div className="node-title">Agree</div>
                  {hoveredNode === "agree" && (
                    <div className="description-popup side-popup">
                      Expert accepts the other expert's answer, resolving the discrepancy immediately.
                    </div>
                  )}
                </div>
                
                {/* Option 2: Defend */}
                <div 
                  className={`node bg-amber-500 ${isDarkMode ? "node-dark" : ""} ${hoveredNode === "defend" ? "scale-105" : ""}`}
                  onMouseEnter={() => setHoveredNode("defend")}
                  onMouseLeave={() => setHoveredNode(null)}
                >
                  <div className="node-title">Defend</div>
                  {hoveredNode === "defend" && (
                    <div className="description-popup side-popup">
                      Expert provides additional justification for their original answer, requiring further discussion.
                    </div>
                  )}
                </div>
                
                {/* Option 3: Minor Revision */}
                <div 
                  className={`node bg-teal-500 ${isDarkMode ? "node-dark" : ""} ${hoveredNode === "revise" ? "scale-105" : ""}`}
                  onMouseEnter={() => setHoveredNode("revise")}
                  onMouseLeave={() => setHoveredNode(null)}
                >
                  <div className="node-title">Minor Revision</div>
                  {hoveredNode === "revise" && (
                    <div className="description-popup side-popup">
                      Expert suggests modifications to create a compromise solution that addresses both perspectives.
                    </div>
                  )}
                </div>
                
                {/* Feedback loop */}
                <div className="feedback-loop">
                  <div className="feedback-arrow"></div>
                </div>
              </div>
              
              <div className="arrow-vertical">
                <div className="arrow-down"></div>
              </div>
              
              <div 
                className={`node bg-green-600 ${isDarkMode ? "node-dark" : ""} ${hoveredNode === "final-meeting" ? "scale-105" : ""}`}
                onMouseEnter={() => setHoveredNode("final-meeting")}
                onMouseLeave={() => setHoveredNode(null)}
              >
                <div className="node-title">Final Meeting & Consensus</div>
                {hoveredNode === "final-meeting" && (
                  <div className="description-popup">
                    Once all three experts agree on a solution, a final meeting confirms the consensus and prepares the content for final formatting.
                  </div>
                )}
              </div>
              
              <div className="arrow-vertical">
                <div className="arrow-down"></div>
              </div>
              
              <div 
                className={`node bg-indigo-500 ${isDarkMode ? "node-dark" : ""} ${hoveredNode === "final-formatting" ? "scale-105" : ""}`}
                onMouseEnter={() => setHoveredNode("final-formatting")}
                onMouseLeave={() => setHoveredNode(null)}
              >
                <div className="node-title">Final Formatting Review</div>
                {hoveredNode === "final-formatting" && (
                  <div className="description-popup">
                    A comprehensive review ensures all Q&A content meets quality standards before submission to the client.
                  </div>
                )}
              </div>
              
              <div className="arrow-vertical">
                <div className="arrow-down"></div>
              </div>
              
              <div 
                className={`node bg-purple-600 ${isDarkMode ? "node-dark" : ""} ${hoveredNode === "cross-review-submit" ? "scale-105" : ""}`}
                onMouseEnter={() => setHoveredNode("cross-review-submit")}
                onMouseLeave={() => setHoveredNode(null)}
              >
                <div className="node-title">Client Submission</div>
                {hoveredNode === "cross-review-submit" && (
                  <div className="description-popup">
                    The fully validated, cross-reviewed Q&A content is delivered to the client after thorough expert consensus.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .phase-column {
          display: flex;
          flex-direction: column;
          min-width: 300px;
          background: ${isDarkMode ? 'rgba(30, 41, 59, 0.5)' : 'rgba(255, 255, 255, 0.7)'};
          border-radius: 16px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(8px);
          transition: all 0.3s ease;
          border: 1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'};
        }
        
        .phase-header {
          padding: 16px;
          border-bottom: 1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'};
          text-align: center;
        }
        
        .phase-header h2 {
          font-size: 20px;
          font-weight: 600;
          background: ${isDarkMode ? 'linear-gradient(135deg, #818CF8, #A78BFA)' : 'linear-gradient(135deg, #4F46E5, #8B5CF6)'};
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        
        .phase-content {
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        
        .node {
          position: relative;
          padding: 16px 20px;
          color: white;
          font-weight: bold;
          text-align: center;
          border-radius: 12px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          z-index: 10;
        }
        
        .node:before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 60%);
          border-radius: 12px;
          z-index: 0;
        }
        
        .node-dark {
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
        }
        
        .node:hover {
          transform: translateY(-3px) scale(1.03);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
        }
        
        .node-title {
          position: relative;
          z-index: 5;
          font-size: 15px;
        }
        
        .description-popup {
          position: absolute;
          top: calc(100% + 15px);
          left: 50%;
          transform: translateX(-50%);
          width: calc(100% + 40px);
          padding: 16px;
          background: ${isDarkMode ? 'rgba(30, 41, 59, 0.95)' : 'rgba(255, 255, 255, 0.95)'};
          color: ${isDarkMode ? '#e2e8f0' : '#1e293b'};
          border-radius: 8px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
          z-index: 100;
          font-weight: normal;
          text-align: left;
          line-height: 1.6;
          animation: fadeIn 0.2s ease-out;
          border: 1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'};
          font-size: 14px;
        }
        
        .side-popup {
          left: 100%;
          top: 50%;
          transform: translateY(-50%);
        }
        
        .side-popup:after {
          content: '';
          position: absolute;
          right: 100%;
          top: 50%;
          transform: translateY(-50%);
          border-width: 8px;
          border-style: solid;
          border-color: transparent ${isDarkMode ? 'rgba(30, 41, 59, 0.95)' : 'rgba(255, 255, 255, 0.95)'} transparent transparent;
        }
        
        .description-popup:after {
          content: '';
          position: absolute;
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%);
          border-width: 8px;
          border-style: solid;
          border-color: transparent transparent ${isDarkMode ? 'rgba(30, 41, 59, 0.95)' : 'rgba(255, 255, 255, 0.95)'} transparent;
        }
        
        .phase-connector {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 60px;
        }
        
        .cross-review-connector {
          align-self: flex-start;
          margin-top: 200px;
        }
        
        .arrow-horizontal {
          width: 40px;
          height: 2px;
          background-color: ${isDarkMode ? 'rgba(156, 163, 175, 0.6)' : 'rgba(59, 130, 246, 0.5)'};
          position: relative;
          animation: pulseWidth 2s infinite;
        }
        
        .arrow-horizontal:after {
          content: '';
          position: absolute;
          right: 0;
          top: 50%;
          width: 8px;
          height: 8px;
          border-top: 2px solid ${isDarkMode ? 'rgba(156, 163, 175, 0.6)' : 'rgba(59, 130, 246, 0.5)'};
          border-right: 2px solid ${isDarkMode ? 'rgba(156, 163, 175, 0.6)' : 'rgba(59, 130, 246, 0.5)'};
          transform: translateY(-50%) rotate(45deg);
        }
        
        .arrow-vertical {
          display: flex;
          flex-direction: column;
          align-items: center;
          height: 30px;
          position: relative;
        }
        
        .arrow-down {
          height: 20px;
          width: 2px;
          background-color: ${isDarkMode ? 'rgba(156, 163, 175, 0.6)' : 'rgba(59, 130, 246, 0.5)'};
          position: relative;
        }
        
        .arrow-down:after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 8px;
          height: 8px;
          border-left: 2px solid ${isDarkMode ? 'rgba(156, 163, 175, 0.6)' : 'rgba(59, 130, 246, 0.5)'};
          border-bottom: 2px solid ${isDarkMode ? 'rgba(156, 163, 175, 0.6)' : 'rgba(59, 130, 246, 0.5)'};
          transform: translateX(-50%) rotate(-45deg);
        }
        
        .arrow-up {
          height: 20px;
          width: 2px;
          background-color: ${isDarkMode ? 'rgba(156, 163, 175, 0.6)' : 'rgba(59, 130, 246, 0.5)'};
          position: relative;
        }
        
        .arrow-up:after {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          width: 8px;
          height: 8px;
          border-left: 2px solid ${isDarkMode ? 'rgba(156, 163, 175, 0.6)' : 'rgba(59, 130, 246, 0.5)'};
          border-top: 2px solid ${isDarkMode ? 'rgba(156, 163, 175, 0.6)' : 'rgba(59, 130, 246, 0.5)'};
          transform: translateX(-50%) rotate(45deg);
        }
        
        .branch-container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        .branch-paths {
          display: flex;
          justify-content: space-around;
          width: 100%;
          gap: 16px;
        }
        
        .branch-path {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }
        
        .decision-phase {
          min-height: 400px;
        }
        
        .cross-review-container {
          display: flex;
          flex-direction: column;
          gap: 12px;
          position: relative;
        }
        
        .feedback-loop {
          position: absolute;
          right: -20px;
          top: 0;
          bottom: 0;
          width: 20px;
        }
        
        .feedback-arrow {
          position: absolute;
          top: 20px;
          bottom: 20px;
          right: 10px;
          width: 2px;
          background-color: ${isDarkMode ? 'rgba(156, 163, 175, 0.4)' : 'rgba(59, 130, 246, 0.3)'};
          border-radius: 10px 0 0 10px;
        }
        
        .feedback-arrow:before {
          content: '';
          position: absolute;
          border-width: 6px;
          border-style: solid;
          border-color: transparent transparent ${isDarkMode ? 'rgba(156, 163, 175, 0.4)' : 'rgba(59, 130, 246, 0.3)'} transparent;
          top: -6px;
          left: -5px;
          transform: rotate(-90deg);
        }
        
        .feedback-arrow:after {
          content: '';
          position: absolute;
          bottom: -6px;
          right: -5px;
          width: 6px;
          height: 6px;
          border-top: 2px solid ${isDarkMode ? 'rgba(156, 163, 175, 0.4)' : 'rgba(59, 130, 246, 0.3)'};
          border-right: 2px solid ${isDarkMode ? 'rgba(156, 163, 175, 0.4)' : 'rgba(59, 130, 246, 0.3)'};
          transform: rotate(135deg);
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateX(-50%) translateY(10px); }
          to { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
        
        @keyframes pulseWidth {
          0%, 100% {
            opacity: 0.6;
            width: 35px;
          }
          50% {
            opacity: 1;
            width: 45px;
          }
        }
      `}</style>
    </div>
  );
}