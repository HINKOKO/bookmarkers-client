import { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem('accessToken')
  );

  const [user, setUser] = useState(null);

  const handleLoginResponse = token => {
    setAccessToken(token);
    localStorage.setItem('accessToken', token);
  };

  const fetchUserInfo = async () => {
    if (accessToken) {
      try {
        // Make an API call to fetch user information using the access token
        const response = await fetch('http://localhost:8080/user-info', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (response.ok) {
          const userInfo = await response.json();
          console.log(
            'fetched user info like so' + JSON.stringify(userInfo, null, 2)
          );
          setUser(userInfo);
        } else {
          throw new Error('Failed to fetch user information');
        }
      } catch (error) {
        console.error('Error fetching user information:', error.message);
      }
    }
  };

  useEffect(() => {
    if (accessToken) {
      fetchUserInfo();
    }
  }, [accessToken]);

  const value = {
    accessToken,
    user,
    handleLoginResponse,
    isAuthenticated: !!accessToken,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
