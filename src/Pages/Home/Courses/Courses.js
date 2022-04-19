import React, { useState } from 'react';
import useCourses from '../../../hooks/useCourses';
import Cart from '../../Shared/Cart/Cart';
import Course from '../Course/Course';
import './Courses.css';

const Courses = () => {
    const [courses] = useCourses();
    const [addedCourses, setAddedCourse] = useState([]);
    let [totalFees, setTotalFees] = useState(0);

    const handleAddToCart = id => {
        const addedCourse = courses.find(course => course.id === id);
        const findCourse = addedCourses.find(singleAddedCourse => singleAddedCourse.id === addedCourse.id);
        if (!findCourse) {
            const newAddedCourses = [...addedCourses, addedCourse];
            setAddedCourse(newAddedCourses);
            const fee = addedCourse.fees;
            totalFees = totalFees + fee;
            setTotalFees(totalFees);
        }

    }

    return (
        <div className='container mb-3'>
            <h2 className="mt-5 text-center">See My Running Courses</h2>
            <div className="d-flex flex-column align-items-center gap-5">
                <div className='d-flex flex-column flex-lg-row gap-5 justify-content-center mt-3'>
                    {
                        courses.map(course => <Course
                            key={course.id}
                            course={course}
                            handleBuyCourse={handleAddToCart}
                        ></Course>)
                    }
                </div>
                <div>
                    {totalFees ? <Cart
                        totalFees={totalFees}
                        addedCourses={addedCourses}
                    ></Cart>
                        :
                        ''
                    }
                </div>
            </div>
        </div>
    );
};

export default Courses;