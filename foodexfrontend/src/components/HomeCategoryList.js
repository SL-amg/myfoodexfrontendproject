import React from 'react'
import "../components/CSS files/Home.css";
import "../components/CSS files/HomeCategoryList.css"
import asianfood from "/Users/slamg/Desktop/Development/myfoodexfrontendproject/foodexfrontend/src/images/asianfood.avif";
import desertfood from "/Users/slamg/Desktop/Development/myfoodexfrontendproject/foodexfrontend/src/images/desertsfood.avif";
import fastfood from "/Users/slamg/Desktop/Development/myfoodexfrontendproject/foodexfrontend/src/images/fastfoodpic.jpg";
import healthyfood from "/Users/slamg/Desktop/Development/myfoodexfrontendproject/foodexfrontend/src/images/healthyfood.png";
import kuwaitifood from "/Users/slamg/Desktop/Development/myfoodexfrontendproject/foodexfrontend/src/images/kuwaitifood.jpg";
import arabicfood from "/Users/slamg/Desktop/Development/myfoodexfrontendproject/foodexfrontend/src/images/labaniesfood.avif";
import turkishfood from "/Users/slamg/Desktop/Development/myfoodexfrontendproject/foodexfrontend/src/images/turkishfood.webp";

function HomeCategoryList() {
  return (
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
    </div>
  )
}

export default HomeCategoryList
