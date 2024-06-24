import { useState, useEffect } from 'react';
import { useAuth } from '../../store/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import axios from 'axios';

const backend = 'http://localhost:8080';

const sanitizeInput = textInput => {
  const tmp = document.createElement('div');
  tmp.textContent = textInput;
  return tmp.innerHTML;
};

const containsEspaced = text => {
  const escapedPattern = /(&lt;|&gt;|&amp;|&quot;|&#39;)/;
  return escapedPattern.test(text);
};

const SubmitBookmark = () => {
  const initialCategory = '';
  const initialProject = '';
  const initialType = '';
  const initialDesc = '';
  const initialUrl = '';

  const [categories, setCategories] = useState([
    { id: 1, category: 'system-linux' },
    { id: 2, category: 'system-algorithms' },
    { id: 3, category: 'blockchain' },
    { id: 4, category: 'malloc' },
    { id: 5, category: 'simple-shell' },
  ]);
  const [projects, setProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedProject, setSelectedProject] = useState(initialProject);
  const [type, setType] = useState(initialType);
  const [desc, setDesc] = useState(initialDesc);
  const [url, setUrl] = useState(initialUrl);
  // user authenticated ?
  const { user } = useAuth();

  const urlPattern = new RegExp(
    '^(http(s)?://)' + // Début de la chaîne avec http:// ou https://
      '[-a-zA-Z0-9@:%._+~#=]{2,256}' + // Nom de domaine (entre 2 et 256 caractères)
      '\\.[a-z]{2,6}' + // Extension de domaine (2 à 6 caractères alphabétiques)
      '([-a-zA-Z0-9@:%_+.~#?&//=]*)$' // Chemin de l'URL avec caractères spécifiques autorisés
  );

  const isValidUrl = url => urlPattern.test(url);

  const handleUrlChange = e => {
    setUrl(e.target.value);
  };
  const handleDescChange = e => setDesc(e.target.value);

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
      setProjects(projectsData);
    } catch (error) {
      console.log('error fetching projects:', error);
    }
  };

  const handleCategoryChange = e => {
    setSelectedCategory(e.target.value);
  };
  const handleProjectChange = e => setSelectedProject(e.target.value);
  const handleTypeChange = e => {
    setType(e.target.value);
  };

  const handleNewBookmark = async e => {
    e.preventDefault();
    try {
      if (!isValidUrl(url)) {
        alert('invalid url you mallory actor');
      }

      const sanitizedDescription = sanitizeInput(desc);
      if (containsEspaced(sanitizedDescription)) {
        alert('Description contains invalid characters');
        return;
      }

      const bookmarkData = {
        url: url,
        description: sanitizedDescription,
        user_id: 87,
        project_id: parseInt(selectedProject, 10),
        type: type,
      };
      console.log(
        'bookmark data sent -> ' + JSON.stringify(bookmarkData, null, 2)
      );
      // console.log(bookmarkData);
      const response = await axios.post(
        `${backend}/contributors/insert-bookmark`,
        bookmarkData,
        {
          withCredentials: true,
        }
      );
      console.log('Bookmark proposal submitted:', response.data);
      toast.success('Submit accepted !');
      // Reset form fields to initial state
      setSelectedCategory(initialCategory);
      setSelectedProject(initialProject);
      setType(initialType);
      setDesc(initialDesc);
      setUrl(initialUrl);

      // Optionally, you can show a success message or redirect the user
    } catch (error) {
      console.error('Error submitting bookmark proposal:', error);
      toast.error(
        'error submitting your proposal - are all the fields valid ?'
      );
    }
  };

  if (!user) {
    return <div>Dashboard Loading...</div>;
  }

  return (
    <div className="container flex w-11/12 mx-auto bg-fuchsia-700 rounded-xl">
      <div className="flex flex-col container my-6 mx-10 shadow-blue-500/50 shadow-2xl">
        <h3 className="p-4 text-center text-2xl text-slate-200 font-semibold font-kanit">
          New gold resource to share ?
        </h3>

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
                value={selectedProject}
                onChange={handleProjectChange}
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
                value={url}
                onChange={handleUrlChange}
                required
              />
              <label htmlFor="description">Short description please</label>
              <div>
                <textarea
                  type="text"
                  className="border text-sm rounded-lg block w-full p-2.5"
                  maxLength={2048}
                  placeholder="Type some text to give brief info"
                  value={desc}
                  onChange={handleDescChange}
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
      <ToastContainer autoClose={1000} />
    </div>
  );
};

export default SubmitBookmark;
