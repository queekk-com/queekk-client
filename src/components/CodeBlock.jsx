import { useRef } from "react";
import "./CodeBlock.css";
import { FaCopy } from "react-icons/fa";
import { toast } from "react-toastify";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeBlock = ({ children, language = "" }) => {
  const bodyRef = useRef(null);

  const copyToClipboard = () => {
    const el = document.createElement("textarea");
    el.value = bodyRef.current.innerText;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    toast("Copied to clipboard", {
      autoClose: 1000,
      hideProgressBar: true,
      className: "dashboard__toast__success",
    });
  };

  return (
    <div className="code__block">
      <div className="head">
        <div />
        <div />
        <div />
        <FaCopy className="copy__btn" onClick={copyToClipboard} />
      </div>
      <div className="body" ref={bodyRef}>
        <SyntaxHighlighter
          PreTag="div"
          language={language}
          style={atomDark}
          className="code__block__inner"
        >
          {children}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeBlock;
