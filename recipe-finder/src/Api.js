// api.js
export const API_KEY = "b56cb75541d164b20a33766398a3d95e"; // Replace with your Edamam API key
export const API_ID = "d5f7214d"; // Replace with your Edamam API ID
export const API_URL =
  "https://developer.edamam.com/admin/applications/1409623656538";

export const searchRecipes = async (query) => {
  try {
    const response = await fetch(
      "/api/admin/applications/1409623656538?q=&app_id=d5f7214d&app_key=b56cb75541d164b20a33766398a3d95e"
    );

    const data = await response.json();
    return data.hits;
  } catch (error) {
    console.error("Fetch error:", error);
    return [];
  }
};
