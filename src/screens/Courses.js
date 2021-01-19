import React from 'react'
import Course from '../components/Course'
import Filter from '../components/Filter'
import NavbarCourse from '../components/NavbarCourse'
import Work2 from '../components/Work2'


const Courses = () => {
    return (
        <div>
            <NavbarCourse />
            <Work2 />
            <div style={{ display: 'flex' }}>
                <div style={{ flex: 0.3 }}>
                    <Filter />
                </div>
                <div style={{ flex: 0.7 }}>
                    <Course />
                </div>
            </div>
        </div>
    )
}

export default Courses
