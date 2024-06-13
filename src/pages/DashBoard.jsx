import { useState, useEffect } from 'react';
import { useAuth } from '../store/AuthContext';
import axios from 'axios';

const backend = 'http://localhost:8080';

const DashBoard = () => {
  const [categories, setCategories] = useState([
    { id: 1, category: 'system-linux' },
    { id: 2, category: 'system-algorithms' },
    { id: 3, category: 'blockchain' },
    { id: 4, category: 'malloc' },
    { id: 5, category: 'simple-shell' },
  ]);
  const [projects, setProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedProject, setSelectedProject] = useState([]);
  const [type, setType] = useState('');
  const [desc, setDesc] = useState('');
  const [url, setUrl] = useState('');
  const { user } = useAuth();

  useEffect(() => {
    if (selectedCategory) {
      fetchProjects();
    }
  }, [selectedCategory]);

  const fetchProjects = async () => {
    try {
      const response = await fetch(`${backend}/bookmarks/${selectedCategory}`);
      if (!response.ok) {
        throw new Error('failed to fetch projects from selected category');
      }
      const projectsData = await response.json();
      console.log(projectsData);
      // setSelectedProject(projectsData);
      setProjects(projectsData);
    } catch (error) {
      console.log('error fetching projects:', error);
    }
  };

  // const fetchProjects = async () => {
  //   try {
  //     const resp = await axios.get(`${url}/projects`);
  //   } catch (error) {
  //     console.error('error fetching projects related to category', error);
  //   }
  // };

  const handleCategoryChange = e => {
    const categoryId = e.target.value;
    setSelectedCategory(categoryId);
    // Optionally, fetch projects based on the selected category ID
    // fetchProjectsByCategory(categoryId);
  };

  const handleTypeChange = e => {
    setType(e.target.value);
  };

  const handleNewBookmark = async e => {
    e.preventDefault();
    try {
      console.log('selected project has an id of' + selectedProject);
      const bookmarkData = {
        url: url,
        description: desc,
        user_id: user.id,
        project_id: parseInt(selectedProject, 10),
        type: type,
      };
      console.log(bookmarkData);
      const response = await axios.post(
        `${backend}/contributors/insert-bookmark`,
        bookmarkData
      );
      console.log('Bookmark proposal submitted:', response.data);
      // Optionally, you can show a success message or redirect the user
    } catch (error) {
      console.error('Error submitting bookmark proposal:', error);
    }
  };

  if (!user) {
    return <div>Dashboard Loading...</div>;
  }

  return (
    <div className="flex bg-teal-500">
      <div className="flex flex-col container m-8 shadow-blue-500/50 shadow-2xl">
        <h1 className="mt-8 text-center text-5xl font-kanit">
          Welcome to you, {user.username}
        </h1>
        <h3 className="mt-8 text-center text-2xl font-lg font-kanit">
          Share a new gold bookmark?
        </h3>
        <div className="user-info">
          <img src={user.avatar_url} alt="User Avatar" width={32} height={32} />
          <p>Email: {user.email}</p>
          {/* Additional user information */}
        </div>
        <div className="flex flex-col m-2 p-4 bg-slate-200 rounded-xl">
          <form
            className="mx-auto w-4/5 mt-4 space-y-8"
            onSubmit={handleNewBookmark}
          >
            <div>
              <label
                htmlFor="category"
                className="block mb-2 text-sm font-medium font-kanit"
              >
                Category:
              </label>
              <select
                id="category"
                className="border text-sm rounded-lg block w-full p-2.5"
                value={selectedCategory}
                onChange={handleCategoryChange}
                required
              >
                <option value="">Select a category</option>
                {categories.map(category => (
                  <option key={category.id} value={category.category}>
                    {category.category}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="project_id">Project:</label>
              <select
                id="project"
                className="border text-sm rounded-lg block w-full p-2.5"
                value={selectedProject.id}
                onChange={e => setSelectedProject(e.target.value)}
                required
              >
                <option value="">Select a project</option>
                {projects.map(project => (
                  <option key={project.id} value={project.id}>
                    {project.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="type">Type:</label>
              <select
                id="type"
                className="border text-sm rounded-lg block w-full p-2.5"
                value={type}
                onChange={handleTypeChange}
                required
              >
                <option value="">Select a type</option>
                <option value="tutorial">Tutorial</option>
                <option value="blog">Blog</option>
                <option value="video">Video</option>
                {/* Add more types as needed */}
              </select>
            </div>
            <div>
              <label htmlFor="url">Link to bookmark</label>
              <input
                type="text"
                className="border text-sm rounded-lg block w-full p-2.5"
                maxLength={2048}
                placeholder="link to resource"
                onChange={e => setUrl(e.target.value)}
                required
              />
              <label htmlFor="description">Short description please</label>
              <div>
                <textarea
                  type="text"
                  className="border text-sm rounded-lg block w-full p-2.5"
                  maxLength={2048}
                  placeholder="Type some text to give brief info"
                  onChange={e => setDesc(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="flex justify-center items-center">
              <button
                type="submit"
                className="mt-6 px-4 py-4 border w-2/3 rounded-xl bg-amber-700 text-lg font-medium font-kanit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;

// const [loading, setLoading] = useState(true);
// const [userInfo, setUserInfo] = useState(null);
// const [accessToken, setAccessToken] = useState('');

// useEffect(() => {
//   const fetchUserInfo = async () => {
//     try {
//       const token = localStorage.getItem('accessToken');
//       console.log('Dashboard:: we get token => ' + token);
//       if (token) setAccessToken(token);
//       const response = await fetch('http://localhost:8080/user-info', {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       if (response.ok) {
//         const userInfo = await response.json();
//         setUserInfo(userInfo);
//       }
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setLoading(false);
//     }
//   };
//   fetchUserInfo();
// }, [accessToken]);
