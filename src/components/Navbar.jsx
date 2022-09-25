// react
import { useState } from 'react';
// react-scroll
import { Link, animateScroll as Scroll } from 'react-scroll';
// css
import '../App.css';

const Navbar = () => {
  // state
  const [onScroll, setOnScroll] = useState(false);

  // on scroll handler
  const onScrollHandler = () => {
    if (window.scrollY >= 90) {
      setOnScroll(true);
    } else {
      setOnScroll(false);
    }
  };

  // scroll eventlistener
  window.addEventListener('scroll', onScrollHandler);

  // scroll top handler
  const scrollTop = () => {
    Scroll.scrollToTop();
  };

  // scroll to handler
  const scrollToProjects = () => {
    Scroll.scrollTo(760);
  };

  const scrollToResume = () => {
    Scroll.scrollTo(1487);
  };

  const scrollToContact = () => {
    Scroll.scrollTo(2297);
  };

  return (
    <nav
      className={
        onScroll
          ? 'flex flex-col md:flex-row justify-between items-center h-full w-full bg-white shadow-lg p-4 sticky top-0 z-50 opacity-95'
          : 'flex flex-col md:flex-row justify-between items-center h-full w-full bg-white shadow-lg p-4 sticky top-0 z-50'
      }
    >
      <div
        className="flex items-center mb-4 md:mb-0 -mt-1 md:-mt-0 md:ml-4 cursor-pointer"
        onClick={scrollTop}
      >
        <div className="bg-blue-500 p-1 rounded-full w-10 text-center">
          <h1 className="text-2xl text-white">ih</h1>
        </div>
        <div className="ml-2">
          <h2 className="hidden md:flex text-xl text-gray-700">
            <span className="text-blue-500 mr-1">Igal</span> Haimovitz
          </h2>
        </div>
      </div>
      <div className="flex items-center md:mr-4">
        <Link
          to="/#"
          onClick={scrollToProjects}
          className="text-gray-700 hover:text-blue-500 ease-in-out duration-75 cursor-pointer"
        >
          Projects
        </Link>
        <Link
          to="/#"
          onClick={scrollToResume}
          className="mx-24 text-gray-700 hover:text-blue-500 ease-in-out duration-75 cursor-pointer"
        >
          Resume
        </Link>
        <Link
          to="/#"
          onClick={scrollToContact}
          className="text-gray-700 hover:text-blue-500 ease-in-out duration-75 cursor-pointer"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
