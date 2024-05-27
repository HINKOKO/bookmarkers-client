import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHamburger, FaWindowClose } from 'react-icons/fa';
import MenuOverlay from '../MobileMenu';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const closeMenu = () => {
    setNavOpen(false);
  };

  return (
    <nav className="bg-[url('/public/seahorse.png')] p-10">
      <div className="flex justify-between items-center mx-auto max-w-6xl">
        <Link to="top" smooth={true} spy={true} className="">
          <img src="./vite.svg" alt="Vintagelogo" width={35} height={35} />
          <span className="text-bold">The best vintages mechanics</span>
        </Link>
        <div className="">
          {!navOpen ? (
            <button className="md:hidden" id="menu-btn" type="button">
              <FaHamburger />
            </button>
          ) : (
            <button
              onClick={() => setNavOpen(false)}
              className="flex items-center px-3 py-2"
            ></button>
          )}
        </div>

        <div className="menu hidden md:block md:w-auto">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 gap-2 mr-5 text-xl">
            {navLinks.map((l, idx) => (
              <li key={idx} className="-mb-px mr-1">
                <Link
                  activeClass="active"
                  to={l.path}
                  spy={true}
                  smooth={true}
                  offset={-90}
                  duration={500}
                  className=" hover:text-blue-800 px-4 py-2"
                >
                  {l.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navOpen ? <MenuOverlay links={navLinks} closeMenu={closeMenu} /> : null}
    </nav>
  );
};

export default Navbar;
