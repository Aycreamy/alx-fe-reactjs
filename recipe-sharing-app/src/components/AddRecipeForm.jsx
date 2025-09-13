// src/components/AddRecipeForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmedTitle = title.trim();
    const trimmedDescription = description.trim();
    if (!trimmedTitle) {
      alert('Please enter a title for the recipe.');
      return;
    }

    const newRecipe = {
      id: Date.now(),
      title: trimmedTitle,
      description: trimmedDescription,
    };

    addRecipe(newRecipe);
    setTitle('');
    setDescription('');
    // optional: navigate to the new recipe details
    navigate(`/recipes/${newRecipe.id}`);
  };

  return (
    <form className="add-recipe-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Recipe title"
        aria-label="Recipe title"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Short description / steps"
        aria-label="Recipe description"
      />
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;
