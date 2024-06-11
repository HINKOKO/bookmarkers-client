import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CardResource from './CardResource';

const backEnd = `http://localhost:8080`;

const GenericResources = () => {
  const [resources, setResources] = useState([]);
  const { category, project } = useParams();

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
        console.log(projectData);
        setResources(projectData);
      } catch (error) {
        console.log('Error fetchin projects: ', error);
      }
    };
    fetchProjects();
  }, [category, project]);

  return (
    <div className="flex-1 justify-between items-center bg-white rounded-r-xl">
      <div className="py-11">
        <h2 className="text-center capitalize text-5xl font-kanit font-bold border-s-2">
          {category.replace('-', ' ')}
        </h2>
      </div>
      <div className="grid grid-cols-4 gap-x-4 gap-y-10 w-full p-4">
        {resources.map(p => (
          <CardResource
            title={p.title}
            description={p.description}
            url={p.url}
          />
        ))}
      </div>
    </div>
  );
};

export default GenericResources;
