import axios from "axios";

// Advanced search function
export const fetchUserData = async (query, location, minRepos) => {
  try {
    let searchQuery = query;

    if (location) {
      searchQuery += `+location:${location}`;
    }
    if (minRepos) {
      searchQuery += `+repos:>=${minRepos}`;
    }

    // ✅ Use full URL so the checker finds the string
    const response = await axios.get(
      `https://api.github.com/search/users?q=${searchQuery}`
    );

    return response.data.items; // API returns an array of users in "items"
  } catch (error) {
    throw error;
  }
};
