import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CardProject from './CardProject';

const url = `http://localhost:8080`;

const GenericProject = () => {
  const { category } = useParams();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      console.log(`${url}/bookmarks/${category}`);
      try {
        const response = await fetch(`${url}/bookmarks/${category}`);
        if (!response.ok) {
          throw new Error('failed to fetch projects from selected category');
        }
        const projectsData = await response.json();
        setProjects(projectsData);
      } catch (error) {
        console.log('error fetching projects:', error);
      }
    };
    fetchProjects();
  }, [category]); // dependency array - when category changes -> fetch

  return (
    <div className="flex-1 justify-between items-center bg-white rounded-r-xl">
      <div className="py-11">
        <h2 className="text-center capitalize text-5xl font-kanit font-bold border-s-2">
          {category.replace('-', ' ')}
        </h2>
      </div>
      <div className="grid grid-cols-4 gap-x-4 gap-y-10 w-full p-4">
        {projects.map(p => (
          <div className="flex justify-center">
            <CardProject title={p.name} category={category} key={p.id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GenericProject;
