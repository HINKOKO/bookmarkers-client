import { createContext, useState, useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem('accessToken')
  );
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const token = searchParams.get('accessToken');
    console.log('token from url is \t', token);
    if (token) {
      console.log(token);
      handleLoginResponse(token);
      navigate('/dashboard', { replace: true });
    }
  }, [location.search, navigate]);

  const checkAuthStatus = async () => {
    console.log('accesstoken is set to ', accessToken);
    try {
      const res = await fetch(`http://localhost:8080/`, {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (res.ok) {
        const data = await res.json();
        setIsAuthenticated(data.authenticated);
        if (data.authenticated) {
          setUser(data.user);
        }
      } else {
        setIsAuthenticated(false);
        setUser(null);
      }
    } catch (error) {
      console.error('Failed to check auth status', error);
      setIsAuthenticated(false);
      setUser(null);
    }
  };

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const handleLoginResponse = token => {
    setAccessToken(token);
    localStorage.setItem('accessToken', token);
    fetchUserInfo(token);
  };

  const fetchUserInfo = async token => {
    if (token) {
      try {
        console.log('token when fetching userInfo', token);
        // Make an API call to fetch user information using the access token
        const response = await fetch('http://localhost:8080/user-info', {
          headers: {
            Authorization: `Bearer ${token}`,
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
    setUser,
    handleLoginResponse,
    isAuthenticated,
    setIsAuthenticated,
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
