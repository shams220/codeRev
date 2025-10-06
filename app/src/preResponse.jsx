import React from "react";
import { SparklesCore } from "./components/ui/sparkles"; // ✅ correct after moving file
import SparklesPreview  from "./uitesting";
import './preResponse.css';
const PreResponse = () => {
  return (
   
    <div className="PreResponse" >
      <div className="sidebar bg-slate-300 ">sidebar</div>
      <div className="rightSection bg-slate-500 flex-col">
        <div className="responseSection">
      <SparklesPreview/>

        </div>
        <div className="input-bar bg-gray-400"><input type="text" /></div>
      </div>
    </div>
  );
};

export default PreResponse;
