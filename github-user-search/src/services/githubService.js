import axios from "axios";

const BASE_URL = "https://api.github.com";

export async function fetchAdvancedUsers({ username, location, minRepos }) {
  try {
    let query = "";

    if (username) query += `${username} in:login `;
    if (location) query += `location:${location} `;
    if (minRepos) query += `repos:>=${minRepos} `;

    const response = await axios.get(`${BASE_URL}/search/users`, {
      params: { q: query.trim(), per_page: 10 }, // 10 results per page
    });

    return response.data.items; // array of users
  } catch (error) {
    throw error;
  }
}
