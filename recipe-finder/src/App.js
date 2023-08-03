import "./styles.css";
import React, { useState } from "react";
import SearchBar from "./Components/SearchBar";
import RecipeList from "./Components/RecipeList";
import { searchRecipes } from "./Api";

const App = () => {
  const [recipes, setRecipes] = useState([]);

  const handleSearch = async (query) => {
    const results = await searchRecipes(query);
    setRecipes(results);
  };

  return (
    <div className="app">
      <h1>Recipe Finder</h1>
      <SearchBar onSearch={handleSearch} />
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default App;
