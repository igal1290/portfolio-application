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
    Scroll.scrollTo(580);
  };

  const scrollToResume = () => {
    Scroll.scrollTo(1280);
  };

  const scrollToContact = () => {
    Scroll.scrollTo(2050);
  };

  return (
    <nav
      className={
        onScroll
          ? 'flex justify-between items-center h-16 w-full bg-white shadow-lg p-4 sticky top-0 z-50 opacity-95'
          : 'flex justify-between items-center h-16 w-full bg-white shadow-lg p-4 sticky top-0 z-50'
      }
    >
      <div
        className="flex items-center ml-6 cursor-pointer"
        onClick={scrollTop}
      >
        <div className="bg-blue-500 p-1.5 rounded-full w-12 text-center">
          <h1 className="text-3xl text-white">ih</h1>
        </div>
        <div className="ml-4">
          <h2 className="text-xl text-gray-700">
            <span className="text-blue-500">Igal</span> Haimovitz
          </h2>
        </div>
      </div>
      <div className="flex items-center mr-6">
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
