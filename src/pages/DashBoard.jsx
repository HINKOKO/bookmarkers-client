import { useAuth } from '../store/AuthContext';

const DashBoard = () => {
  const { user } = useAuth();

  if (!user)
    return (
      <div
        className="flex items-center bg-black w-screen h-[20px] absolute top-0 right-0 left-0"
        style={{ cursor: 'pointer' }}
      >
        <h3 className="text-white font-semibold font-kanit text-center">
          Loading...
        </h3>
      </div>
    );

  return (
    <div>
      <h1>Dashboard</h1>
      {user && (
        <div>
          <p>Nickname: {user.NickName}</p>
          <p>
            Avatar: <img src={user.AvatarURL} alt="Avatar" />
          </p>
          <p>Provider: {user.Provider}</p>
          <p>UserID: {user.UserID}</p>
        </div>
      )}
    </div>
  );
};

export default DashBoard;
