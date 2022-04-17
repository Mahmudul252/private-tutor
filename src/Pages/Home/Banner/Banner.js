import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';
import banner1 from '../../../images/banner1.jpg';
import banner2 from '../../../images/banner2.jpg';
import banner3 from '../../../images/banner3.jpg';

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block banner-img"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption className='text-dark'>
                        <h3>Smiley Student</h3>
                        <p>My student smiling at me</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block banner-img"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption className='text-dark'>
                        <h3>Busy Student</h3>
                        <p>Sometimes my student becomes so busy in doing math</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block banner-img"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption className='text-dark'>
                        <h3>Studious Student</h3>
                        <p>This student learns with joy</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;