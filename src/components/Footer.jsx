import React from 'react';
import '../css/Footer.css'
import WhoIsRaoulFooter from './WhoIsRaoulFooter';
import ContactInfo from './ContactInfo';
import SocialShare from './SocialShare';
import ContactMe from './ContactMe';

const Footer = () => {
  return (
    <div className="MainFooter" id="MainFooter">
      <div className="FooterTitles">
        <b className="TheEnd">The End</b>
        <b className="SubTitleFooter">Hope You Enjoyed Your Tour</b>
      </div>
      <div className="BodyOfTheFooter">

        <div className="FooterLeftPart">
          <WhoIsRaoulFooter/>
          <ContactInfo/>
          <SocialShare/>

        </div>

        <ContactMe/>

        
      </div>
      <div className="copyright">© 2023 by Group 5</div>
    </div>
  );
};

export default Footer;
