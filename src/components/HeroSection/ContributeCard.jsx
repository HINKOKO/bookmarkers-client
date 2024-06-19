import { useModal } from '../../store/ModalContext';

const ContributeCard = () => {
  const { openModal } = useModal();
  return (
    <div className="mt-8 flex flex-col justify-center items-center mx-auto bg-slate-800 rounded-2xl">
      <h2 className="text-3xl text-white font-kanit font-extrabold p-6">
        Be part of it
      </h2>
      <button
        className="px-4 py-2 mb-6 bg-fuchsia-600 rounded-md shadow-xl border-1 border-slate-100"
        onClick={openModal}
        style={{ cursor: 'pointer' }}
      >
        Get Started
      </button>
    </div>
  );
};

export default ContributeCard;
