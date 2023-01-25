import React, {useState} from "react";
import RecipeCreate from "./RecipeCreate";

function RecipeList({ recipes, createRecipe, deleteRecipe }) {

  const [newRecipe, setNewRecipe] = useState({
    name: '', 
    cuisine: '', 
    photo: '', 
    ingredients: '', 
    preparation: ''
  });
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked
  
  const handleSubmit = (event) => {
    event.preventDefault()
    createRecipe(newRecipe)
    setNewRecipe({
      name: '', 
      cuisine: '', 
      photo: '', 
      ingredients: '', 
      preparation: ''
    })
  }

  return (
    <form name="create"
      onSubmit={handleSubmit}>
    <table>
      <colgroup> <col/>
      <col/>
      <col/>
      <col/>
      <col/>
      <col/> 
      </colgroup>
      <thead>
        <tr>
          <th>Name</th>
          <th>Cuisine</th>
          <th>Photo</th>
          <th>Ingredients</th>
          <th>Preparation</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {recipes.map((recipe, index) => (
          <tr key={index}>
            <td>{recipe.name}</td>
            <td>{recipe.cuisine}</td>
            <td>
              <img src={recipe.photo} alt={recipe.name} />
            </td>
            {/* display a scrollbar if there is too much text */}
            <td className="content_td">
              <p>{(recipe.ingredients)}</p>
            </td>
             <td className="content_td">
              <p>{(recipe.preparation)}</p>
            </td>
            <td>
              <button name="delete" onClick={() => deleteRecipe(index)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
        <RecipeCreate newRecipe={newRecipe} setNewRecipe={setNewRecipe} />
      </tbody>
    </table>
    </form>
  );
}

export default RecipeList;
