const API_KEY = process.env.REACT_APP_SPOONACULAR_API_KEY;
const BASE_URL = 'https://api.spoonacular.com/recipes/complexSearch';

export const searchRecipes = async ({
  query,
  ingredients,
  nutrients,
  maxUsedIngredients,
  minMissingIngredients,
  sort,
  number = 10,
}) => {
  let url = `${BASE_URL}?apiKey=${API_KEY}&number=${number}`;

  if (query) url += `&query=${query}`;
  if (ingredients) url += `&includeIngredients=${ingredients.join(',')}`;
  if (nutrients) {
    Object.keys(nutrients).forEach((key) => {
      url += `&${key}=${nutrients[key]}`;
    });
  }
  if (maxUsedIngredients) url += `&maxUsedIngredients=${maxUsedIngredients}`;
  if (minMissingIngredients) url += `&minMissingIngredients=${minMissingIngredients}`;
  if (sort) url += `&sort=${sort}`;

  const response = await fetch(url);
  const data = await response.json();
  return data.results;
};

// Add more API functions as needed
