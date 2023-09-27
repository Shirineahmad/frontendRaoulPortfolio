import React from 'react';
import '../css/Footer.css'

const ContactMe = () => {
  return (
    <div className="FooterRightPart">
    <div className="ContactMeTitle">Don't Hesitate, Contact Me!</div>

    <form>
      <div className="ContactForm">
        <div className="FormItem">
          <label className="Footer-lbl" for="username">User Name</label>
          <input type="text" id="Footer-username" />
        </div>

        <div className="FormItem">
          <label className="Footer-lbl" for="email">E-mail</label>
          <input type="text" id="footer-email" />
        </div>

        <div className="FormItem">
          <label className="Footer-lbl" for="message">Message</label>
          <textarea id="Footer-message"></textarea>
        </div>

        <input type="submit" value="Submit" className="SubmitForm" />
      </div>
    </form>
  </div>
  );
};

export default ContactMe ;