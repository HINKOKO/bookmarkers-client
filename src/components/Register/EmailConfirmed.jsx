import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const EmailConfirmed = () => {
  const navigate = useNavigate();
  useEffect(() => {
    // Check for the query parameter in the URL
    const urlParams = new URLSearchParams(window.location.search);
    const redirectToLogin = urlParams.get('redirect') === 'login';

    // If the query parameter indicates a redirect to the login modal, open the modal
    if (redirectToLogin) {
      // Open your login modal using JavaScript or any frontend framework/library you're using
      // For example, using jQuery:
      $('#loginModal').modal('show');
    }
  }, []);

  const handleNavigate = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const redirectToLogin = urlParams.get('redirect') === 'login';
    if (redirectToLogin) {
      // Open your login modal using JavaScript or any frontend framework/library you're using
      // For example, using jQuery:
      $('#loginModal').modal('show');
    } else {
      // Navigate to the Home page
      navigate('/');
    }
  };

  return (
    <div className="relative flex h-screen justify-center">
      <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-r from-green-500 to-green-900 bg-opacity-50 z-0"></div>
      <div className="flex container md:my-4 md:rounded-xl flex-col items-center p-6 border-2 w-full md:w-1/2 md:bg-slate-200 relative z-10">
        <h2 className="text-2xl text-center font-bold font-kanit">
          Email Confirmed
        </h2>
        <p className="mt-4 text-center">
          Thank you for confirming your email. Your registration is now
          complete!
        </p>
        <button
          className="mt-6 px-4 py-4 border w-full rounded-xl bg-amber-700 text-lg font-medium font-kanit"
          onClick={handleNavigate}
        >
          {/* {redirectToLogin ? 'Go to Login' : 'Go to Home'} */}
          Go home and login
        </button>
      </div>
    </div>
  );
};

export default EmailConfirmed;
