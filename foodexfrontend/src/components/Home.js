import React from "react";
import "../components/CSS files/Home.css";
import Arabicpic from "/Users/slamg/Desktop/Development/myfoodexfrontendproject/foodexfrontend/src/images/Arabic.png";
import Desertspic from "/Users/slamg/Desktop/Development/myfoodexfrontendproject/foodexfrontend/src/images/Deserts.png";
import Healthypic from "/Users/slamg/Desktop/Development/myfoodexfrontendproject/foodexfrontend/src/images/Healthy.png";
import Kuwaitipic from "/Users/slamg/Desktop/Development/myfoodexfrontendproject/foodexfrontend/src/images/Kuwaiti.png";
import HomeCategoryList from "./HomeCategoryList";
import FollowUsAndJoin from "./FollowUsAndJoin";
import LoyalCustomers from "./LoyalCustomers";
import {Link} from 'react-router-dom'

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
        {/* View Recipies Page Sample Div */}
        <HomeCategoryList />
        <div className="centerViewRecipiesSample">
          <Link to="/Register">
          <button class="button-name" role="button">
            View Recipies
          </button>
          </Link>
        </div>

        {/* Follow us Div */}
        <FollowUsAndJoin />

        <LoyalCustomers />
      </div>
    </>
  );
};

export default Home;
