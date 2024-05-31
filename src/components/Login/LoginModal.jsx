// components/LoginModal.jsx
import { useModal } from '../../store/ModalContext';

const LoginModal = () => {
  const { isModalOpen, closeModal } = useModal();

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <div className="flex flex-col items-center">
          <img src="/public/watching-you.png" alt="Watching You" />
        </div>
        <div className="flex flex-col mt-4">
          <label htmlFor="email">Email or Username</label>
          <input type="text" id="email" required className="border p-2 mt-2" />
          <label htmlFor="password" className="mt-4">
            Password
          </label>
          <input
            type="password"
            id="password"
            required
            className="border p-2 mt-2"
          />
        </div>
        <button
          onClick={closeModal}
          className="mt-4 bg-red-500 text-white p-2 rounded"
        >
          Abort
        </button>
        <button
          onClick={closeModal}
          className="mt-4 bg-red-500 text-white p-2 rounded"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginModal;
