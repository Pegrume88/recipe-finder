const API_KEY = "c675184d8a45e55369f4a34d13cd6be0";
const API_URL = "https://developer.edamam.com/admin/applications/1409623656538"; // Replace with your API's URL

export const searchRecipes = async (query) => {
  const response = await fetch(
    `${API_URL}/search?q=${query}&apiKey=${API_KEY}`
  );
  const data = await response.json();
  return data.results; // Adjust this based on your API's response structure
};
