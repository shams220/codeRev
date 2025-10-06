import { useState, useEffect,useRef } from "react";
import Editor from "react-simple-code-editor";
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
import FadeContent from "./components/FadeContent";
import Loading from "./components/loading/Loading";
import SplitText from "./components/SplitText";
import TextType from "./components/TextType/TextType";
import SparklesPreview from "./uitesting";

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
        {/* <MagicBento> */}
        <main className="mainDiv">
          <div className="leftDiv">
            <div className="heading">
              <h1>Code reviewer</h1>
            </div>
            <div className="left">
              <div className="code">
                <Editor
                  value={code}
                  onValueChange={(code) => setCode(code)}
                  highlight={(code) =>
                    Prism.highlight(
                      code,
                      Prism.languages.javascript,
                      "javascript"
                    )
                  }
                  padding={10}
                  style={{
                    fontFamily: '"Fira code", "Fira Mono", monospace',
                    fontSize: 16,
                    border: "1px solid #ddd",
                    borderRadius: "5px",
                    height: "100%",
                    width: "100%",
                    color: "white",
                    backgroundColor: "#3d3b3b",
                  }}
                />
              </div>
              <div>
                <button className="review" onClick={getResponse}>
                  Review
                </button>
              </div>
              <div>
                <button className="bg-white " >
                  clear
                </button>
              </div>
            </div>
          </div>

          <div className="right bg-black">
            {/* Sparkles background */}
            {!loading && !response && (
              <div className="absolute inset-0 z-0">
                <SparklesPreview />
              </div>
            )}

            {/* Foreground content */}
            <div className="relative z-10 w-full h-full flex items-center justify-center w-full h-full p-4">
              {loading ? (
                <Loading />
              ) : response ? (
                <div className="ease-in typewriter w-full h-full overflow-y-auto text-white">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeHighlight]}
                  >
                    {typeof response === "object" ? response?.data : response}
                  </ReactMarkdown>
                </div>
              ) : (
                <p className="text-gray-400 text-lg text-center">
                  ✨ Your AI review will appear here… Paste code on the left &
                  click <span className="text-indigo-400">Review</span>.
                </p>
              )}
            </div>
          </div>

          {/* {loading == true && }

           {response && 
            } */}
        </main>
      </FadeContent>
    </>
  );
}

export default CodeReviewer;
