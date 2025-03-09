import { MathJax, MathJaxContext } from "better-react-mathjax";

export default function Lab10xLogo() {
    return (
      <MathJaxContext>
        <MathJax inline={true}>
          {"\\( \\mathcal{Lab}_{\\mathcal{10}}\\mathcal{x} \\)"}
        </MathJax>
      </MathJaxContext>
    );
  }
    
