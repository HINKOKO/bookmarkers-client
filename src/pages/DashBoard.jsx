import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/AuthContext';
import { FaHome } from 'react-icons/fa';

import EditProfile from '../components/Dashboard/EditProfile';
import SubmitBookmark from '../components/Dashboard/SubmitBookmark';
import TabComponent from '../components/Dashboard/TabComponent';
import axios from 'axios';

const DashBoard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const tabs = [
    { label: 'Edit profile', content: <EditProfile /> },
    { label: 'Submit bookmark', content: <SubmitBookmark /> },
  ];

  return (
    <div className="container flex flex-col mx-auto bg-teal-500 min-h-screen w-full">
      <header
        className="relative flex justify-center items-center space-x-8 mt-12 bg-mainViolet h-[120px] mx-auto w-11/12 rounded-lg
      "
      >
        <h1 className="font-bold text-2xl md:text-4xl font-kanit text-center">
          Welcome to you, {user.username}
        </h1>
        <img src={user.avatar_url} width={32} height={32} alt="user_avatar" />
        <FaHome
          className="hidden md:block absolute top-10 right-10 text-3xl hover:cursor-pointer hover:scale-110"
          onClick={() => navigate('/')}
        />
      </header>
      <TabComponent tabs={tabs} />
    </div>
  );
};

export default DashBoard;
