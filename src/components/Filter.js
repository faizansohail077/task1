import React from 'react'
import './Filter.css'
const Filter = () => {
    return (
        <div className="filter">
            <p className="filter__text">Type</p>
            <div className="filter1">
                <input type="checkbox" />
                <p>Courses</p>
            </div>
            <div className="filter1">
                <input type="checkbox" />
                <p>Vides</p>
            </div>
            <div className="filter1">
                <input type="checkbox" />
                <p>Learning Path</p>
            </div>
            <p className="filter__text">Type</p>
            <div className="filter1">
                <input type="checkbox" />
                <p>Beginner</p>
            </div>
            <div className="filter1">
                <input type="checkbox" />
                <p>Intermidiate</p>
            </div>
            <div className="filter1">
                <input type="checkbox" />
                <p>Advance</p>
            </div>
            <p className="filter__text">Type</p>
            <p className="filter__text">Type</p>

        </div>
    )
}

export default Filter
