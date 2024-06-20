import { createContext, useState, useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [cookies, setCookie, removeCookie] = useCookies(['refresh_token']);
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem('accessToken')
  );
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const tokenFromCookie = cookies.refresh_token;
    console.log('tokenfromcookie' + tokenFromCookie);
    // if (tokenFromURL) {
    //   handleLoginResponse(tokenFromURL);
    //   navigate('/dashboard', { replace: true });
    // } else {
    if (tokenFromCookie) {
      fetchUserInfo(tokenFromCookie);
    }
  }, [cookies.refresh_token]);

  const handleLoginResponse = token => {
    setCookie('refresh_token', token, { path: '/' });
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
          credentials: 'include',
        });

        if (response.ok) {
          const userInfo = await response.json();
          console.log(
            'fetched user info like so' + JSON.stringify(userInfo, null, 2)
          );
          setUser(userInfo);
          setIsAuthenticated(true);
        } else {
          throw new Error('Failed to fetch user information');
        }
      } catch (error) {
        console.error('Error fetching user information:', error.message);
        setIsAuthenticated(false);
        setUser(null);
      }
    }
  };

  const logout = () => {
    removeCookie('refresh_token');
    setUser(null);
    setIsAuthenticated(false);
  };

  // const checkAuthStatus = async () => {
  //   const token = cookies.refresh_token;
  //   console.log('token from cookies\t', token);
  //   try {
  //     const res = await fetch(`http://localhost:8080/user-info`, {
  //       method: 'GET',
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //       credentials: 'include',
  //     });
  //     if (res.ok) {
  //       const data = await res.json();
  //       setIsAuthenticated(data.authenticated);
  //       if (data.authenticated) {
  //         setUser(data.user);
  //       }
  //     } else {
  //       setIsAuthenticated(false);
  //       setUser(null);
  //     }
  //   } catch (error) {
  //     console.error('Failed to check auth status', error);
  //     setIsAuthenticated(false);
  //     setUser(null);
  //   }
  // };

  // useEffect(() => {
  //   checkAuthStatus();
  // }, [cookies.refresh_token]);

  const value = {
    accessToken: cookies.refresh_token,
    user,
    setUser,
    handleLoginResponse,
    isAuthenticated,
    setIsAuthenticated,
    logout,
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
