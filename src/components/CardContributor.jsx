import { getAvatarUrl } from '../store/avatar_utils';

const CardContributor = ({ contributor }) => {
  const avatarUrl = getAvatarUrl(contributor?.avatar_url);
  return (
    <div className="flex flex-col bg-gray-200 p-4 rounded-lg mx-auto w-1/2">
      <div className="flex space-y-2" id="metadata">
        <h2 className="text-lg font-semibold">{contributor.username}</h2>
        <img src={avatarUrl} width={92} height={92} className="rounded-lg" />
      </div>
      <p className="text-gray-600">{contributor.email}</p>
    </div>
  );
};

export default CardContributor;
