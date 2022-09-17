// react-router-dom
import { Link } from 'react-router-dom';
// css
import '../App.css';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center w-full bg-white shadow-lg p-4">
      <Link to="/" className="flex items-center ml-6">
        <div className="bg-blue-500 p-1.5 rounded-full w-12 text-center">
          <h1 className="text-4xl text-white">ih</h1>
        </div>
        <div className="ml-4">
          <h2 className="text-xl text-gray-700">
            <span className="text-sky-500">Igal</span> Haimovitz
          </h2>
        </div>
      </Link>
      <div className="flex items-center mr-6">
        <Link
          to="/projects"
          className="text-gray-700 hover:text-sky-500 ease-in-out duration-75"
        >
          Projects
        </Link>
        <Link
          to="/resume"
          className="mx-24 text-gray-700 hover:text-sky-500 ease-in-out duration-75"
        >
          Resume
        </Link>
        <Link
          to="/contact"
          className="text-gray-700 hover:text-sky-500 ease-in-out duration-75"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
