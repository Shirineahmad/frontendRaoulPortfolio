import React, { useState } from 'react';
import '../../src/css/Testimonials.css';
import Popup from './Popup';

function TestimonialPopup() {
    const [buttonPopup, setButtonPopup] = useState(false);

    return (
        <div>
            <h2 className="testimonials">Testimonials</h2>
            <div id="testimonials" className="testimonial-container">
                <button id="left-btn">
                    <i className="arrow left-arrow"></i>
                </button>
                <div className="testimonial-slide">
                    <div className="Testimonial-content">
                        <div>
                            <img className="testimonial-image" src="" alt="" />
                        </div>
                        <div className="testimonial-author">
                            <p> Alex </p>
                            <p> alex@gmail.com</p>
                        </div>
                    </div>
                    <div>
                        <p className="testimonial-description">
                            "Raoul's versatility as a developer is unmatched. He effortlessly bridges the gap between design and
                            functionality, bringing our creative visions to life with precision and efficiency."
                        </p>
                    </div>
                </div>
                <button id="right-btn">
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
                    <h2 className="leave-review">Leave a Review</h2>
                    <form id="reviewForm" className="testimonial-form">
                        <label className='title-form'>User Name:</label>
                        <br />
                        <input className='input-form' type="text" id="name" required />
                        <br />
                        <label className='title-form'>Email:</label>
                        <br />
                        <input className='input-form' type="email" id="email" required />
                        <br />
                        <label className='title-form'>Upload Image:</label>
                        <br />
                        <input className='input-form-image' type="file" id="image" />
                        <br />
                        <label className='title-form' >Your Opinion:</label>
                        <br />
                        <textarea className='input-form-review' id="review" required></textarea>
                        <br />
                        <button type="submit" className="send-button">
                            Send
                        </button>
                    </form>
                </div>
            </Popup>
        </div>
    );
}

export default TestimonialPopup;