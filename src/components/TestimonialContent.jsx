import React from 'react';

function TestimonialContent({ iconSrc, skillName }) {
  return (
    <div className="testimonial-slide">
      <div className="Testimonial-content">
        <div>
          <img className="testimonial-image" src="./Testimonials Images/Testimonial 1.jpg" alt=""> </img>
        </div>
        <div className="testimonial-author">
          <p> Alex </p>
          <p> alex@gmail.com</p>
        </div>
      </div>
      <div>
        <p className="testimonial-description">
          "Raoul's versatility as a developer is unmatched. He effortlessly bridges the gap between design and
          functionality, bringing our creative visions to life with precision and efficiency." </p>
      </div>
    </div>
  );
}

export default TestimonialContent;