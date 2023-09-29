import React from 'react';
import '../css/Footer.css'

const ContactInfo = ({PhoneNumb , Email}) => {
  return (
    <div className="ContactInfo">
    <div className="phoneNumberContainer">
      <img className="PhoneIcon" src="Images/phone.svg" />
      <div className="PhoneNb">{PhoneNumb}</div>
    </div>
    <div className="EmailContainer">
      <img className="EmailIcon" src="Images/Email.svg" />
      <div className="FooterEmail">{Email}</div>
    </div>
  </div>
  );
};

export default ContactInfo;
