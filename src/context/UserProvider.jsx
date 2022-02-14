import { useState, useEffect, useContext, createContext } from 'react';
import { getUser } from '../services/users';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUser();
      setCurrentUser(user);
      setLoading(false);
    };
    fetchUser();
  }, []);

  if (loading) {
    return <h1>loading</h1>;
  }

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>{children}</UserContext.Provider>
  );
};

const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('useUser must be defined within a UserContext Provider');
  }
  return context;
};

export { UserProvider, useUser };
