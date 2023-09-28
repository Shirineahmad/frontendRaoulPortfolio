import React, { useState } from 'react';

function Testimonials() {
    const testimonialsData = [
        {
            name: 'Alex',
            email: 'alex@gmail.com',
            imageSrc: './Images/Testimonials Images/Testimonial 1.jpg',
            description:
                "Raoul's versatility as a developer is unmatched. He effortlessly bridges the gap between design and functionality, bringing our creative visions to life with precision and efficiency.",
        },
        {
            name: 'Linda',
            email: 'linda@gmail.com',
            imageSrc: './Images/Testimonials Images/Testimonial 2.jpg',
            description:
                "Raoul's collaborative spirit and clear communication skills make him a true asset to any project. Highly recommend!",
        },
        {
            name: 'Wael',
            email: 'wael@gmail.com',
            imageSrc: './Images/Testimonials Images/Testimonial 3.jpg',
            description:
                "Raoul's dedication to staying updated with the latest industry trends ensures that our projects are always cutting-edge. His passion for continuous learning and improvement is truly inspiring.",
        },
        {
            name: 'Myriam',
            email: 'myriam@gmail.com',
            imageSrc: './Images/Testimonials Images/Testimonial 4.jpg',
            description:
                "Having Raoul on our team is like having a secret weapon. His ability to troubleshoot and find elegant solutions to complex problems is unparalleled, ensuring our projects run smoothly and efficiently.",
        },
        {
            name: 'Lea',
            email: 'lea@gmail.com',
            imageSrc: './Images/Testimonials Images/Testimonial 5.jpg',
            description:
                "Working alongside Raoul is a pleasure. He's not only a technical genius but also a team player who fosters a collaborative and positive work environment, making him a valuable addition to any project.",
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
        </div>
    );
}

export default Testimonials;