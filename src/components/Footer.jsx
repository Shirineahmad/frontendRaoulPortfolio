import React from 'react';
import { useEffect, useState } from 'react';
import '../css/Footer.css'
import WhoIsRaoulFooter from './WhoIsRaoulFooter';
import ContactInfo from './ContactInfo';
import SocialShare from './SocialShare';
import ContactMe from './ContactMe';

const Footer = () => {
  const [DescData, setDescData] = useState([]);

  const fetchDataForWhoSection = () => {
    fetch('http://localhost:8000/ContactInfoAndDesc/getAll')
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data)
        setDescData(data.data)})
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchDataForWhoSection();
  }, []);
  return (
    <div className="MainFooter" id="MainFooter">
      <div className="FooterTitles">
        <b className="TheEnd">The End</b>
        <b className="SubTitleFooter">Hope You Enjoyed Your Tour</b>
      </div>
      <div className="BodyOfTheFooter">

        <div className="FooterLeftPart">
          <WhoIsRaoulFooter
          key = {DescData[0]?._id}
          RaoulDesc={DescData[0]?.SmallDesc}
          />
          <ContactInfo
          key = {DescData[0]?._id}
          PhoneNumb = {DescData[0]?.PhoneNb }
          Email = {DescData[0]?.Email }
       
          />
          <SocialShare
          key = {DescData[0]?._id}
          FbLink={DescData[0]?.FbLink}
          InLink={DescData[0]?.InLink}
          InsLink={DescData[0]?.InstagramLink}
          />

        </div>

        <ContactMe/>

        
      </div>
      <div className="copyright">© 2023 by Group 5</div>
    </div>
  );
};

export default Footer;
