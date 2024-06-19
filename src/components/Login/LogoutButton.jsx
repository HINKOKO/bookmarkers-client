import { useState } from 'react';
import { IoMdLogOut } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { getAvatarUrl } from '../../store/avatar_utils';

const LogoutButton = ({
  isAuthenticated,
  setIsAuthenticated,
  user,
  setUser,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const avatarUrl = getAvatarUrl(user?.avatar_url);

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
      className="hidden md:flex justify-between gap-[20px] items-center bg-slate-900 space-y-6 absolute top-0 right-0 mt-10 pr-10 rounded-lg "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ cursor: 'pointer' }}
    >
      <div id="avatar" className="flex m-2 pr-2 border-r-4">
        <Link
          to="/dashboard"
          className="ml-4 py-2 px-4 text-white rounded"
          // onClick={e => {
          //   if (isHovered) {
          //     e.preventDefault(); // Prevent default action if hovering over logout icon
          //   }
          // }}
        >
          Welcome {user.username}
          <div>
            {user.avatar_url && (
              <img src={avatarUrl} alt="User Avatar" width={36} height={36} />
            )}
          </div>
        </Link>
      </div>

      {/* <div
        className={`text-lg transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        Logout
      </div> */}
      <div id="logout" className="group logout flex m-2">
        <IoMdLogOut
          className="w-12 h-12 group-hover:scale-110"
          onClick={handleLogout} // This allows clicking the icon to trigger logout
        />
        <span className="hidden text-bold group-hover:translate-x-2 group-hover:block">
          logout
        </span>
      </div>
    </div>
  );
};

export default LogoutButton;
