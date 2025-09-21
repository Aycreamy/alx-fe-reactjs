import UserCard from './UserCard'

export default function UserList({ users = [] }) {
  if (!users.length) return <p>No results yet. Try searching for a username.</p>

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1rem' }}>
      {users.map((u) => <UserCard key={u.login} user={u} />)}
    </div>
  )
}
