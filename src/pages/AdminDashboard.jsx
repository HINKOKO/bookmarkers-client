import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

import ListUsers from '../components/AdminDashboard/ListUsers';
import ListBookmarks from '../components/AdminDashboard/ListBookmarks';

const AdminDashboard = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const navigate = useNavigate();

  const handleUserClick = user => {
    setSelectedUser(user);
  };

  return (
    <div className="relative flex container mx-auto min-h-screen w-screen bg-purple-800">
      <FaHome
        className="text-3xl absolute top-5 left-5 cursor-pointer"
        onClick={() => navigate('/')}
      />
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
