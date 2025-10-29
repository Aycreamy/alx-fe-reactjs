import React, { useState } from 'react';

function AddRecipeForm() {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Basic validation
    if (!title || !ingredients || !steps) {
      setError('All fields are required.');
      return;
    }

    const ingredientsList = ingredients.split(',').map((item) => item.trim());

    if (ingredientsList.length < 2) {
      setError('Please include at least two ingredients.');
      return;
    }

    const newRecipe = {
      title,
      ingredients: ingredientsList,
      instructions: steps.split('\n').map((step) => step.trim()),
    };

    console.log('New recipe added:', newRecipe);
    alert('Recipe submitted successfully!');

    // Reset form
    setTitle('');
    setIngredients('');
    setSteps('');
    setError('');
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Add a New Recipe</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

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
