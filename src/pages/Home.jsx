import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useAuth } from '../store/AuthContext';
import LoginButton from '../components/Login/LoginButton';
import DownArrow from '../components/DownArrow';
import LoginModal from '../components/Login/LoginModal';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import BannerGreet from '../components/Login/BannerGreet';

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
  const location = useLocation();
  const [openLoginModal, setOpenLoginModal] = useState(false);

  useEffect(() => {
    // Check if the redirect query parameter is present in the URL
    const queryParams = new URLSearchParams(location.search);
    const redirectToLogin = queryParams.get('redirect') === 'login';

    // If the query parameter indicates a redirect to the login modal, open the modal
    if (redirectToLogin) {
      setOpenLoginModal(true);
    }
  }, [location.search]);
  const { isAuthenticated } = useAuth();
  return (
    <>
      <section
        id="home"
        className="container mx-auto min-h-screen px-6 py-12 bg-[url('/seahorse-mobile-scale.png')] md:bg-[url('/seahorse.png')] bg-no-repeat bg-cover"
      >
        <nav className="flex flex-row items-center justify-start space-x-6 font-bold text-white md:ml-[68px]">
          <div className="hidden h-10 md:flex md:space-x-8 justify-center items-center">
            {navLinks.map((key, idx) => (
              <>
                <div
                  className="group hover:scale-105 uppercase text-violet-100"
                  id={key.title}
                >
                  <Link to={key.path} id={key.title}>
                    {key.title}
                  </Link>
                  <div
                    className="absolute bottom-0 left-0 w-full group-hover:h-px group-hover:border-5"
                    id={key.title}
                  ></div>
                </div>
                {(idx === 0 || idx === 1) && (
                  <div className="border-b border-2"></div>
                )}
              </>
            ))}
          </div>
          {isAuthenticated ? <BannerGreet /> : <LoginButton />}
        </nav>
        <div className="max-w-lg mt-32 p-4 font-sans text-4xl text-white uppercase text-center border-4 md:p-10 md:mb-12 md:mx-0 md:text-6xl md:ml-28">
          Welcome to The Finest Bookmarks Place
        </div>
        <LoginModal open={openLoginModal} />
        <div className="mt-[120px] flex justify-center">
          <DownArrow />
        </div>
      </section>
      <section className="container max-width px-6 py-12 bg-slate-100">
        <HeroSection />
      </section>
      <Footer />
    </>
  );
};

export default Home;
