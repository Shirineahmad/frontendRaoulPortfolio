import React from 'react';
import "../css/DashHero.css"

const DashHeroTable = ({ id, onDelete, SmallDesc ,HeroImage}) => {
    
    const handleDeleteClick = () => {
        onDelete(id); };

  return (
    <tr>
      <td> {SmallDesc} </td>
      <td>
        {" "}
        <img
          className="DashHeroImage"
          src={`data:image/png;base64,${HeroImage}`}
          alt="HeroImage"
        />
      </td>
      <td>
        <button onClick={handleDeleteClick} className='DashHeroDelete'>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default DashHeroTable ;
