import React from 'react';
import '../css/Footer.css'

const WhoIsRaoulFooter = ({RaoulDesc}) => {
  return (
    <div className="FooterAbout">
    <div className="FooterAboutTitle">Who is Raoul ?</div>
    <div className="FooterAboutDesc">
       {RaoulDesc}
    </div>
  </div>
  );
};

export default WhoIsRaoulFooter;
