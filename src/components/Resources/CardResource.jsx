const CardResource = ({ title, description, url }) => {
  return (
    <div className="container bg-slate-200 p-6 rounded-md shadow-md">
      <h2 className="text-md font-semibold font-kanit">{title}</h2>
      <p className="font-lg text-gray-600">{description}</p>
      <a
        href={url}
        className="font-bold hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {url}
      </a>
    </div>
  );
};

export default CardResource;
