import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getUser, getUserRepos } from '../services/github'

export default function UserProfile() {
  const { username } = useParams()
  const [user, setUser] = useState(null)
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      setLoading(true)
      try {
        const u = await getUser(username)
        setUser(u)
        const r = await getUserRepos(username)
        setRepos(r)
      } catch (err) {
        console.error(err)
        setUser(null)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [username])

  if (loading) return <p>Loading...</p>
  if (!user) return <p>User not found.</p>

  return (
    <div>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <img src={user.avatar_url} alt={user.login} style={{ width: 120, borderRadius: 8 }} />
        <div>
          <h2 style={{ margin: 0 }}>{user.name || user.login}</h2>
          <p style={{ margin: '0.25rem 0' }}>{user.bio}</p>
          <p style={{ margin: 0 }}>Followers: {user.followers} • Following: {user.following}</p>
          <p style={{ marginTop: '0.25rem' }}><a href={user.html_url} target="_blank" rel="noreferrer">Open on GitHub</a></p>
        </div>
      </div>

      <hr style={{ margin: '1rem 0' }} />

      <h3>Repos</h3>
      <ul>
        {repos.map(r => (
          <li key={r.id}>
            <a href={r.html_url} target="_blank" rel="noreferrer">{r.name}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
