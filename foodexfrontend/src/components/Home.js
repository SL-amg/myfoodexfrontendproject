import React from "react";
import "../components/CSS files/Home.css";
import Arabicpic from "/Users/slamg/Desktop/Development/myfoodexfrontendproject/foodexfrontend/src/images/Arabic.png";
import Desertspic from "/Users/slamg/Desktop/Development/myfoodexfrontendproject/foodexfrontend/src/images/Deserts.png";
import Healthypic from "/Users/slamg/Desktop/Development/myfoodexfrontendproject/foodexfrontend/src/images/Healthy.png";
import Kuwaitipic from "/Users/slamg/Desktop/Development/myfoodexfrontendproject/foodexfrontend/src/images/Kuwaiti.png";


const Home = () => {
  return (
    <>
      {/* Home Entry Bar */}
      <div className="enteryBar">
        <a className="textBar">Simple recipes made for</a>{" "}
        <h1 className="ballet-font"> real actual everday Life</h1>
      </div>
      {/* Samples of what we offer Div */}
      <div className="sampleDiv">
        <img src={Arabicpic} className="imagesReSize" alt="rigister Logo" />
        <img src={Desertspic} className="imagesReSize" alt="rigister Logo" />
        <img src={Healthypic} className="imagesReSize" alt="rigister Logo" />
        <img src={Kuwaitipic} className="imagesReSize" alt="rigister Logo" />
      </div>
       {/* Catogaries Div */}
       
    </>
  );
};

export default Home;
