// components/LoginModal.jsx
import { useModal } from '../../store/ModalContext';
import { useAuth } from '../../store/AuthContext';
import './login.css';

const url = `http://localhost:8080`;

const LoginModal = () => {
  const { isModalOpen, closeModal } = useModal();
  const { handleLoginResponse } = useAuth();

  function handleGoogleLogin() {
    window.location.href = 'http://localhost:8080/auth/google';
  }

  function handleGithubLogin() {
    window.location.href = 'http://localhost:8080/auth/github';
  }

  // handleLoginResponse();

  if (!isModalOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ">
        <div className="bg-white p-4 rounded shadow-md rounded-xl w-96">
          <div className="flex flex-col items-center">
            <h2 className="text-center font-bold text-2xl font-kanit">
              Sign in
            </h2>
            <button className="px-4 py-2 bg-white border-2"></button>
            <img
              src="/public/watching-you.png"
              alt="Watching You"
              className="rounded-md p-4"
              width={260}
              height={260}
            />
          </div>
          <div className="flex flex-col mt-4">
            <div className="px-4 py-8">
              <button
                className="py-2 px-4 bg-green-400 rounded-lg"
                onClick={handleGoogleLogin}
              >
                Google
              </button>
            </div>
            <div className="px-4 py-8">
              <button
                className="py-2 px-4 bg-green-400 rounded-lg"
                onClick={handleGithubLogin}
              >
                Github
              </button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between">
            <button
              onClick={closeModal}
              className="mt-4 bg-fuchsia-800 text-white px-4 py-2 rounded"
            >
              Abort
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
