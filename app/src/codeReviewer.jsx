import { useState, useEffect, useRef } from "react";
// import Editor from "react-simple-code-editor";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-css";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css"; // optional theme
import "./CodeReviewer.css";
// import './codeReview.css';
import FadeContent from "./components/FadeContent";
import Loading from "./components/loading/Loading";
import SparklesPreview from "./uitesting";
import logo from "./assets/CodeRev.png";


function CodeReviewer() {
  const [code, setCode] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const getResponse = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const data = { code };
      const res = await axios.post(
        "https://coderev-xk58.onrender.com/ai/get-response",
        data
      );
      setResponse(res.data);
      setCode("");
      console.log("here is your code review", res.data);
    } catch (err) {
      console.log("some error while fetching response");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <>
      <FadeContent>
       
        <main className="mainDiv">
           <div className="logoCR">
            <img
              src={logo}
              alt=""
              className="logo-img"
            />
          </div>
        <div className="content">
           <div className="left" >
            <div className="input-box " style={{backgroundColor:"#303030"}}>
              <input
                className="text-area"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Ask anything"
              
              />

              <button className="review" onClick={getResponse}>
                <span className="btn-text">Review</span>
  <span className="btn-icon">➤</span>
              </button>
              
            </div>
          </div>

          <div className="right bg-black">
            {/* Sparkles background */}
            {!loading && !response && (
              <div className="absolute sparkle inset-0 z-0">
                <SparklesPreview />
              </div>
            )}

            {/* Foreground content */}
            <div className="anim relative z-10  h-full flex items-center justify-center w-full h-full p-4">
              {loading ? (
                <Loading />
              ) : response ? (
                <div className="anim ease-in typewriter w-full h-full overflow-y-auto text-white">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeHighlight]}
                  >
                    {typeof response === "object" ? response?.data : response}
                  </ReactMarkdown>
                </div>
              ) : (
                <p className="text-gray-400 text-lg text-center z-50 review-heading">
                   CodeRev Where Code Meets Clarity
                </p>
              )}
            </div>
          </div>
           
        </div>
         
         
        </main>
      </FadeContent>
    </>
  );
}

export default CodeReviewer;
