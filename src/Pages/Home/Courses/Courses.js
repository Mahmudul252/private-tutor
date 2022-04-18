import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('courses.json')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, []);
    return (
        <div className='container mb-3'>
            <h2 className="mt-5 text-center">See My Running Courses</h2>
            <div className='d-flex flex-column flex-lg-row gap-5 justify-content-center mt-3'>
                {
                    courses.map(course => <Course
                        key={course.id}
                        course={course}
                    ></Course>)
                }
            </div>
        </div>
    );
};

export default Courses;