import { createContext, useState, useContext } from 'react';

// Create a new context
const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    console.log('modal should open');
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  console.log('modalprovider render, isModalOpen ? ', isModalOpen);

  return (
    <ModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
