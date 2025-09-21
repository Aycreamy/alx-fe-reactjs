import { Link } from 'react-router-dom'

export default function UserCard({ user }) {
  return (
    <div style={{ border: '1px solid #eee', padding: '0.75rem', borderRadius: 8 }}>
      <img src={user.avatar_url} alt={user.login} style={{ width: 80, height: 80, borderRadius: 8 }} />
      <h3 style={{ margin: '0.5rem 0 0.25rem' }}>{user.login}</h3>
      <p style={{ margin: 0 }}>
        <a href={user.html_url} target="_blank" rel="noreferrer">GitHub profile</a>
      </p>
      <p style={{ marginTop: '0.5rem' }}>
        <Link to={`/user/${user.login}`}>View details</Link>
      </p>
    </div>
  )
}
