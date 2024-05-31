import { useState } from 'react';
import LoginButton from './Login/LoginButton';

const CardProject = ({ title, projectId, onClick }) => {
  const [urls, setUrls] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/projects/${projectId}/resources`);
      if (!response.ok) {
        throw new Error('Failed to fetch Resources for this project');
      }
      const data = await response.json();
      setUrls(data.urls);
    } catch (error) {
      console.log(`Error fetching resources: `, error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div
      className="mt-10 px-10 py-6 bg-orange-400 rounded-lg"
      onClick={onClick ? handleClick : null}
    >
      <h1 className="font-lg font-kanit">{title}</h1>
      <LoginButton />
      {loading && <p>Loading resources...</p>}
      {!loading && urls.length > 0 && (
        <ul>
          {urls.map((url, idx) => (
            <li key={idx}>
              <a href={url} target="_blank" rel="noopener noreferrer">
                {url}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CardProject;
