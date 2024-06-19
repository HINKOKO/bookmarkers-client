import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useAuth } from '../../store/AuthContext';
import CardResource from './CardResource';

const backEnd = `http://localhost:8080`;

const GenericResources = () => {
  const [resources, setResources] = useState([]);
  const { category, project } = useParams();
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          `${backEnd}/bookmarks/${category}/${project}`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch projects from selected category');
        }
        const projectData = await response.json();
        setResources(projectData);
      } catch (error) {
        console.log('Error fetchin projects: ', error);
        setResources([]);
      }
    };
    fetchProjects();
  }, [category, project]);

  return (
    <div className="flex-1 justify-between items-center bg-white rounded-r-xl">
      <div className="py-11 space-y-6">
        <h2 className="text-center capitalize text-5xl font-kanit font-bold border-s-2">
          {category.replace('-', ' ')}
        </h2>
        <h3 className="text-center font-lg font-kanit text-2xl">
          <span className="font-bold font-kanit">{project}</span> project
          resources
        </h3>
      </div>

      {resources && resources.length > 0 ? (
        <div className="grid grid-cols-4 gap-x-4 gap-y-10 w-full p-4">
          {resources.map(p => (
            <CardResource
              title={`Proposed by ${user.username}`}
              description={p.description}
              url={p.url}
            />
          ))}
        </div>
      ) : (
        <p className="text-center font-bold text-2xl">
          No resources yet ! be the first to contribute!
        </p>
      )}

      {isAuthenticated ? (
        <div className="flex justify-center items-end">
          <button
            className="text-white font-md font-kanit px-8 py-6 bg-amber-700 rounded-lg drop-shadow-2xl"
            onClick={() => navigate('/dashboard?tab=submit')}
          >
            Contribute
          </button>
        </div>
      ) : (
        <div className="flex items-end">
          <button className="text-white font-md font-kanit px-8 py-6 bg-slate-800 shadow-xl">
            Create an account to contribute
          </button>
        </div>
      )}
    </div>
  );
};

export default GenericResources;
