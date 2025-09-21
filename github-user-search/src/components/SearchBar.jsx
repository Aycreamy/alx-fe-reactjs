import { useState } from 'react'
import { searchUsers } from '../services/github'

export default function SearchBar({ onResults = () => {} }) {
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!query.trim()) return

    setLoading(true)
    setError(null)
    try {
      const data = await searchUsers(query)
      onResults(data.items || [])
    } catch (err) {
      console.error(err)
      setError('Failed to search — check console for details')
      onResults([])
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '0.5rem' }}>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search GitHub username..."
        style={{ flex: 1, padding: '0.5rem' }}
      />
      <button type="submit" disabled={loading} style={{ padding: '0.5rem 1rem' }}>
        {loading ? 'Searching...' : 'Search'}
      </button>

      {error && <div style={{ color: 'red', marginTop: '0.5rem' }}>{error}</div>}
    </form>
  )
}
