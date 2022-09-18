// components
import Container from '../components/Container';
import Resume from '../components/Resume';
// react-scroll
import { Link } from 'react-scroll';
import Projects from '../components/Projects';
// images
import Avatar from '../images/Avatar.png';

const HomePage = () => {
  return (
    <>
      <Container>
        {/* Section A: Introduction */}
        <div className="flex items-center text-center w-11/12">
          <img
            src={Avatar}
            alt="avatar"
            className="w-2/12 rounded-full ml-12 border-slate-200 border-2"
          />
          <div className="mt-8">
            <p className="text-gray-400 text-lg">Software Engineer</p>
            <h1 className="text-4xl mt-1 text-gray-800">Igal Haimovitz</h1>
            <p className="text-gray-600 my-12 ml-24">
              I have a strong passion for building full-stack applications. I am
              Experienced in front-end development, object-oriented programming,
              testing and debugging using Java and JavaScript. Basic familiarity
              in data structures & algorithms and a great interest in JavaScript
              frameworks, libraries, backend features, databases and
              technologies like React, Next.js, Node.js, Express.js with SQL and
              NoSQL in order to build full scalable applications.
            </p>
            <Link to="projects" smooth={true} duration={1000}>
              <button className="w-36 border-2 p-2 text-gray-700 border-blue-500 hover:bg-blue-500 hover:text-white ease-in-out duration-100 rounded-3xl">
                Projects
              </button>
            </Link>
            <Link to="resume" smooth={true} duration={1500}>
              <button className="w-36 ml-8 p-2 text-white bg-blue-500 hover:bg-blue-600 ease-in-out duration-75 rounded-3xl">
                Resume
              </button>
            </Link>
          </div>
        </div>
        {/* Section B: Projects */}
        <Projects />
      </Container>
      <Container>
        <Resume />
      </Container>
    </>
  );
};

export default HomePage;
