import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import DownArrow from '../components/DownArrow';
import Footer from '../components/Footer';
import { IoMdLogIn } from 'react-icons/io';

const navLinks = [
  {
    title: 'bookmarks',
    path: '/bookmarks',
  },
  {
    title: 'contributors',
    path: '/contributors',
  },
  {
    title: 'about',
    path: '/about',
  },
];

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const redirectLogin = () => {
    navigate('/login');
  };

  return (
    <>
      <section
        id="home"
        className="container max-w-screen mx-auto min-h-screen px-6 py-12 bg-[url('/seahorse.png')] bg-no-repeat bg-cover"
      >
        <nav className="flex flex-row items-center justify-start space-x-6 font-bold text-white md:ml-[68px]">
          <div className="hidden h-10 md:flex md:space-x-8 justify-center items-center">
            {navLinks.map((key, idx) => (
              <>
                <div className="group hover:scale-105 uppercase text-violet-100">
                  <Link to={key.path} key={key.title}>
                    {key.title}
                  </Link>
                  <div className="absolute bottom-0 left-0 w-full group-hover:h-px group-hover:border-5"></div>
                </div>
                {(idx === 0 || idx === 1) && (
                  <div className="border-b border-2"></div>
                )}
              </>
            ))}
          </div>
          <div
            className="icon-container flex items-center space-x-4 absolute top-0 right-0 mt-10 pr-10"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={redirectLogin}
            style={{ cursor: 'pointer' }}
          >
            <div
              className={`text-lg transition-opacity duration-300 ${
                isHovered ? 'opacity-100' : 'opacity-0'
              }`}
            >
              Login
            </div>
            <IoMdLogIn className="w-12 h-12 hover:scale-110" />
          </div>
        </nav>
        <div className="max-w-lg mt-20 mb-32 p-4 font-sans text-4xl text-white uppercase text-center border-4 md:p-10 md:mb-12 md:mx-0 md:text-6xl md:ml-12">
          The Finest Bookmarks
        </div>
        <div className="mt-[120px] flex justify-center">
          <DownArrow />
        </div>
      </section>
      <section className="container max-w-6xl mx-auto px-6 py-12">
        <div className="">
          <h2>I will explain further more</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptatum, ipsum.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
