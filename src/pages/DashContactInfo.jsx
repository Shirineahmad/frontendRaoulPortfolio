import React from "react";
import { useState, useEffect } from "react";
import "../css/DashContactInfo.css";

function ContactInfo() {
  const [contactInfoDesc, SetContactInfoDesc] = useState([]);
  const fetchData = () => {
    fetch("http://localhost:5000/api/get/contactInfoDesc")
      .then((response) => response.json())
      .then((data) => SetContactInfoDesc(data.data))

      .catch((error) => console.log(error));
  };
  console.log(contactInfoDesc);
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="contactInfoDesc">
      <h1>Skills</h1>
      <table>
        <tr>
          <th>Name:</th>
          <th>Phone Number:</th>
          <th>Email:</th>
          <th>Linkedin:</th>
          <th>Facebook:</th>
          <th>instagram:</th>
        </tr>
        
        
       
      </table>
    </div>
  );
}

export default ContactInfo;
