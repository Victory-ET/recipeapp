import React, { useState, useEffect } from "react";
import Recipe from "./Recipe";
import "./styles/result.css";

const Results = ({ match: { params } }) => {
  const appid = "05a78797";
  const appkey = "f02ba4dc6c90bcc93de0e6b21b4bde7e";

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // getRecipe();
    const getRecipe = async () => {
      const response = await fetch(
        `https://api.edamam.com/search?q=${params.id}&app_id=${appid}&app_key=${appkey}`
      );
      const data = await response.json();
      console.log(data.hits);
      setRecipes(data.hits);
    };
    getRecipe();
  });

  return (
    <div>
      {recipes.map((recipe) => (
        <Recipe
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          key={recipe.recipe.label}
          ingredients={recipe.recipe.ingredients}
        />
      ))}
    </div>
  );
};

export default Results;
