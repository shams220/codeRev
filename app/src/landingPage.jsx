import React from "react";
// import LetterGlitch from './components/backgrounds/LetterGlitch/LetterGlitch.jsx'
import Navbar from "./navbar.jsx";
import LetterGlitch from "./components/LetterGlitch.jsx";
import { useNavigate } from "react-router-dom";
import "./landingPage.css";
import SplitText from "./components/SplitText.jsx";
import AnimatedContent from "./components/AnimatedContent.jsx";
import InfinityWave from "./components/InfinityWave/InfinityWave.jsx";
import logo from "./assets/codeRev.png";
import FadeContent from "./components/FadeContent.jsx";
import { handler } from "tailwindcss-animate";
import About from './About.jsx'

// import Navbar from './navbar.jsx'
const LandingPage = () => {
  const navigate = useNavigate();
  const getStarted = (e) => {
    e.preventDefault();

    navigate("/CodeReviewer");
  };

  const preResponseHandler=()=>{
navigate('/About')
  }

  return (
    // <div style={{height:"100vh",width:"100vw"}}>
    <FadeContent>
      <div>
        <div style={{ height: "100vh", width: "100vw", position: "relative" }}>
          <div>
            <Navbar/>
            {/* <Navbar
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                zIndex: 20,
              }}
            /> */}
          </div>

          <LetterGlitch centerVignette={true}>
            {/* <div style={{width:"100%",position:"relative"}}>
                <InfinityWave/>
            </div> */}
            <div className="logo-container">
              <img className="headinglogo" src={logo} alt="logo" />
            </div>
            <div className="text">
             
                <SplitText
                  text="From spaghetti code to gourmet software, effortlessly"
                  tag=""
                  className="Lainding-heading"
                />
                 <SplitText
                  text="CodeRev.ai gives instant code reviews with smart suggestions for clarity and performance just paste and improve."
                  tag=""
                  className="Lainding-subheading"
                />
              

              <div className="btn-div">
                <AnimatedContent>
                  <button className="getStarted-btn" onClick={getStarted}>
                    Get Started
                  </button>
                </AnimatedContent>
                <AnimatedContent>
                  <button className="LearnMore-btn" onClick={preResponseHandler}>learn more</button>
                </AnimatedContent>
              </div>
              
            </div>
          </LetterGlitch>
        </div>
      </div>
    </FadeContent>
  );
};

export default LandingPage;
