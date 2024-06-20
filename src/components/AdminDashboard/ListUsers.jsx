import { useEffect, useState } from 'react';
import CardUser from './CardUser';

const env = import.meta.env;

const ListUsers = ({ onUserClick }) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const listUsers = async () => {
      try {
        const resp = await fetch(`${env.VITE_BACKEND_URL}/admin/list-users`, {
          method: 'GET',
          credentials: 'include',
        });
        if (resp.ok) {
          const data = await resp.json();
          console.log(data);
          setUsers(data);
        }
      } catch (error) {
        console.error('error fetching users', error);
      }
    };
    listUsers();
  }, []);

  return (
    <div className="relative">
      <h2 className="text-center font-bold text-white text-3xl font-kanit mb-10">
        All Users
      </h2>
      <div className="space-y-8">
        {users.map(u => (
          <CardUser key={u.id} user={u} onUserClick={onUserClick} />
        ))}
      </div>
    </div>
  );
};

export default ListUsers;
