import { Link } from 'react-scroll';

const MenuOverlay = ({ links, closeMenu }) => {
  const handleClick = () => {
    closeMenu();
  };

  return (
    <ul className="flex flex-col items-center">
      {links.map((l, idx) => (
        <li key={idx} className="mb-3 text-lg font-semibold">
          <Link
            activeClass="active"
            to={l.path}
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
            className="inline-block border-l border-t rounded-t hover:text-blue-800 px-4 py-2"
            onClick={handleClick}
          >
            {l.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
