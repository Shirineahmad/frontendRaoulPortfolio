import React from 'react';


const DashLogInTable = ({ id, UserName ,Password}) => {
 
 
  return (
    <tr>
        <td> {UserName} </td>
        <td> {Password} </td>
        
    </tr>
  );
};

export default DashLogInTable ;
