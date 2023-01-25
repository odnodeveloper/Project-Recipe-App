import React, { useState } from "react";
import "./App.css";

import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  
  const deleteRecipe = (index) => {
    // code to remove the recipe from the state
    setRecipes(prevRecipes => prevRecipes.filter((recipe, i) => i !== index))
  }
  
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

  const createRecipe = (newRecipe) => {
    // code to add the new recipe to the state
    setRecipes(prevRecipes => [...prevRecipes, newRecipe])
  }

  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} createRecipe={createRecipe} deleteRecipe={deleteRecipe} />

    </div>
  );
}

export default App;
