import { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem('accessToken')
  );

  const [user, setUser] = useState(null);

  const handleLoginResponse = async (searchParams, userData) => {
    const token = searchParams.get('accessToken');
    console.log('access token is' + token);
    if (token) {
      setAccessToken(token);
      localStorage.setItem('accessToken', token);
      const userInfo = JSON.parse(decodeURIComponent(userData));
      setUser(userInfo);
      console.log(userInfo);
    } else if (!accessToken) {
      console.log('login failed, acess token not found');
    }
  };

  const fetchUserInfo = async accessToken => {
    try {
      console.log(
        'do I have accessToken when fetching user info ? ' + accessToken
      );
      // Make an API call to fetch user information using the access token
      const response = await fetch('http://localhost:8080/user-info', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (response.ok) {
        const userInfo = await response.json();
        return userInfo;
      } else {
        throw new Error('Failed to fetch user information');
      }
    } catch (error) {
      console.error('Error fetching user information:', error.message);
      // Handle error gracefully, return default user info or rethrow the error
      return { username: 'Default User' };
    }
  };

  useEffect(() => {
    if (accessToken) {
      console.log('access token', accessToken);
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
