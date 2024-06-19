const CardResource = ({ title, description, url }) => {
  return (
    <div className="flex flex-col p-8 box-content bg-slate-200 rounded-md shadow-md">
      <h2 className="text-md font-semibold font-kanit">{title}</h2>
      <p className="font-lg font-kanit italic text-gray-600">{description}</p>
      <a
        href={url}
        className="font-bold hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit
      </a>
    </div>
  );
};

export default CardResource;
