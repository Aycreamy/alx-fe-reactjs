import axios from "axios";

const BASE_URL = "https://api.github.com";

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

    const response = await axios.get(
      `${BASE_URL}/search/users?q=${searchQuery}`
    );

    return response.data.items; // The "items" array contains the list of users
  } catch (error) {
    throw error;
  }
};
