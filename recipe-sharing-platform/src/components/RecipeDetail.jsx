import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const RecipeDetail = () => {
  const { id } = useParams(); // Get recipe ID from the URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/src/data.json")
      .then((res) => res.json())
      .then((data) => {
        const selectedRecipe = data.find((item) => item.id === parseInt(id));
        setRecipe(selectedRecipe);
      })
      .catch((err) => console.error("Error fetching recipe details:", err));
  }, [id]);

  if (!recipe) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-500 text-lg">
        Loading recipe details...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">
      <div className="max-w-3xl bg-white shadow-lg rounded-xl p-6">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{recipe.title}</h1>
        <p className="text-gray-600 mb-6">{recipe.summary}</p>

        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold text-blue-600 mb-2">
              🧂 Ingredients
            </h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>2 cups of example ingredient</li>
              <li>1 tablespoon of something</li>
              <li>Salt and pepper to taste</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-blue-600 mb-2">
              👩🏽‍🍳 Instructions
            </h2>
            <ol className="list-decimal list-inside text-gray-700 space-y-2">
              <li>Preheat your oven to 180°C (356°F).</li>
              <li>Mix all ingredients in a bowl.</li>
              <li>Cook until golden brown and serve warm.</li>
            </ol>
          </div>
        </div>

        <div className="mt-6">
          <Link
            to="/"
            className="inline-block bg-gray-200 text-gray-700 font-medium px-4 py-2 rounded-lg hover:bg-gray-300"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
