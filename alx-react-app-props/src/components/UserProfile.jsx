// src/components/UserProfile.jsx
import { useContext } from 'react';
import UserContext from '../UserContext'; // adjust path if UserContext.js is in src/

function UserProfile() {
  const userData = useContext(UserContext);

  if (!userData) {
    return <p>Loading user data...</p>;
  }

  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
      <h2 style={{ color: 'blue' }}>{userData.name}</h2>
      <p>Email: <span style={{ fontWeight: 'bold' }}>{userData.email}</span></p>
    </div>
  );
}

export default UserProfile;