import { useState } from 'react'
import SearchBar from '../components/SearchBar'
import UserList from '../components/UserList'

export default function Home() {
  const [users, setUsers] = useState([])

  return (
    <div>
      <SearchBar onResults={setUsers} />
      <hr style={{ margin: '1rem 0' }} />
      <UserList users={users} />
    </div>
  )
}