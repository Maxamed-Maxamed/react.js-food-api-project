import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Updated import
import HomePage from './pages/HomePage';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes> {/* Updated component name */}
        <Route path="/" element={<HomePage />} /> {/* Updated usage */}
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
};

export default App;
