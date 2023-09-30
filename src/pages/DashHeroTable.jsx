import React from 'react';


const DashHeroTable = ({ id, onDelete, SmallDesc ,HeroImage}) => {
    
    const handleDeleteClick = () => {
        onDelete(id); };

  return (
    <tr>
        <td> {SmallDesc } </td>
        <td> <img className="DashHeroImage" src={`data:image/png;base64,${HeroImage}`} alt='HeroImage' /></td>
        <td>
        <button onClick={handleDeleteClick}>Delete</button>
         </td>
    </tr>
  );
};

export default DashHeroTable ;
