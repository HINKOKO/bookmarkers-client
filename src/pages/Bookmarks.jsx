import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const url = `http://localhost:8080`;
const pathProjects = [
  {
    category: 'system-linux',
    subpath: '/bookmarks/system-linux',
  },
  {
    category: 'system-algorithms',
    subpath: '/bookmarks/system-algorithms',
  },
  {
    category: 'blockchain',
    subpath: '/bookmarks/blockchain',
  },
  {
    category: 'malloc',
    subpath: '/bookmarks/malloc',
  },
  {
    category: 'simple-shell',
    subpath: '/bookmarks/simple-shell',
  },
];

const Bookmarks = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [category, setCategory] = useState('');

  useEffect(() => {
    const matchingPath = pathProjects.find(
      p => location.pathname === p.subpath
    );
    if (matchingPath) {
      setCategory(matchingPath.category);
    }
    // console.log(location.pathname);
  }, [location.pathname]); // each time URL changes

  return (
    <>
      <div className="flex bg-teal-500">
        <div className="flex container m-8 shadow-blue-500/50 shadow-2xl">
          <div className="bg-slate-200 min-h-screen flex flex-col w-76 justify-between rounded-l-xl border-r border-solid border-black border-l border-solid border-purple">
            {/* sidebar header */}
            <div className="p-2 mt-10">
              <h2 className="text-2xl text-center uppercase font-bold font-kanit flex-shrink-0">
                The Finest Bookmarks
              </h2>
              <p className="flex flex-shrink-0 font-thin text-center text-xl mt-8 whitespace-normal mx-4">
                <em>Pick the category you are in trouble with</em>
              </p>
            </div>
            <div className="flex flex-col space-y-6 pb-[90px] items-center">
              {pathProjects.map((l, idx) => (
                <Link
                  key={idx}
                  to={l.subpath}
                  onClick={() => setCategory(l.category)}
                  className={`text-slate-200 uppercase text-lg font-robot text-center bg-fuchsia-700 rounded-md p-4 w-2/3 hover:scale-110 ${
                    category === l.category
                      ? 'bg-fuchsia-500 border-4 border-solid border-black'
                      : ''
                  }`}
                >
                  {l.category}
                </Link>
              ))}
              <hr></hr>
              {/* <button
                className="text-slate-200 uppercase text-lg font-robot rounded-md bg-black px-6 py-4 text-white w-2/3"
                onClick={() => navigate('/')}
              >
                Go Home
              </button> */}
            </div>
          </div>
          <div className="flex-1 justify-center items-center bg-white rounded-r-xl border-r border-solid border-black">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Bookmarks;
