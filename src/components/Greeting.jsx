import { useAuth } from '../store/AuthContext';

const Greeting = () => {
  const { user } = useAuth();

  return (
    <div className="bg-black text-white top-0 right-0 left-0">
      Hello, {user?.NickName}
    </div>
  );
};

export default Greeting;
