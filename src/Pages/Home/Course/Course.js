import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({ course }) => {
    const { id, img, subject, courseDetail, fees } = course;

    return (
        <div className='border rounded-3 border-secondary w-100 w-lg-50 p-2'>
            <img className='w-100' src={img} alt="" />
            <h3 className='mt-2'>{subject}</h3>
            <h5>Fees: ${fees}</h5>
            <p>{courseDetail}</p>
            <Link onClick={() => handleBuyCourse(id)} to='/checkout' className="btn btn-secondary ">Buy Course</Link>
        </div>
    );
};

export default Course;