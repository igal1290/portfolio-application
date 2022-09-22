// react
import { useRef } from 'react';
// components
import Container from './Container';
// emailjs
import emailjs from '@emailjs/browser';

const Contact = () => {
  // ref
  const form = useRef();

  // send email handler
  const sendEmail = (e) => {
    e.preventDefault();

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
  };

  return (
    <Container>
      <div className="mx-12">
        <h1 className="text-4xl text-gray-800 mb-8">Get in touch</h1>
        <form className="flex flex-col" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            placeholder="Name"
            className="bg-slate-200 p-4 rounded-xl"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Email"
            className="bg-slate-200 my-8 p-4 rounded-xl"
          />
          <textarea
            name="message"
            placeholder="Message"
            className="bg-slate-200 p-4 rounded-xl"
            rows={12}
            cols={50}
          />
          <input
            type="submit"
            value="Send"
            className="bg-blue-500 mt-8 p-4 text-white cursor-pointer hover:bg-blue-700 transition-all duration-100 rounded-xl"
          />
        </form>
      </div>
    </Container>
  );
};

export default Contact;
