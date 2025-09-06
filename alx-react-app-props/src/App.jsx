// src/App.jsx
import ProfilePage from './ProfilePage';
import UserContext from './UserContext';

function App() {
  // The user data that we want to share with all components
  const userData = { name: "Ayomide Oluyide", email: "Aycreamy@gmail.com.com" };

  return (
    // Wrap the entire app (or the part that needs the data) in the Provider
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;
