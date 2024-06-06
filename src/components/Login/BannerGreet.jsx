import { useAuth } from '../../store/AuthContext';

const BannerGreet = () => {
  const { user } = useAuth();
  return (
    <div
      className="flex items-center bg-black w-screen h-[20px] absolute top-0 right-0 left-0"
      style={{ cursor: 'pointer' }}
    >
      <h3 className="text-white font-semibold font-kanit text-center">
        Hello to you, database function is coming
      </h3>
    </div>
  );
};

export default BannerGreet;
