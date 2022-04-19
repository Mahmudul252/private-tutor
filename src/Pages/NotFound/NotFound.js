import React from 'react';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='page-not-found text-center mt-5'>
            <h1>OOPS!</h1>
            <img src="https://i.ibb.co/1KH8Zpj/404.jpg" alt="" />
            <h2>The page you are finding is not found..</h2>
        </div>
    );
};

export default NotFound;