import React from 'react';
import '../css/Footer.css'

const ContactInfo = () => {
  return (
    <div className="ContactInfo">
    <div className="phoneNumberContainer">
      <img className="PhoneIcon" src="Images/phone.svg" />
      <div className="PhoneNb">81422765</div>
    </div>
    <div className="EmailContainer">
      <img className="EmailIcon" src="Images/Email.svg" />
      <div className="FooterEmail">raoulbaddawi1@gmail.com</div>
    </div>
  </div>
  );
};

export default ContactInfo;
