// src/hooks/useRecipes.js
import { useState, useEffect } from 'react';
import { fetchRecipes } from '../api/spoonacular';

const useRecipes = (query) => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getRecipes = async () => {
      const recipes = await fetchRecipes(query);
      setRecipes(recipes);
      setLoading(false);
    };
    getRecipes();
  }, [query]);

  return { recipes, loading };
};

export default useRecipes;
