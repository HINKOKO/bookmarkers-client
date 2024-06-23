import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

import ListUsers from '../components/AdminDashboard/ListUsers';
import ListBookmarks from '../components/AdminDashboard/ListBookmarks';
import Unauthorized from '../components/AdminDashboard/Unauthorized';

const AdminDashboard = ({ user }) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const navigate = useNavigate();

  // useEffect to check if user is marked as admin
  useEffect(() => {
    if (!user || !user.is_admin) {
      navigate('/unauthorized');
    }
  }, [user, navigate]);

  const handleUserClick = user => {
    setSelectedUser(user);
  };

  // render nothing while redirecting
  if (!user || !user.is_admin) {
    return null;
  }

  return (
    <div className="relative flex container mx-auto min-h-screen w-screen bg-purple-800">
      <button className="z-40" onClick={() => navigate('/')}>
        <FaHome className="text-3xl absolute top-5 left-5 cursor-pointer" />
      </button>
      <div className="w-1/4 bg-cyan-700 p-4">
        <ListUsers onUserClick={handleUserClick} />
      </div>
      <div className="w-3/4 bg-white p-4">
        {selectedUser ? (
          <ListBookmarks user={selectedUser} />
        ) : (
          <div className="text-center text-gray-500">
            Select a user to view bookmarks
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
