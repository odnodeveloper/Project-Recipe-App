import React from "react";

function RecipeCreate({newRecipe, setNewRecipe}) {
  

  const handleChange = (event) => {
    setNewRecipe({
      ...newRecipe,
      [event.target.name]: event.target.value
    })
  }

  return (
    <tr>
      <td>
        <input 
          name="name" 
          onChange={handleChange} 
          value={newRecipe.name} 
          placeholder="Recipe name" 
        />
      </td>
      <td>
        <input 
          name="cuisine" 
          onChange={handleChange} 
          value={newRecipe.cuisine} 
          placeholder="Cuisine" 
        />
      </td>
      <td>
        <input 
          name="photo" 
          onChange={handleChange} 
          value={newRecipe.photo} 
          placeholder="Photo URL" 
        />
      </td>
      <td>
        <textarea 
          name="ingredients" 
          onChange={handleChange} 
          value={newRecipe.ingredients} 
          placeholder="Ingredients">
        </textarea>
      </td>
      <td>
        <textarea 
          name="preparation" 
          onChange={handleChange} 
          value={newRecipe.preparation} 
          placeholder="Preparation">
        </textarea>
      </td>
      <td>
        <button type="submit">Create</button>
      </td>
    </tr>
  );
}

export default RecipeCreate;
