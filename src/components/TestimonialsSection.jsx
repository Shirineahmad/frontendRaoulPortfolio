import React, { useState } from 'react';
import ReviewModal from './Modal';

function Testimonials() {
    const testimonialsData = [
      
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
        <div>
            <h2 className="testimonials">Testimonials</h2>
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
                Leave a Review
            </button>
            <ReviewModal />
        </div>
    );
}

export default Testimonials;