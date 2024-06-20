const CardUser = ({ user, onUserClick }) => {
  return (
    <div
      className="flex bg-white p-4 m-2 box-content rounded-xl shadow-md cursor-pointer hover:bg-slate-300"
      onClick={() => onUserClick(user)}
    >
      <img
        src={user.avatar_url}
        alt={`${user.username}'s avatar`}
        className="w-10 h-10 rounded-full mr-2"
      />
      <div>
        <h3>{user.username}</h3>
        <p className="text-gray-600">{user.email}</p>
      </div>
    </div>
  );
};

export default CardUser;
