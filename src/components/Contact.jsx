// react
import { useRef, useState } from 'react';
// components
import Container from './Container';
// emailjs
import emailjs from '@emailjs/browser';
// images
import { ReactComponent as EmailLogo } from '../images/email.svg';

const Contact = () => {
  // state
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [useMessage, setUserMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

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
      setErrorMessage(false);
      setIsSubmitted(true);
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
      setIsSubmitted(false);
      setErrorMessage(true);
    }
    setUserName('');
    setUserEmail('');
    setUserMessage('');
  };

  return (
    <Container>
      <div className="mx-12">
        <h1 className="text-4xl text-gray-800 mb-8">Get in touch</h1>
        <div className="flex justify-between items-center">
          <form className="flex flex-col w-3/6" ref={form}>
            <input
              type="text"
              name="user_name"
              placeholder="Name"
              onChange={handleUsername}
              value={userName}
              className="bg-slate-200 p-3 rounded-xl"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              onChange={handleEmail}
              value={userEmail}
              className="bg-slate-200 my-8 p-3 rounded-xl"
            />
            <textarea
              name="message"
              placeholder="Message"
              onChange={handleMessage}
              value={useMessage}
              className="bg-slate-200 p-3 rounded-xl"
              rows={12}
              cols={50}
            />
            <input
              type="submit"
              value="Send"
              onClick={sendEmail}
              className="bg-blue-500 mt-16 p-3 text-white cursor-pointer hover:bg-blue-700 transition-all duration-100 rounded-xl w-2/6 m-auto"
            />
          </form>

          <EmailLogo width={440} height={440} className="email-logo mb-24" />
        </div>
        {isSubmitted && (
          <p className="text-center mt-12 text-green-600">Message received!</p>
        )}
        {errorMessage && (
          <p className="text-center mt-12 text-red-600">
            Please fill out the form
          </p>
        )}
      </div>
    </Container>
  );
};

export default Contact;
