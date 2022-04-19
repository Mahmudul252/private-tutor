import React from 'react';
import kabirPhoto from '../../images/kabir.png';

const About = () => {
    return (
        <div className='w-75 mx-auto mt-5'>
            <img className='rounded-3 d-block mx-auto mb-3 img-fluid' src={kabirPhoto} alt="" />
            <h2>I am Md Mahmudul Kabir</h2>
            <p className="fs-5">I want to be a professional web developer. I love developing websites and love to write codes. Now I am learning web development with the great Jhankar Mahbub, my tutor. My course is almost done.</p>
            <p className="fs-5">After completing the course, I will start developing my skills professionally by doing some serious projects. I hope this will help me knowing what I've learnt. Then I will apply various company to get a job as a professional web developer or as an intern  </p>
        </div>
    );
};

export default About;