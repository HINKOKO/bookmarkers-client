import { useEffect, useState } from 'react';
import { FaHome } from 'react-icons/fa';
import CardContributor from '../components/CardContributor';
import { useNavigate } from 'react-router-dom';

const Contributors = () => {
  const [contributors, setContributors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const bookmarkers = async () => {
      try {
        const response = await fetch(`http://localhost:8080/contributors`, {
          method: 'GET',
        });
        if (response.ok) {
          const bookmarkersData = await response.json();
          console.log(bookmarkersData);
          setContributors(bookmarkersData);
        }
      } catch (error) {
        console.log('error fetching the contributors', error);
      }
    };
    bookmarkers();
  }, []);

  return (
    <div className="relative flex flex-col container mx-auto min-h-screen w-full bg-gradient-to-br from-teal-400 via-teal-500 to-teal-600">
      <header className="relative flex items-center justify-center h-20">
        <h2 className="text-center text-3xl font-bold font-kanit uppercase italic">
          Thanks to all the contributors for this wonderful library
        </h2>
        <button
          className="absolute top-2 right-10 mt-4 mr-4"
          onClick={() => navigate('/')}
        >
          <FaHome className="text-3xl" />
        </button>
      </header>

      <div className="flex grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-10 w-full p-4 mt-20">
        {contributors.map(c => (
          <div className="flex justify-center">
            <CardContributor key={c.id} contributor={c} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contributors;
