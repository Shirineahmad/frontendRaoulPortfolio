import { useEffect, useState } from 'react';
import ReviewModal from './Modal';

function Testimonials() {
    const [testimonialsData, setTestimonialsData] = useState([]);

    const fetchDataForTestimonialSection = () => {
        fetch('http://localhost:8000/Testimonials/getAll')
          .then((response) => response.json())
          .then((data) => {
            console.log(data.data)
            setTestimonialsData(data.data)})
          .catch((error) => console.log(error));
      };
    
      useEffect(() => {
        fetchDataForTestimonialSection();
      }, []);

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
                    <div>
                        <p className="testimonial-description">
                            {testimonialsData[currentIndex]?.Review}
                        </p>
                    </div>
                </div>
                <button id="right-btn" onClick={handleNextSlide}>
                    <i className="arrow right-arrow"></i>
                </button>
            </div>

            <button id="openBtn" className="testimonial-button">
                Leave a Review !!
            </button>
            <div className="TestimonialTitles">
             
            <b className="TestimonialFooter">You also can contact me and visit my social media</b></div>
            <ReviewModal />
            </div>
        </div>
    );
}

export default Testimonials;