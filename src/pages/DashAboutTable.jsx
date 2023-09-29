import React from 'react';


const DashAboutTable = ({ id, onDelete, AboutTitle ,AboutDesc}) => {
    const handleDelete = () => {
        onDelete(id);
      };
  
  return (
    <tr>
        <td> {AboutTitle} </td>
        <td> {AboutDesc} </td>
        <td>
        <button onClick={handleDelete}>Delete</button>
         </td>
    </tr>
  );
};

export default DashAboutTable ;
