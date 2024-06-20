import { useState, useEffect } from 'react';

const env = import.meta.env;

const ListBookmarks = ({ user }) => {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const fetchBookmarks = async () => {
      try {
        const resp = await fetch(
          `${env.VITE_BACKEND_URL}/admin/list-users/${user.id}/bookmarks`,
          {
            method: 'GET',
            credentials: 'include',
          }
        );
        if (resp.ok) {
          const data = await resp.json();
          console.log(data);
          setBookmarks(data);
        }
      } catch (error) {
        console.error('Error fetching bookmarks', error);
      }
    };

    fetchBookmarks();
  }, [user.id]); // Run this effect each time userID changes - means when clicking on another user card

  return (
    <div className="mt-4">
      <h2 className="text-xl font-bold mb-10 text-center">
        Bookmarks of {user.username}
      </h2>
      <div className="flex flex-col w-4/5 justify-center mx-auto space-y-10">
        {bookmarks && bookmarks.length > 0 ? (
          bookmarks.map(bookmark => (
            <div className="flex justify-between items-center p-10 bg-fuchsia-600 rounded-md shadow-2xl">
              <div
                key={bookmark.id}
                className="flex flex-col space-y-2 text-slate-200 font-kanit"
              >
                <p className="text-lg font-semibold">
                  project :{' '}
                  <span className="font-normal">{bookmark.project_name}</span>
                </p>
                <p className="text-sm">Type: {bookmark.type}</p>
                <p className="text-base">{bookmark.description}</p>
                <button className="bg-amber-500 hover:bg-cyan-700 text-slate-200 px-4 py-2 rounded-lg">
                  <a href={bookmark.url} target="_blank">
                    Visit Resource
                  </a>
                </button>
              </div>
              <button className="bg-black px-6 py-4 m-2 text-slate-200 font-semibold rounded-lg cursor-pointer hover:bg-red-700 hover:scale-110">
                Delete
              </button>
            </div>
          ))
        ) : (
          <div className="text-center font-bold">
            No bookmarks for this user yet
          </div>
        )}
      </div>
    </div>
  );
};

export default ListBookmarks;
