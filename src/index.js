import React from 'react';
import ReactDOM from 'react-dom';
import { RecipeProvider } from './context/RecipeContext';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <RecipeProvider>
      <App />
    </RecipeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);