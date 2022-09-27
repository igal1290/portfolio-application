// components
import Card from './Card';
// images
import Crypto from '../images/crypto.png';
import FormValidation from '../images/form-validation.png';

const Projects = () => {
  return (
    <div className="mt-36 mb-8 lg:mx-8">
      <h1
        id="projects"
        className="text-2xl md:text-3xl text-gray-800 text-center lg:text-start"
      >
        My Projects
      </h1>
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-y-8 md:gap-x-8">
        {/* Project 1 */}
        <a
          href="https://cryptocurrency-tracker-5d3ec.web.app/"
          target="_blank"
          rel="noreferrer"
        >
          <Card>
            <img src={Crypto} alt="crypto" className="mb-4 rounded-t-lg" />
            <div className="p-2">
              <h2 className="text-xl text-gray-800 font-medium">
                Cryptocurrency Price Tracker
              </h2>
              <div className="my-4">
                <p className="text-gray-600">
                  Developed the application's front-end with React and fetched
                  the data from CoinGecko's API using Axios.
                </p>
                <p className="text-gray-600 mt-4">
                  Integrated Authentication using Firebase and added a real time
                  database to create a watchlist for each user.
                </p>
              </div>
            </div>
          </Card>
        </a>
        {/* Project 2 */}
        <a
          href="https://form-validation-noden.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <Card>
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
                  Developed the application's front-end using React with Custom
                  Hooks and handled responsiveness with CSS Media Queries.
                </p>
              </div>
            </div>
          </Card>
        </a>
      </div>
    </div>
  );
};

export default Projects;
