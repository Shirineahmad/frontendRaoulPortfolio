import React, { useState } from 'react';
import ReviewModal from './ReviewModal';

function Modal() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleSubmitReview = (reviewData) => {
        console.log('Review submitted:', reviewData);
        closeModal();
    };


    function ReviewModal({ isOpen, onClose, onSubmit }) {
        const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const [image, setImage] = useState('');
        const [review, setReview] = useState('');

        const handleSubmit = (e) => {
            e.preventDefault();
            onSubmit({ name, email, image, review });
        };

        return (
            isOpen && (
                <div className="overlay" id="overlay">
                    <div className="popup">
                        <span className="close" id="closeBtn" onClick={onClose}>
                            &times;
                        </span>
                        <h2 className="leave-review">Leave a Review</h2>
                        <form id="reviewForm" className="testimonial-form" onSubmit={handleSubmit}>
                            <label htmlFor="name">User Name:</label>
                            <input
                                type="text"
                                id="name"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <br /><br />
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <br /><br />
                            <label htmlFor="image">Image URL:</label>
                            <input
                                type="text"
                                id="image"
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                            />
                            <br /><br />
                            <label htmlFor="review">Your Review:</label>
                            <textarea
                                id="review"
                                rows="4"
                                required
                                value={review}
                                onChange={(e) => setReview(e.target.value)}
                            />
                            <br /><br />
                            <button type="submit" className="submit-button">
                                Submit
                            </button>
                        </form>
                    </div>
                    <div>
                        <button id="openBtn" className="testimonial-button" onClick={openModal}>
                            Leave a Review
                        </button>
                        {/* Render the ReviewModal component */}
                        <ReviewModal
                            isOpen={isModalOpen}
                            onClose={closeModal}
                            onSubmit={handleSubmitReview}
                        />
                    </div>
                </div>
            )
        );
    }
}
export default ReviewModal;