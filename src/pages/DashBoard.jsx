import { useAuth } from '../store/AuthContext';

const DashBoard = () => {
  const { user } = useAuth();

  if (!user) {
    return <div>Loadading...</div>;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      {user && (
        <div>
          <p>Nickname: {user.username}</p>
          <p>
            Avatar: <img src={user.avatar_url} alt="Avatar" />
          </p>
        </div>
      )}
    </div>
  );
};

export default DashBoard;

// const [loading, setLoading] = useState(true);
// const [userInfo, setUserInfo] = useState(null);
// const [accessToken, setAccessToken] = useState('');

// useEffect(() => {
//   const fetchUserInfo = async () => {
//     try {
//       const token = localStorage.getItem('accessToken');
//       console.log('Dashboard:: we get token => ' + token);
//       if (token) setAccessToken(token);
//       const response = await fetch('http://localhost:8080/user-info', {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       if (response.ok) {
//         const userInfo = await response.json();
//         setUserInfo(userInfo);
//       }
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setLoading(false);
//     }
//   };
//   fetchUserInfo();
// }, [accessToken]);
