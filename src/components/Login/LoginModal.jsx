const LoginModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="container h-8/12 w-8/12">
      <div className="flex flex col container">
        <img src="/public/watching-you.png" />
      </div>
      <div className="flex flex-col">
        <label htmlFor="email">Email or Username</label>
        <input type="text" value={''} required />
        <label htmlFor="password">Password</label>
        <input type="text" required />
      </div>
    </div>
  );
};

export default LoginModal;
