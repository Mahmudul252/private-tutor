import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className='text-center text-secondary'>
            @ copyright {year}
        </div>
    );
};

export default Footer;