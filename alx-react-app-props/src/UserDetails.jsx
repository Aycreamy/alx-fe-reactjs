// src/UserDetails.jsx
import { useContext } from 'react';
import UserContext from './UserContext';

function UserDetails() {
  const userData = useContext(UserContext);

  // Optional safety check in case value is not provided
  if (!userData) {
    return <p>Loading user data...</p>;
  }

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;
