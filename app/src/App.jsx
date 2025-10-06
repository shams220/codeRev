import React from "react";

import { Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import CodeReviewer from "./codeReviewer";
import PreResponse from "./preResponse";
import Loading from "./components/loading/Loading";
import About from './About'
// import AboutPage from './AboutPage';
// import NotFound from './NotFound';
function App() {
  return(
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="CodeReviewer"  element={<CodeReviewer/>}/>
      <Route path='/Loading' element={<Loading/>}/>
      <Route path='/preResponse' element={<PreResponse/>}/>
      <Route path='/about'element={<About/>} />
      {/* <Route path="/about" element={<AboutPage />} /> */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  )
}

export default App;
