import React from 'react';


const DashContactTable = ({ id, onDelete, UserName, Email, Message }) => {
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <tr>
      <td> {UserName} </td>
      <td> {Email} </td>
      <td> {Message} </td>
      <td>
        <button className='ContactMe-readed' onClick={handleDelete}> Readed </button>
      </td>
    </tr>
  );
};

export default DashContactTable;