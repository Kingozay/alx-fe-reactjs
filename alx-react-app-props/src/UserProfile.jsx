import { useContext } from 'react';
import { UserContext } from './UserContext';
import UserContext from './UserContext';  // Changed from named import
// ... rest remains the same

function UserProfile() {  // Must be named UserProfile
  const userData = useContext(UserContext);

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserProfile;