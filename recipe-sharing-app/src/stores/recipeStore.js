// src/stores/recipeStore.js
import create from 'zustand';

/**
 * useRecipeStore - Zustand store for recipes
 * - recipes: array of { id, title, description }
 * - addRecipe(newRecipe): append a recipe
 * - setRecipes(recipes): replace the list (useful for init)
 */
export const useRecipeStore = create((set) => ({
  recipes: [],
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes }),
}));
