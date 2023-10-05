import React, { useEffect, useState } from 'react';
import DashTestimonialsTable from './DashTestimonialsTable';
import "../css/DashTestimonial.css";

const Testimonial = () => {

  const [data, setData] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const fetchDashTestimonialsData = () => {
    fetch(`${process.env.REACT_APP_API_URL}/Testimonials/getAll`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
        setData(data.data);
      })
      .catch((error) => console.log(error));
  };

  const handleDelete = async (id) => {

    const response = await fetch(`${process.env.REACT_APP_API_URL}/Testimonials/delete/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      console.error(`Failed to delete row with ID: ${id}`);
      return;
    }


    setData((prevData) => prevData.filter((testimonial) => testimonial._id !== id));
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


    const response = await fetch(`${process.env.REACT_APP_API_URL}/Testimonials/update/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ approve: newApproveValue }),

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
      <h1 className='Testimonials-Dashboard'>Testimonials</h1>
      {errorMessage && <p>{errorMessage}</p>}

      <table className='Testimonial-Table'>
        <tr>
          <th>Name</th>
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