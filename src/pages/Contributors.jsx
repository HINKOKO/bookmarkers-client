import { useEffect } from 'react';

const Contributors = () => {
  const [contributors, setContributors] = useState(null);

  useEffect(() => {
    const bookmarkers = async () => {
      try {
        const response = await fetch(`http://localhost:8080/contributors`, {
          method: 'GET',
        });
        if (response.ok) {
          const bookmarkersData = await response.json();
          setContributors(bookmarkersData);
        }
      } catch (error) {
        console.log('error fetching the contributors', error);
      }
    };
    bookmarkers();
  }, [contributors]);

  return (
    <div className="flex justify-center">
      <div className="flex container jusfity-center">{contributors}</div>
    </div>
  );
};

export default Contributors;
