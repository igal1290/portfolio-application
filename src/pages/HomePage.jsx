// images
import Avatar from '../images/Avatar.png';
import Crypto from '../images/crypto.png';
import FormValidation from '../images/form-validation.png';

const HomePage = () => {
  return (
    <div className="container mx-auto my-16 bg-white shadow-lg rounded-3xl p-12">
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
            frameworks, libraries, backend features, databases and technologies
            like React, Next.js, Node.js, Express.js with SQL and NoSQL in order
            to build full scalable applications.
          </p>
          <button className="w-36 border-2 p-2 text-gray-700 border-blue-500 hover:bg-blue-500 hover:text-white ease-in-out duration-100 rounded-3xl">
            Projects
          </button>
          <button className="w-36 ml-8 p-2 text-white bg-blue-500 hover:bg-blue-600 ease-in-out duration-75 rounded-3xl">
            Resume
          </button>
        </div>
      </div>
      {/* Section B: Projects */}
      <div className="mt-36 ml-12">
        <h1 className="text-4xl text-gray-800">My Projects</h1>
        <div className="mt-8 grid grid-cols-3 gap-x-8">
          {/* Project 1 */}
          <a href="https://cryptocurrency-tracker-5d3ec.web.app/">
            <div className="bg-gray-50 shadow-xl rounded-lg w-11/12 hover:-translate-y-2 duration-300 transition-all ease-in-out h-full">
              <img src={Crypto} alt="crypto" className="mb-4 rounded-t-lg" />
              <div className="p-2 ml-4">
                <h2 className="text-xl text-gray-800 font-medium">
                  Cryptocurrency Price Tracker
                </h2>
                <div className="my-4">
                  <p className="text-gray-600">
                    Developed the application's front-end with React and fetched
                    the data from CoinGecko's API using Axios.
                  </p>
                  <p className="text-gray-600 mt-4">
                    Integrated Authentication using Firebase and added a real
                    time database to create a watchlist for each user.
                  </p>
                </div>
              </div>
            </div>
          </a>
          {/* Project 2 */}
          <a href="https://form-validation-noden.netlify.app/">
            <div className="bg-gray-50 shadow-xl rounded-lg w-11/12 hover:-translate-y-2 duration-300 transition-all ease-in-out h-full">
              <img
                src={FormValidation}
                alt="form validation"
                className="mb-4 rounded-t-lg"
              />
              <div className="p-2 ml-4">
                <h2 className="text-xl text-gray-800 font-medium">
                  Form Validation
                </h2>
                <div className="my-4">
                  <p className="text-gray-600">
                    Developed the application's front-end using React with
                    Custom Hooks and handled responsiveness with CSS Media
                    Queries.
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
