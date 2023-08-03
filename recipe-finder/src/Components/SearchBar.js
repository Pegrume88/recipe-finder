// SearchBar.js
import React, { useState } from "react";
import { searchRecipes } from "../Api";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    console.log("Search button clicked");
    const results = await searchRecipes(query);
    onSearch(results);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for recipes"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
