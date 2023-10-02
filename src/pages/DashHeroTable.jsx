import React from 'react';


const DashHeroTable = ({ id, SmallDesc ,HeroImage}) => {
    
   

  return (
    <tr>
        <td> {SmallDesc } </td>
        <td> <img className="DashHeroImage" src={`data:image/png;base64,${HeroImage}`} alt='HeroImage' /></td>
       
    </tr>
  );
};

export default DashHeroTable ;