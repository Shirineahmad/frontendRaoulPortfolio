import React, { useState } from 'react';
import ReviewModal from './Modal';

function Testimonials() {
    const testimonialsData = [
        {
            imageSrc: '/Images/TestimonialsImages/Testimonial 1.jpg',
            name: 'John Doe',
            email: 'john@example.com',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elitkljljlkjlkjlkjlkjlkjlkjlkjlkjlkj.',
        },
        {
            imageSrc: '/Images/TestimonialsImages/Testimonial 1.jpg',
            name: 'Jane Smith',
            email: 'jane@example.com',
            description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
       
    ];

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
                                src={testimonialsData[currentIndex].imageSrc}
                                alt=""
                            />
                        </div>
                        <div className="testimonial-author">
                            <p>{testimonialsData[currentIndex].name}</p>
                            <p>{testimonialsData[currentIndex].email}</p>
                        </div>
                    </div>
                    <div>
                        <p className="testimonial-description">
                            {testimonialsData[currentIndex].description}
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