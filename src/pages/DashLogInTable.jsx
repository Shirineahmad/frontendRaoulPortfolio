import React from 'react';
import "../css/DashLogIn.css"


const DashLogInTable = ({ id, onDelete, UserName ,Password}) => {
 
  const handleDeleteClick = () => {
    onDelete(id); };
  return (
    <tr>
        <td> {UserName} </td>
        <td> {Password} </td>
        <td>
        <button onClick={handleDeleteClick} className='DashContainDelete'>Delete</button>
         </td>
    </tr>
  );
};

export default DashLogInTable ;
