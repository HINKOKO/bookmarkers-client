import { useNavigate } from 'react-router-dom';

const EmailConfirm = () => {
  const navigate = useNavigate();
  return (
    <div className="relative flex h-screen justify-center">
      <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-r from-green-500 to-green-900 bg-opacity-50 z-0"></div>
      <div className="flex container md:my-4 md:rounded-xl flex-col items-center p-6 border-2 w-full md:w-1/2 md:bg-slate-200 relative z-10">
        <h2 className="text-2xl text-center font-bold font-kanit">
          Email Confirmed
        </h2>
        <p className="mt-4 text-center">
          Please Check your inbox to activate your account
        </p>
        <button
          className="mt-6 px-4 py-4 border w-full rounded-xl bg-amber-700 text-lg font-medium font-kanit"
          onClick={() => navigate('/')}
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default EmailConfirm;
