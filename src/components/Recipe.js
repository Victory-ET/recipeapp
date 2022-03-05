import React from "react";
import "./styles/result.css";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
      <div className="items">
        <h1>{title}</h1>
        <div className="inner-item">
          <ol>
            {ingredients.map((ingredient) => (
              <li key={Math.random()}>{ingredient.text}</li>
            ))}
          </ol>
          <h4>Ingredients</h4>
          <p>Calories: {calories} Kcal</p>
          <img src={image} alt=""></img>
        </div>
      </div>
  );
};

export default Recipe;
