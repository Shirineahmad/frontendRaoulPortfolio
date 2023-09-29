import React, { useState } from 'react';
import '../css/Footer.css'

const ContactMe = () => {
  const [username, setUsername] = useState('');
  const [Email, setEmail] = useState('');
  const [Message, setMessage] = useState('');

  const handleContact = async () => {
  const ContactDetails = {UserName:username, Email, Message };
  console.log(ContactDetails);

  const response = await fetch('http://localhost:8000/ContactMe/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },

    body: JSON.stringify(ContactDetails),
  });
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
          <input type="text" id="Footer-username" 
                    onChange={(e) => setUsername(e.target.value)}/>
        </div>

        <div className="FormItem">
          <label className="Footer-lbl" htmlFor="email">E-mail</label>
          <input type="text" id="footer-email"
                      onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="FormItem">
          <label className="Footer-lbl" htmlFor="message">Message</label>
          <textarea id="Footer-message"
              onChange={(e) => setMessage(e.target.value)}></textarea>
        </div>

        <input type="submit" value="Submit" className="SubmitForm" />
      </div>
    </form>
  </div>
  );
};

export default ContactMe;