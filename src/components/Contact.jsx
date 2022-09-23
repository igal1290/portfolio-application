// react
import { useRef, useState } from 'react';
// components
import Container from './Container';
// emailjs
import emailjs from '@emailjs/browser';

const Contact = () => {
  // state
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [useMessage, setUserMessage] = useState('');

  // ref
  const form = useRef();

  // handle username
  const handleUsername = (event) => {
    setUserName(event.target.value);
  };

  // handle email
  const handleEmail = (event) => {
    setUserEmail(event.target.value);
  };

  // handle message
  const handleMessage = (event) => {
    setUserMessage(event.target.value);
  };

  // send email handler
  const sendEmail = (event) => {
    event.preventDefault();
    if (userName && userEmail && useMessage) {
      emailjs
        .sendForm(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          form.current,
          process.env.REACT_APP_PUBLIC_KEY
        )
        .then(
          (result) => {
            console.log(result.text);
            console.log('message sent');
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      console.log('Input is required to reach out');
    }
    setUserName('');
    setUserEmail('');
    setUserMessage('');
  };

  return (
    <Container>
      <div className="mx-12 mb-7">
        <h1 className="text-4xl text-gray-800 mb-8">Get in touch</h1>
        <form className="flex flex-col" ref={form}>
          <input
            type="text"
            name="user_name"
            placeholder="Name"
            onChange={handleUsername}
            value={userName}
            className="bg-slate-200 p-4 rounded-xl"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Email"
            onChange={handleEmail}
            value={userEmail}
            className="bg-slate-200 my-8 p-4 rounded-xl"
          />
          <textarea
            name="message"
            placeholder="Message"
            onChange={handleMessage}
            value={useMessage}
            className="bg-slate-200 p-4 rounded-xl"
            rows={12}
            cols={50}
          />
          <input
            type="submit"
            value="Send"
            onClick={sendEmail}
            className="bg-blue-500 mt-8 p-4 text-white cursor-pointer hover:bg-blue-700 transition-all duration-100 rounded-xl w-2/6 m-auto"
          />
        </form>
      </div>
    </Container>
  );
};

export default Contact;
