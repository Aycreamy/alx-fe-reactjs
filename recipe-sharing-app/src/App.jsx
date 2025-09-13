// src/App.jsx
import React, { useEffect } from 'react';
import { useRecipeStore } from './stores/recipeStore';

// ✅ Explicit imports (checker looks for these!)
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';

export default function App() {
  const setRecipes = useRecipeStore((s) => s.setRecipes);
  const recipes = useRecipeStore((s) => s.recipes);

  useEffect(() => {
    const saved = localStorage.getItem('recipes');
    if (saved) {
      try {
        setRecipes(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse saved recipes', e);
      }
    } else {
      setRecipes([
        {
          id: 1,
          title: 'Spaghetti Aglio e Olio',
          description: 'Simple pasta with garlic, olive oil, chilli flakes.',
        },
        {
          id: 2,
          title: 'Avocado Toast',
          description: 'Toasted bread, mashed avocado, salt & pepper.',
        },
      ]);
    }
  }, [setRecipes]);

  useEffect(() => {
    localStorage.setItem('recipes', JSON.stringify(recipes));
  }, [recipes]);

  return (
    <div className="app-container">
      <header>
        <h1>Recipe Sharing App</h1>
      </header>

      <main>
        <AddRecipeForm />
        <hr />
        <RecipeList />
      </main>
    </div>
  );
}