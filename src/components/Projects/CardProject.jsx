import { FaHome } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const CardProject = ({ title, category }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/bookmarks/${category}/${title}/resources`);
  };

  return (
    <div
      className="mt-10 px-10 py-6 bg-orange-400 rounded-lg cursor-pointer hover:shadow-md"
      onClick={handleCardClick}
    >
      <h1 className="text-lg font-kanit">{title}</h1>
      <button
        id="home"
        className="absolute top-20 right-20"
        onClick={e => {
          e.stopPropagation();
          navigate('/');
        }}
      >
        <FaHome className="text-3xl" />
      </button>
    </div>
  );
};

export default CardProject;
