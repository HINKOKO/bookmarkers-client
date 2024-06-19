import avatar1 from '/avatar_1.png';
import avatar2 from '/avatar_2.png';
import avatar3 from '/avatar_3.png';

const cardData = [
  {
    name: 'Johnny System',
    img: avatar1,
    content:
      'This article will master your understanding of inner working of getline function',
  },
  {
    name: 'Laura Malloca',
    img: avatar2,
    content: 'Blogpost that Reveals at last all the secrets of getline in C',
  },
  {
    name: 'Fred Assembly',
    img: avatar3,
    content: 'I/O in C is not that hard with this perfect playlist',
  },
];

const CardDemoBookmark = () => {
  return (
    <>
      {cardData.map((key, idx) => (
        <div className="flex flex-col bg-white rounded-xl shadow-xl w-64">
          <div className="flex items-center space-x-2 pl-2 pt-2">
            <span>
              {' '}
              <img
                src={key.img}
                className="rounded-lg"
                width={56}
                height={56}
              />
            </span>
            <h4 className="text-semibold italic font-kanit">by {key.name}</h4>
          </div>
          <p className="p-2 font-extralight">{key.content}</p>
        </div>
      ))}
    </>
  );
};

export default CardDemoBookmark;
