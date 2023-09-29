import React from 'react';


const DashLogInTable = ({ id, onDelete, UserName ,Password}) => {
 
  const handleDeleteClick = () => {
    onDelete(id); };
  return (
    <tr>
        <td> {UserName} </td>
        <td> {Password} </td>
        <td>
        <button onClick={handleDeleteClick}>Delete</button>
         </td>
    </tr>
  );
};

export default DashLogInTable ;
