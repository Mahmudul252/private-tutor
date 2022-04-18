import React from 'react';

const Review = ({ review }) => {
    const { name, img, studentReview } = review;
    return (
        <div className='border rounded-3 border-secondary w-100 w-lg-50 p-2'>
            <img className='w-100 rounded' src={img} alt="" />
            <h3 className='mt-2'>{name}</h3>
            <p>{studentReview}</p>
        </div>
    );
};

export default Review;