import React, { useState } from 'react';

const DashTestimonialsTable = ({ id, onDelete, Name, Email, Review, UserImage, approve, onApproveChange }) => {
  const [isChecked, setIsChecked] = useState(approve);

  const handleCheckboxChange = () => {
    const newApproveValue = !isChecked; 
    setIsChecked(newApproveValue); 
    console.log(id);
    onApproveChange(id, newApproveValue); 
  };

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <tr>
      <td>{Name}</td>
      <td>{Email}</td>
      <td>{Review}</td>
      
      <td>
        <img className="DashUserImage" src={`data:image/png;base64,${UserImage}`} alt="UserImage" />
      </td>
      <td>
      <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
      </td>
      <td>
        <button onClick={handleDelete}>Delete</button>
      </td>
      
    </tr>
  );
};

export default DashTestimonialsTable;
