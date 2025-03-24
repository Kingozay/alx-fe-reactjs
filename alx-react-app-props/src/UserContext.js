import { createContext } from 'react';
import UserContext from './UserContext';  // ✅ Default import


const UserContext = createContext();  // ✅ Default export (no null needed)
export default UserContext;