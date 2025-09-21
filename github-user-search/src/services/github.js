import axios from 'axios'

const BASE_URL = 'https://api.github.com'
const TOKEN = import.meta.env.VITE_APP_GITHUB_API_KEY

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: TOKEN ? { Authorization: `token ${TOKEN}` } : {}
})

export async function searchUsers(q) {
  // q = search query (username or part)
  const res = await axiosInstance.get('/search/users', { params: { q } })
  return res.data // .items has array of users
}

export async function getUser(username) {
  const res = await axiosInstance.get(`/users/${username}`)
  return res.data
}

export async function getUserRepos(username) {
  const res = await axiosInstance.get(`/users/${username}/repos`, { params: { per_page: 20, sort: 'updated' } })
  return res.data
}
