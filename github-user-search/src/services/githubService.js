import axios from "axios";

const BASE_URL = "https://api.github.com";

export async function fetchUserData(username) {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`);
    return response.data; // contains user info
  } catch (error) {
    throw error;
  }
}