// components/LoginModal.jsx
import { useModal } from '../../store/ModalContext';
import { useAuth } from '../../store/AuthContext';
import { FaGithub } from 'react-icons/fa';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

const url = `http://localhost:8080`;

const LoginModal = ({ open }) => {
  const { isModalOpen, closeModal } = useModal();
  const { handleLoginResponse } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const modalRef = useRef(null);

  async function handleClassicLogin(e) {
    e.preventDefault();
    try {
      const response = await fetch(`${url}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // ensure cookies are included in the request
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        // Handle successful login (e.g., redirect to dashboard)
        navigate('/dashboard');
      } else {
        // Handle login failure (e.g., show error message)
        console.error('Login failed');
      }
    } catch (error) {
      console.log(error);
    }
  }

  function handleGithubLogin() {
    window.location.href = 'http://localhost:8080/auth/github';
  }

  useEffect(() => {
    function handleOutsideClick(e) {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        closeModal();
      }
    }
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [modalRef, closeModal]);

  // handleLoginResponse();

  if (!isModalOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ">
        <div
          ref={modalRef}
          className="bg-slate-100 p-4 rounded shadow-md rounded-xl w-96"
        >
          <div className="flex flex-col items-center">
            <h2 className="text-center font-bold text-2xl font-kanit">
              Sign in
            </h2>
            <img
              src="/public/watching-you.png"
              alt="Watching You"
              className="rounded-full p-4"
              width={260}
              height={260}
            />
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center px-4 py-8">
              <button
                className="py-2 px-6 bg-black rounded-lg flex items-center text-white font-md font-kanit space-x-3"
                onClick={handleGithubLogin}
              >
                <span>Log in with</span>
                <FaGithub className="text-3xl" />
              </button>
            </div>
            <div className="flex flex-col justify-center items-center px-4">
              <h3 className="text-lg font-thin font-kanit italic mb-2">
                Or Good old classic ...
              </h3>
              <form
                onSubmit={handleClassicLogin}
                className="flex flex-col space-y-4"
              >
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="What is U'r mail?"
                  className="py-2 px-4 border rounded-lg"
                />
                <input
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="U'r very secret password"
                  className="py-2 px-4 border rounded-lg"
                />
                <button
                  type="submit"
                  className="py-2 px-4 bg-black text-white font-md font-kanit rounded-lg"
                >
                  Let's go
                </button>
              </form>
            </div>
            <div className="flex flex-col md:flex-row justify-between">
              <button
                onClick={() => navigate('/register')}
                className="mt-4 bg-fuchsia-800 text-white px-4 py-2 rounded"
              >
                New Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
