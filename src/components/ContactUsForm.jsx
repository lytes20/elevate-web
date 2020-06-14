import React, { useState } from 'react';

import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';

import '../assets/styles/contactusform.scss';

import Loader from './Loader';

export default function ContactUsForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = evt => {
    evt.preventDefault();
    console.log('Form submission', evt.target);
    const templateParams = { message_html: message, from_name: name, reply_to: email };
    setLoading(true);

    emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, templateParams, process.env.REACT_APP_USER_ID).then(
      result => {
        console.log('Result', result.text);
        setLoading(false);
        toast.success('🚀 Your message has been sent successfully to the Elevate Team', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        });
      },
      error => {
        console.log('Error', error);
        setLoading(false);
        toast.error('🦄 Sorry! We could not send the message, please try again later!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        });
      }
    );
  };

  return (
    <div className="wrap-contact100">
      {loading && (
        <center>
          <Loader />
        </center>
      )}
      <ToastContainer />
      <form className="contact100-form validate-form" onSubmit={handleSubmit}>
        <span className="contact100-form-title">Contact Us</span>

        <div className="wrap-input100 rs1-wrap-input100 validate-input" data-validate="Name is required">
          <span className="label-input100">Your Name</span>
          <input
            className="input100"
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <span className="focus-input100"></span>
        </div>

        <div className="wrap-input100 rs1-wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
          <span className="label-input100">Email</span>
          <input
            className="input100"
            type="email"
            name="email"
            required
            value={email}
            placeholder="Enter your email addess"
            onChange={e => setEmail(e.target.value)}
          />
          <span className="focus-input100"></span>
        </div>

        <div className="wrap-input100 validate-input" data-validate="Message is required">
          <span className="label-input100">Message</span>
          <textarea
            className="input100"
            name="message"
            placeholder="Your message here..."
            value={message}
            onChange={e => setMessage(e.target.value)}
          ></textarea>
          <span className="focus-input100"></span>
        </div>

        <div className="container-contact100-form-btn">
          <button className="contact100-form-btn">
            <span>
              Submit
              <i className="fa fa-long-arrow-right m-l-7" aria-hidden="true"></i>
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}
