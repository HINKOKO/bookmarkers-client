import { useState } from 'react';
import { IoMdLogOut } from 'react-icons/io';

const url = 'http://localhost:8080';

const LogoutButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const handleLogout = async () => {
    try {
      const resp = await fetch(`${url}/logout`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });
      if (resp.ok) {
        window.location.href = '/';
      } else {
        console.error('failed to logout!');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="icon-container flex items-center space-x-4 absolute top-0 right-0 mt-10 pr-10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleLogout}
      style={{ cursor: 'pointer' }}
    >
      <div
        className={`text-lg transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        Logout
      </div>
      <IoMdLogOut className="w-12 h-12 hover:scale-110" />
    </div>
  );
};

export default LogoutButton;
