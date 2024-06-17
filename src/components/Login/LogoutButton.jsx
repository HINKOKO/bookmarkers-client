import { useState } from 'react';
import { IoMdLogOut } from 'react-icons/io';
import { Link } from 'react-router-dom';
import LoginButton from './LoginButton'; // Assuming LoginButton is imported from another file

const LogoutButton = ({
  isAuthenticated,
  setIsAuthenticated,
  user,
  setUser,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleLogout = async () => {
    try {
      const resp = await fetch(`http://localhost:8080/logout`, {
        method: 'GET',
        credentials: 'include',
      });
      if (resp.ok) {
        console.log('U are logged out, loser');
        setUser(null);
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.error('Failed to logout:', error);
    }
  };

  return (
    <div
      className="icon-container flex flex-col items-center space-y-6 absolute top-0 right-0 mt-10 pr-10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ cursor: 'pointer' }}
    >
      <div
        className={`text-lg transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={handleLogout} // This allows clicking the text to trigger logout
      >
        Logout
      </div>
      <IoMdLogOut
        className="w-12 h-12 hover:scale-110"
        onClick={handleLogout} // This allows clicking the icon to trigger logout
      />
      {isAuthenticated ? (
        <Link
          to="/dashboard"
          className="ml-4 py-2 px-4 bg-blue-600 text-white rounded"
          // onClick={e => {
          //   if (isHovered) {
          //     e.preventDefault(); // Prevent default action if hovering over logout icon
          //   }
          // }}
        >
          Welcome {user.username}
          <div>
            {user.avatar_url && <img src={user.avatar_url} alt="User Avatar" />}
          </div>
        </Link>
      ) : (
        <LoginButton />
      )}
    </div>
  );
};

export default LogoutButton;
