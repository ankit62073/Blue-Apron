import React from 'react'
import "./RecipeTitle.css";

export default function RecipeTitle({recipe}) {
  return (
    // recipe["recipe"]["image"].match(/\.(jpeg|jpg|gif|png)$/)!=null &&(
    <div className="recipeTitle" onClick={() => {
        window.open(recipe["recipe"]["url"])
    }}>
        <img className="recipeTitle__img" src={recipe["recipe"]["image"]} alt="err"/>
        <p className="recipeTitle__name">{recipe["recipe"]["label"]}</p>
    </div>
    // )
  );
}