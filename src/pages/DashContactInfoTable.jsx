import React from 'react';


const DashContactInfoTable = ({  id, SmallDesc , PhoneNb, Email, InLink, FbLink, InstagramLink }) => {
   
  
  return (
    <tr>
        <td> {SmallDesc} </td>
        <td> {PhoneNb} </td>
        <td> {Email} </td>
        <td> {InLink} </td>
        <td> {FbLink} </td>
        <td> {InstagramLink} </td>
        
    </tr>
  );
};

export default DashContactInfoTable ;
