import { useEffect, useState } from 'react';
import "../css/TestimonialsPop.css";
import Popup from './Popup';


function Testimonials() {
    const [testimonialsData, setTestimonialsData] = useState([]);
    const [buttonPopup, setButtonPopup] = useState(false);
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Review, setReview] = useState('');
    const [image, setUserImage] = useState(null); 
    const [errorMessage, setErrorMessage] = useState('');
    
    const fetchDataForTestimonialSection = () => {
        fetch(`${process.env.REACT_APP_API_URL}/Testimonials/getAll`)
          .then((response) => response.json())
          .then((data) => {
            const approvedTestimonials = data.data.filter(testimonial => testimonial.approve === true);
             setTestimonialsData(approvedTestimonials);
            console.log(data.data)
            })
          .catch((error) => console.log(error));
      };
    
      useEffect(() => {
        fetchDataForTestimonialSection();
      }, []);

      const handleContactInfo = async (e) =>{
        e.preventDefault();

        const emailExists = testimonialsData.some(
            (testimonial) => testimonial.Email === Email
          );
        
          if (emailExists) {
            setErrorMessage('You can only enter one Review.');
            return;
          }

        

    const formData = new FormData();
    formData.append('Name', Name);
    formData.append('Email', Email);
    formData.append('Review', Review);
    formData.append('image', image);
    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/Testimonials/add`, {
          method: 'POST',
          body: formData,
        });
    
        if (!response.ok) {
          console.error('HTTP error! Status:', response.status);
          console.error('Response:', response);
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        const data = await response.json();
        if (data.success) {
          console.log('data added successfully:', data.data);
          setErrorMessage('Thanks For Your Review.');
          setName('');
          setEmail('');
          setReview('');
          setUserImage(null);
          setTimeout(() => {
            setErrorMessage('');
            setButtonPopup(false);
          }, 5000);
        } else {
          console.error('Error adding Testimonial:', data.message);
          setErrorMessage('Error adding testimonial: ' + data.message);
        }
      } catch (error) {
        console.error('An error occurred while adding testimonial:', error);
        setErrorMessage('Only One Review Per Email .');
      }
   
  
        
      }

     

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
        );
    };

    return (
        
        <div className="TestimonialSection" id="TestimonialSection">
           
            <div className="TestimonialContainer">
            <div className="TestimonialTitles">
        <b className="TheTestimonial">Testimonials</b></div>
            <div id="testimonials" className="testimonial-container">
                <button id="left-btn" onClick={handlePrevSlide}>
                    <i className="arrow left-arrow"></i>
                </button>
                <div className="testimonial-slide">
                    <div className="Testimonial-content">
                        <div>
                            <img
                                className="testimonial-image"
                                src={`data:image/png;base64,${testimonialsData[currentIndex]?.UserImage}`}
                                alt=""
                            />
                        </div>
                        <div className="testimonial-author">
                            <p>{testimonialsData[currentIndex]?.Name}</p>
                            <p>{testimonialsData[currentIndex]?.Email}</p>
                        </div>
                    </div>
                  
                        <p className="testimonial-description">
                            {testimonialsData[currentIndex]?.Review}
                        </p>
                  
                </div>
                <button id="right-btn" onClick={handleNextSlide}>
                    <i className="arrow right-arrow"></i>
                </button>
            </div>
            

            <button
                id="openBtn"
                className="testimonial-button"
                onClick={() => setButtonPopup(true)}
            >
                Leave a Review !!
            </button>

            <p className='transition-footer'> You can also contact me and visit my social media</p>

            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <div>
                    <h2 className="leave-review"  >Leave a Review</h2>
                    <form id="reviewForm" className="testimonial-form" onSubmit={handleContactInfo} encType='multipart/form-data'>
                        <div className='title-form'>User Name:</div>
                        <br />
                        <input className='input-form' type="text" id="name" required 
                         placeholder='Enter Your Name'
                         value={Name}
                         onChange={(e) => setName(e.target.value)}
                        />
                        <br />
                        <div className='title-form'>Email:</div>
                        <br />
                        <input className='input-form' type="email" id="email" required 
                        placeholder='Enter Your Email'
                        value={Email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                        <br />
                       
                        <div className='title-form'>Upload Image:</div>
                        <br />
                        <input className='input-form-image' type="file" id="image"
                        accept='image/*'
                        onChange={(e) => {
                          const file = e.target.files[0];
                          if (file) {
                            setUserImage(file); 
                          }
                        }}
                        />
                        <br />
                        <div className='title-form' >Your Opinion:</div>
                        <br />
                        <textarea className='input-form-review' id="review" required
                        placeholder='Enter Your Review'
                        value={Review}
                        onChange={(e) => setReview(e.target.value)}
                        ></textarea>
                        <br />
                        {errorMessage && <p style={{ color: 'white' }}>{errorMessage}</p>}
                        <button type="submit" className="send-button">
                            Send
                        </button>
                    </form>
                </div>
            </Popup>
        </div>
        </div>
    );
}

export default Testimonials;