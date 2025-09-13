// src/App.jsx
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useRecipeStore } from './components/recipeStore';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm';

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
    <BrowserRouter>
      <div className="app-container">
        <header>
          <h1>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              Recipe Sharing App
            </Link>
          </h1>
          <nav>
            <Link to="/">Home</Link>
            {' • '}
            <Link to="/">All recipes</Link>
          </nav>
        </header>

        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <AddRecipeForm />
                  <hr />
                  <RecipeList />
                </>
              }
            />
            <Route path="/recipes/:id" element={<RecipeDetails />} />
            <Route path="/edit/:id" element={<EditRecipeForm />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}