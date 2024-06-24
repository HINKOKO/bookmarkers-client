const CardUser = ({ user, onUserClick, isSelected }) => {
  return (
    // apply a style on card if user is selected
    <div
      className={`flex bg-white p-4 m-2 box-content rounded-xl shadow-md cursor-pointer hover:bg-slate-300 ${
        isSelected ? 'border-4 border-black' : ''
      }`}
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
