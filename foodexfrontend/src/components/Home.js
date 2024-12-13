import React from "react";
import "../components/CSS files/Home.css";
import Arabicpic from "/Users/slamg/Desktop/Development/myfoodexfrontendproject/foodexfrontend/src/images/Arabic.png";
import Desertspic from "/Users/slamg/Desktop/Development/myfoodexfrontendproject/foodexfrontend/src/images/Deserts.png";
import Healthypic from "/Users/slamg/Desktop/Development/myfoodexfrontendproject/foodexfrontend/src/images/Healthy.png";
import Kuwaitipic from "/Users/slamg/Desktop/Development/myfoodexfrontendproject/foodexfrontend/src/images/Kuwaiti.png";
import asianfood from "/Users/slamg/Desktop/Development/myfoodexfrontendproject/foodexfrontend/src/images/asianfood.avif";
import desertfood from "/Users/slamg/Desktop/Development/myfoodexfrontendproject/foodexfrontend/src/images/desertsfood.avif";
import fastfood from "/Users/slamg/Desktop/Development/myfoodexfrontendproject/foodexfrontend/src/images/fastfoodpic.jpg";
import healthyfood from "/Users/slamg/Desktop/Development/myfoodexfrontendproject/foodexfrontend/src/images/healthyfood.png";
import kuwaitifood from "/Users/slamg/Desktop/Development/myfoodexfrontendproject/foodexfrontend/src/images/kuwaitifood.jpg";
import arabicfood from "/Users/slamg/Desktop/Development/myfoodexfrontendproject/foodexfrontend/src/images/labaniesfood.avif";
import turkishfood from "/Users/slamg/Desktop/Development/myfoodexfrontendproject/foodexfrontend/src/images/turkishfood.webp";

const Home = () => {
  return (
    <>
      {/* Home Entry Bar */}
      <div className="enteryBar">
        <p className="textBar">Simple recipes made for</p>
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
      <div>
        <div className="categoriesBar">
          <h1 className="ballet-font">Our Catogaries</h1>
        </div>
        {/* Catogaries list Div */}
        <div className="categorySelector">
          <div className="oneCatigoreyDiv">
            <img src={asianfood} className="oneImageSizing" alt="Asian" />
            <p className="categoryText">Asian</p>
          </div>
          <div className="oneCatigoreyDiv">
            <img src={desertfood} className="oneImageSizing" alt="Asian" />
            <p className="categoryText">Deserts</p>
          </div>
          <div className="oneCatigoreyDiv">
            <img src={fastfood} className="oneImageSizing" alt="Asian" />
            <p className="categoryText">Fast Food</p>
          </div>
          <div className="oneCatigoreyDiv">
            <img src={healthyfood} className="oneImageSizing" alt="Healthy" />
            <p className="categoryText">Healthy</p>
          </div>
          <div className="oneCatigoreyDiv">
            <img src={kuwaitifood} className="oneImageSizing" alt="Kuwaiti" />
            <p className="categoryText">Kuwaiti</p>
          </div>
          <div className="oneCatigoreyDiv">
            <img src={arabicfood} className="oneImageSizing" alt="Arabic" />
            <p className="categoryText">Arabic</p>
          </div>
          <div className="oneCatigoreyDiv">
            <img src={turkishfood} className="oneImageSizing" alt="Turkish" />
            <p className="categoryText">Turkish</p>
          </div>
        </div>
        {/* View Recipies Page Sample Div */}

        <div className="centerViewRecipiesSample">
        <button class="button-name" role="button">View Recipies</button>
        </div>

        {/* Follow us Div */}
        <div className="followusDivmain">
Hellow
<div>
foolw us
</div>
<div>
Signup for Email Updates
</div>
        </div>

      </div>
    </>
  );
};

export default Home;
