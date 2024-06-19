import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../store/AuthContext';
import { FaHome } from 'react-icons/fa';
import { getAvatarUrl } from '../store/avatar_utils';

import EditProfile from '../components/Dashboard/EditProfile';
import SubmitBookmark from '../components/Dashboard/SubmitBookmark';
import TabComponent from '../components/Dashboard/TabComponent';

const DashBoard = () => {
  const { user } = useAuth();
  const avatarUrl = getAvatarUrl(user?.avatar_url);
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(0); // Default to edit profile

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const tabParam = searchParams.get('tab');
    if (tabParam === 'submit') {
      setActiveTab(1);
    }
  }, [location.search]);

  const navigate = useNavigate();
  const tabs = [
    { label: 'Edit profile', content: <EditProfile /> },
    { label: 'Submit bookmark', content: <SubmitBookmark /> },
  ];

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container flex flex-col mx-auto bg-slate-900 min-h-screen w-full">
      <div
        className="relative flex justify-center items-center space-x-8 mt-12 bg-gradient-to-br from-cyan-700 to-cyan-500  h-[120px] mx-auto w-11/12 rounded-lg
      "
      >
        <div className="flex items-center space-x-6" id="welcome-card">
          <h1 className="font-bold text-2xl md:text-4xl font-kanit text-center">
            Welcome to you, {user?.username || user?.NickName}
          </h1>
          <img
            src={avatarUrl}
            width={76}
            height={76}
            alt="user_avatar"
            className="rounded-lg"
          />
          <FaHome
            className="hidden md:block absolute top-10 right-10 text-3xl hover:cursor-pointer hover:scale-110"
            onClick={() => navigate('/')}
          />
        </div>
      </div>
      <TabComponent tabs={tabs} activeTab={activeTab} />
    </div>
  );
};

export default DashBoard;
