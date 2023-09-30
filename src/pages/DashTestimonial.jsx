import React, { useEffect, useState } from 'react';
import DashTestimonialsTable from './DashTestimonialsTable';

const Testimonial = () => {

  const [data, setData] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const fetchDashTestimonialsData = () => {
    fetch('http://localhost:8000/Testimonials/getAll')
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
        setData(data.data);
      })
      .catch((error) => console.log(error));
  };

  const handleDelete = async (id) => {
    
    const response = await fetch(`http://localhost:8000/Testimonials/delete/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      console.error(`Failed to delete row with ID: ${id}`);
      return;
    }

    
    setData((prevData) => prevData.filter((about) => about._id !== id));
    setErrorMessage('Testimonial deleted successfully.');
    setTimeout(() => {
      setErrorMessage('');
    }, 10000);
  };

  useEffect(() => {
    fetchDashTestimonialsData();
  }, []);

  
  const handleApproveChange = async (id, newApproveValue) => {
    console.log('ID:', id); 
    console.log('New Approve Value:', newApproveValue); 
  
  
    const response = await fetch(`http://localhost:8000/Testimonials/update/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ approve: newApproveValue }),
      credentials: 'include',
    });
  
    if (!response.ok) {
      console.error(`Failed to update approve status for row with ID: ${id}`);
      return;
    }
  
    setData((prevData) =>
      prevData.map((testimonial) =>
        testimonial._id === id ? { ...testimonial, approve: newApproveValue } : testimonial
      )
    );
  
    setErrorMessage('Testimonial approve status updated successfully.');
    setTimeout(() => {
      setErrorMessage('');
    }, 10000);
  };


  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Testimonial</h1>
      {errorMessage && <p>{errorMessage}</p>}

      <table className='DashProjectTable'>
          <tr>
            <th> Name</th>
            <th>Email</th>
            <th>Review</th>
            <th>User Image</th>
            <th>Show</th>
          </tr>

      {data.map((testimonial) => (
          <DashTestimonialsTable 
          key={testimonial._id} 
            id={testimonial._id}  
            Name={testimonial.Name}
            Email={testimonial.Email}
            Review={testimonial.Review}
            approve={testimonial.approve}
            UserImage={testimonial.UserImage}
            onApproveChange={handleApproveChange}
            onDelete={handleDelete}
          />
        ))}
        </table>
    </div>
  );
}

export default Testimonial