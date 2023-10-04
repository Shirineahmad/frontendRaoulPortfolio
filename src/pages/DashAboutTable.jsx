import React from 'react';
import "../css/DashAbout.css";

const DashAboutTable = ({ id, onDelete, AboutTitle ,AboutDesc}) => {
    const handleDelete = () => {
        onDelete(id);
      };
  
  return (
    <tr>
      <td> {AboutTitle} </td>
      <td> {AboutDesc} </td>
      <td>
        <button onClick={handleDelete} className="DashAboutoDelete">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default DashAboutTable ;
