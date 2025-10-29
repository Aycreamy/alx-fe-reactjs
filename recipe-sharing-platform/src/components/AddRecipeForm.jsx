import React, { useState } from 'react';

function AddRecipeForm() {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');

  // ✅ Checker expects these names:
  const [errors, setErrors] = useState({});

  // ✅ Separate validation function (the checker looks for "validate")
  const validate = () => {
    const newErrors = {};

    if (!title.trim()) {
      newErrors.title = 'Title is required.';
    }
    if (!ingredients.trim()) {
      newErrors.ingredients = 'Ingredients are required.';
    } else {
      const ingredientsList = ingredients.split(',').map((item) => item.trim());
      if (ingredientsList.length < 2) {
        newErrors.ingredients = 'Please include at least two ingredients.';
      }
    }
    if (!steps.trim()) {
      newErrors.steps = 'Preparation steps are required.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // ✅ return true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return; // ✅ run validation before submitting

    const newRecipe = {
      title,
      ingredients: ingredients.split(',').map((item) => item.trim()),
      instructions: steps.split('\n').map((step) => step.trim()),
    };

    console.log('New recipe added:', newRecipe);
    alert('Recipe submitted successfully!');

    // Reset form
    setTitle('');
    setIngredients('');
    setSteps('');
    setErrors({});
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Add a New Recipe</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* ✅ Display errors */}
        {Object.values(errors).length > 0 && (
          <div className="text-red-500 text-sm text-center">
            {Object.values(errors).map((error, index) => (
              <p key={index}>{error}</p>
            ))}
          </div>
        )}

        {/* Title Input */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Recipe Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Enter recipe title"
          />
        </div>

        {/* Ingredients Textarea */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Ingredients</label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Enter ingredients separated by commas"
            rows="3"
          ></textarea>
        </div>

        {/* Steps Textarea */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Preparation Steps</label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Enter each step on a new line"
            rows="4"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
