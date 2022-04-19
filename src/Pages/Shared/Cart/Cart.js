import React, { createContext } from 'react';
import { Link } from 'react-router-dom';

export const RingContext = createContext([]);

const Cart = ({ addedCourses, totalFees }) => {
    const handleCheckout = () => {

    }

    return (
        <div className='w-100'>
            <h5>Added Courses: {addedCourses.length}</h5>
            <h4>Total Fees: ${totalFees}</h4>
            <Link to='/checkout' state={addedCourses} onClick={handleCheckout} className="btn btn-secondary">Checkout Now</Link>

        </div>
    );
};

export default Cart;