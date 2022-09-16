// react-router-dom
import { Link } from 'react-router-dom';
// images
import Logo from '../images/logo.png';
// css
import '../App.css';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center w-full bg-white shadow-lg p-4">
      <Link to="/" className="flex items-center ml-6">
        <img src={Logo} alt="logo image" className="w-10 rounded-full" />
        <div className="ml-4">
          <h2 className="text-xl">Igal Haimovitz</h2>
        </div>
      </Link>
      <div className="flex items-center mr-6">
        <Link
          to="/projects"
          className="text-black hover:text-sky-500 ease-in-out duration-75"
        >
          Projects
        </Link>
        <Link
          to="/resume"
          className="mx-24 text-black hover:text-sky-500 ease-in-out duration-75"
        >
          Resume
        </Link>
        <Link
          to="/contact"
          className="text-black hover:text-sky-500 ease-in-out duration-75"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
