import React from 'react';


const DashContactInfoTable = ({  id, onDelete, SmallDesc , PhoneNb, Email, InLink, FbLink, InstagramLink }) => {
   
  const handleDeleteClick = () => {
    onDelete(id); };
  return (
    <tr>
        <td> {SmallDesc} </td>
        <td> {PhoneNb} </td>
        <td> {Email} </td>
        <td> {InLink} </td>
        <td> {FbLink} </td>
        <td> {InstagramLink} </td>
        <td>
        <button onClick={handleDeleteClick} >Delete</button>
         </td>
    </tr>
  );
};

export default DashContactInfoTable ;
