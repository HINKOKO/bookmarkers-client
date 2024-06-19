import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/AuthContext';
import { FaHome } from 'react-icons/fa';
import { getAvatarUrl } from '../store/avatar_utils';

import EditProfile from '../components/Dashboard/EditProfile';
import SubmitBookmark from '../components/Dashboard/SubmitBookmark';
import TabComponent from '../components/Dashboard/TabComponent';

const DashBoard = () => {
  const { user } = useAuth();
  const avatarUrl = getAvatarUrl(user?.avatar_url);

  const navigate = useNavigate();
  const tabs = [
    { label: 'Edit profile', content: <EditProfile /> },
    { label: 'Submit bookmark', content: <SubmitBookmark /> },
  ];

  return (
    <div className="container flex flex-col mx-auto bg-black min-h-screen w-full">
      <div
        className="relative flex justify-center items-center space-x-8 mt-12 bg-mainViolet h-[120px] mx-auto w-11/12 rounded-lg
      "
      >
        <div className="flex-1" id="welcome-card">
          <h1 className="font-bold text-2xl md:text-4xl font-kanit text-center">
            Welcome to you, {user.username}
          </h1>
          <img src={avatarUrl} width={32} height={32} alt="user_avatar" />
          <FaHome
            className="hidden md:block absolute top-10 right-10 text-3xl hover:cursor-pointer hover:scale-110"
            onClick={() => navigate('/')}
          />
        </div>
      </div>
      <TabComponent tabs={tabs} />
    </div>
  );
};

export default DashBoard;
