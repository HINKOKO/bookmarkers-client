import { useNavigate } from 'react-router-dom';

const Unauthorized = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-red-100">
      <div className="bg-white p-8 rounded shadow-lg text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-4">
          401 Unauthorized
        </h1>
        <p className="text-gray-700 mb-6">
          You do not have permission to access this page.
        </p>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => navigate('/')}
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default Unauthorized;
