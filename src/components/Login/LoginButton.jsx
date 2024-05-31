import { useState } from 'react';
import { IoMdLogIn } from 'react-icons/io';
import { useModal } from '../../store/ModalContext';

const LoginButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { openModal } = useModal();

  return (
    <div
      className="icon-container flex items-center space-x-4 absolute top-0 right-0 mt-10 pr-10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={openModal}
      style={{ cursor: 'pointer' }}
    >
      <div
        className={`text-lg transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        Login
      </div>
      <IoMdLogIn className="w-12 h-12 hover:scale-110" />
    </div>
  );
};

export default LoginButton;
