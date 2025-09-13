// src/components/DeleteRecipeButton.jsx
import React from 'react';
import { useRecipeStore } from './recipeStore';

const DeleteRecipeButton = ({ recipeId, onDeleted }) => {
  const deleteRecipe = useRecipeStore((s) => s.deleteRecipe);

  const handleDelete = () => {
    const ok = window.confirm('Delete this recipe?');
    if (!ok) return;
    deleteRecipe(recipeId);
    if (typeof onDeleted === 'function') onDeleted();
  };

  return (
    <button onClick={handleDelete} aria-label="Delete recipe">
      Delete
    </button>
  );
};

export default DeleteRecipeButton;