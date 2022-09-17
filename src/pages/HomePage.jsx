// images
import Avatar from '../images/Avatar.png';

const HomePage = () => {
  return (
    <div className="container mx-auto my-16 bg-white shadow-lg rounded-3xl p-12">
      <div className="flex items-center text-center w-11/12">
        <img
          src={Avatar}
          alt="profile picture"
          className="w-2/12 rounded-full ml-12 border-slate-200 border-2"
        />
        <div className="mt-8">
          <p className="text-gray-400 text-lg">Software Engineer</p>
          <h1 className="text-4xl mt-1 text-gray-800">Igal Haimovitz</h1>
          <p className="text-gray-500 my-12 ml-24">
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
      <div></div>
    </div>
  );
};

export default HomePage;
