import React, { useState } from 'react';
import { searchRecipes } from '../api/spoonacular';
import RecipeCard from '../components/RecipeCard';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    const recipes = await searchRecipes({
      query,
      ingredients: ingredients.split(',').map((item) => item.trim()),
      number: 10,
    });
    setRecipes(recipes);
    setLoading(false);
  };

  return (
    <div className="home-page">
      <h1>Food Recipes</h1>
      <div>
        <input
          type="text"
          placeholder="Search by recipe name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <input
          type="text"
          placeholder="Search by ingredients (comma separated)"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="recipes">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
