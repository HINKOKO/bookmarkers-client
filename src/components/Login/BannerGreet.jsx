import { useAuth } from '../../store/AuthContext';
import { useNavigate } from 'react-router-dom';

const BannerGreet = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  if (!user) return '';
  return (
    <div
      className="flex items-center bg-black w-1/3 h-[26px] absolute top-0 right-0"
      style={{ cursor: 'pointer' }}
      onClick={() => navigate('/dashboard')}
    >
      <h3 className="text-white font-semibold font-kanit text-center">
        Hello to you {user.username}
      </h3>
    </div>
  );
};

export default BannerGreet;
