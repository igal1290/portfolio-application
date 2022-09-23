// components
import Container from './Container';
// react-icons
import { MdEmail } from 'react-icons/md';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

const Resume = () => {
  return (
    <Container>
      <div className="flex items-center justify-around border-b-2 pb-4">
        <div className="flex items-center">
          <MdEmail className="text-3xl text-slate-500" />
          <p className="pl-2">igalhaimovitz@gmail.com</p>
        </div>
        <a
          href="https://www.linkedin.com/in/igalhaimovitz/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin className="text-3xl text-blue-600" />
        </a>
        <a href="https://github.com/igal1290" target="_blank" rel="noreferrer">
          <BsGithub className="text-3xl text-slate-700" />
        </a>
      </div>
      <div className="ml-12 mb-8">
        <div className="mt-16">
          <h2 className="text-2xl text-slate-500 font-medium uppercase">
            Education
          </h2>
          <div className="mt-2">
            <p className="font-semibold">Brooklyn College CUNY</p>
            <p>Bachelor of Science in Computer Science</p>
            <p>01/2020 - 12/2022</p>
            <p>Major GPA: 3.56/4.0</p>
          </div>
          <div className="mt-6">
            <p className="font-semibold">Brooklyn College CUNY</p>
            <p>Bachelor of Science in Psychology</p>
            <p>2016 - 2019</p>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-2xl text-slate-500 uppercase font-medium">
            Skills
          </h2>
          <div className="mt-2">
            <p className="font-semibold">Technical Skills</p>
            <div className="flex">
              <p>Front-End:</p>
              <p className="ml-2">
                JavaScript (ES6), React, HTML5, CSS3, TailwindCSS
              </p>
            </div>
            <div className="flex">
              <p>Back-End:</p>
              <p className="ml-2">Java, Firebase</p>
            </div>
            <div className="flex">
              <p>Tools:</p>
              <p className="ml-2">Git, NPM</p>
            </div>
          </div>
          <div className="mt-4">
            <p className="font-semibold">Soft Skills</p>
            <p>Time Management</p>
            <p>Team Work</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Resume;
