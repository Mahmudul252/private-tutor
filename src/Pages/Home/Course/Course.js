import React from 'react';

const Course = ({ course, handleBuyCourse: handleAddToCart }) => {
    const { id, img, subject, courseDetail, fees } = course;

    return (
        <div className='border rounded-3 border-secondary w-100 w-lg-50 p-2 me-3'>
            <img className='w-100 rounded' src={img} alt="" />
            <h3 className='mt-2'>{subject}</h3>
            <h5>Fees: ${fees}</h5>
            <p>{courseDetail}</p>
            <button onClick={() => handleAddToCart(id)} className="btn btn-secondary ">Buy Course</button>
        </div>
    );
};

export default Course;