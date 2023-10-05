import React, { useState } from 'react';
import '../css/Footer.css'

const ContactMe = () => {
  const [username, setUsername] = useState('');
  const [Email, setEmail] = useState('');
  const [Message, setMessage] = useState('');
  const [showThankYouMessage, setShowThankYouMessage] = useState(false);
  const [emailFormatError, setEmailFormatError] = useState(false);

  const handleContact = async(e) => {
    e.preventDefault();
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(Email)) {
      setEmailFormatError(true);
    
      return;
    }
  const ContactDetails = {UserName:username, Email, Message };
  console.log(ContactDetails);

  const response = await fetch(`${process.env.REACT_APP_API_URL}/ContactMe/add`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },

    body: JSON.stringify(ContactDetails),
  });
  if (response.ok) {
    setShowThankYouMessage(true);
    setUsername('');
    setEmail('');
    setMessage('');
    setEmailFormatError(false);


    setTimeout(() => {
      setShowThankYouMessage(false);
    }, 5000);
  }
  console.log(response);
  const data = await response.json();
  console.log(data);
};

  return (
    <div className="FooterRightPart">
    <div className="ContactMeTitle">Don't Hesitate, Contact Me!</div>

    <form onSubmit={handleContact}>
      <div className="ContactForm">
        <div className="FormItem">
          <label className="Footer-lbl" htmlFor="username">User Name</label>
          <input
            type="text"
            value={username}
            id="Footer-username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="FormItem">
          <label className="Footer-lbl" htmlFor="email">E-mail</label>
          <input
            type="text"
            value={Email}
            id="footer-email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {emailFormatError && (
            <div className="ErrorMessage">Please check your email format.</div>
          )}

        <div className="FormItem">
          <label className="Footer-lbl" htmlFor="message">Message</label>
          <textarea
            id="Footer-message"
            value={Message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>

        {showThankYouMessage && (
          <div className="ThankYouMessage">Thank you for contacting us!</div>
        )}

        <input type="submit" value="Submit" className="SubmitForm" />
      </div>
    </form>
  </div>
  );
};

export default ContactMe;