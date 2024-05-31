// components/LoginModal.jsx
import { useState } from 'react';
import { useModal } from '../../store/ModalContext';
import './login.css';

const LoginModal = () => {
  const { isModalOpen, closeModal } = useModal();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!isModalOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ">
        <div className="bg-yellow-600 p-8 rounded shadow-md rounded-xl w-96">
          <div className="flex flex-col items-center">
            <img
              src="/public/watching-you.png"
              alt="Watching You"
              className="rounded-md"
            />
          </div>
          <div className="flex flex-col mt-4">
            <label htmlFor="email"></label>
            <input
              type="text"
              id="email"
              required
              className="border p-2 mt-2"
              placeholder="Username"
            />
            <label htmlFor="password" className="mt-4"></label>
            <input
              type="password"
              id="password"
              required
              className="border p-2 mt-2"
              placeholder="Password"
            />
          </div>
          <div className="flex md:flex-row justify-between">
            <button
              onClick={closeModal}
              className="mt-4 bg-fuchsia-800 text-white px-4 py-2 rounded"
            >
              Abort
            </button>
            <button
              onClick={closeModal}
              className="mt-4 bg-teal-500 text-white px-4 py-2 rounded"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
