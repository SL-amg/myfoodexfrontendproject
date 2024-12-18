import React from 'react'
import "../components/CSS files/CategoryCard.css";

function OneCategoryCard({ categorycard, name, image, recipes }) {
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
        <div>
        <pre>{JSON.stringify(categorycard?.recipes, null, 2)}</pre>;
     
        </div>

      </div>
    )
  }

export default OneCategoryCard
