import React from "react";
import './styles/result.css'

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className='recipe-home'>
      <h1>{title}</h1>
      <ol>
              {ingredients.map(ingredient => (
                  <li key={ingredient}>{ingredient.text}</li>
            ))}
      </ol>
      <p>{calories}</p>
      <img src={image} alt=""></img>
    </div>
  );
};

export default Recipe;
