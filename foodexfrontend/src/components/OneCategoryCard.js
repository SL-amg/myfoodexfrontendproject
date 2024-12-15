import React from 'react'
import "../components/CSS files/UserCategoryCard.css";

function OneCategoryCard({ categorycard, name, image }) {
    return (
      <div className='catogaryOneItemDiv'>
        <div>
          category Name is
          {categorycard?.name}
        </div>
        <div>
          category Image is
          <img src={"https://react-bank-project.eapi.joincoded.com/" + categorycard?.image}/>
     
        </div>

      </div>
    )
  }

export default OneCategoryCard
