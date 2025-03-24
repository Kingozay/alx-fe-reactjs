import { UserContext } from './UserContext';  // Import named export
import UserContext from './UserContext';  // Changed from named import
// ... rest remains the same
import ProfilePage from './ProfilePage';

function App() {
  const userData = { 
    name: "Jane Doe", 
    email: "jane.doe@example.com" 
  };

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;