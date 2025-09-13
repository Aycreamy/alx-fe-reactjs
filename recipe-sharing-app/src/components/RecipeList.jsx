// src/components/RecipeList.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  if (!recipes.length) return <p>No recipes yet — add one!</p>;

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <article className="recipe-card" key={recipe.id}>
          <h3>
            <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
          </h3>
          <p>{recipe.description}</p>
          <div style={{ marginTop: 8 }}>
            <Link to={`/edit/${recipe.id}`} style={{ marginRight: 8 }}>
              Edit
            </Link>
            <DeleteRecipeButton recipeId={recipe.id} />
          </div>
        </article>
      ))}
    </div>
  );
};
export default RecipeList;