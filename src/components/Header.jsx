import { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const onToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header className="bg-white py-10">
      <nav className="flex justify-between items-center w-[92%] mx-auto">
        <div>
          <img
            class="w-16"
            src="https://cdn-icons-png.flaticon.com/512/5968/5968204.png"
          />
        </div>
        <div
          className={`nav-links md:static duration-500 absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-${
            menuOpen ? '9%' : '-100%'
          } md:w-auto w-full flex items-center px-5`}
        >
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
            <li>
              <a href="#!" className="hover:text-gray-600 font-semibold">
                Products
              </a>
            </li>
            <li>
              <a href="#!" className="hover:text-gray-600 font-semibold">
                Contact
              </a>
            </li>
            <li>
              <a href="#!" className="hover:text-gray-600 font-semibold">
                Realisations
              </a>
            </li>
            <li>
              <a href="#!" className="hover:text-gray-600 font-semibold">
                Pricing
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-6">
          <button className="rounded-full bg-[#a6c1ee] px-5 py-2 hover:bg-[#87acec]">
            Mail us
          </button>
          <ion-icon
            name={menuOpen ? 'close' : 'menu'}
            onClick={onToggleMenu}
            className="text-3xl cursor-pointer md:hidden"
            size="large"
          ></ion-icon>
        </div>
      </nav>
    </header>
  );
};

export default Header;

{
  /* <button className="bg-[#a6c1ee] px-5 py-2 rounded-full hover:bg-[#87acec]"></button>
       src="https://cdn-icons-png.flaticon.com/512/5968/5968204.png" */
  //    <svg
  //    xmlns="http://www.w3.org/2000/svg"
  //    class="ionicon text-3xl cursor-pointer md:hidden"
  //    viewBox="0 0 512 512"
  //    width={20}
  //    height={20}
  //    onClick={onToggleMenu}
  // <path d="M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z" />
  // md:static absolute md:min-h-fit bg-white min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5
  //  >
}
