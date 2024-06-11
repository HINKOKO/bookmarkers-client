const CardContributor = ({ contributor }) => {
  return (
    <div className="flex flex-col bg-gray-200 p-4 rounded-lg">
      <div className="flex space-y-2" id="metadata">
        <h2 className="text-lg font-semibold">{contributor.username}</h2>
        <img
          src={contributor.avatar_url}
          width={92}
          height={92}
          className="rounded-lg"
        />
      </div>
      <p className="text-gray-600">{contributor.email}</p>
    </div>
  );
};

export default CardContributor;
