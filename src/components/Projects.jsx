// components
import Card from './Card';
// images
import Crypto from '../images/crypto.png';
import FormValidation from '../images/form-validation.png';

const Projects = () => {
  return (
    <div className="mt-36 ml-12" id="projects">
      <h1 className="text-4xl text-gray-800">My Projects</h1>
      <div className="mt-8 grid grid-cols-3 gap-x-8">
        {/* Project 1 */}
        <a href="https://cryptocurrency-tracker-5d3ec.web.app/">
          <Card>
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
                  Integrated Authentication using Firebase and added a real time
                  database to create a watchlist for each user.
                </p>
              </div>
            </div>
          </Card>
        </a>
        {/* Project 2 */}
        <a href="https://form-validation-noden.netlify.app/">
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
