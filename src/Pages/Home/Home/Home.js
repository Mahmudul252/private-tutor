import React from 'react';
import Banner from '../Banner/Banner';
import Courses from '../Courses/Courses';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Courses></Courses>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;