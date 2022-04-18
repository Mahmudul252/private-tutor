import React from 'react';
import { useLocation } from 'react-router-dom';

const Checkout = () => {
    const location = useLocation();
    const addedCourses = location.state;
    return (
        <div>
            <h1>CheckOut</h1>
        </div>
    );
};

export default Checkout;