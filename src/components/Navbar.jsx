// react-scroll
import { Link, animateScroll as Scroll } from 'react-scroll';
// css
import '../App.css';

const Navbar = () => {
  // scroll top handler
  const scrollTop = () => {
    Scroll.scrollToTop();
  };

  return (
    <nav className="flex justify-between items-center w-full h-16 bg-white shadow-lg p-4 sticky top-0 z-50">
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
          to="projects"
          smooth={true}
          duration={1000}
          className="text-gray-700 hover:text-blue-500 ease-in-out duration-75 cursor-pointer"
        >
          Projects
        </Link>
        <Link
          to="resume"
          smooth={true}
          duration={1500}
          className="mx-24 text-gray-700 hover:text-blue-500 ease-in-out duration-75 cursor-pointer"
        >
          Resume
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={1000}
          className="text-gray-700 hover:text-blue-500 ease-in-out duration-75 cursor-pointer"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
