import React from 'react'
import './Work2.css'
import search from '../img/search.svg'
const Work2 = () => {
    return (
        <div className="work2">
            <div className="work__input">
                <input type='text' placeholder="search course" />
                <img  src={search} alt='' />
            </div>
            <div className="work__list">
                <p>All</p>
                <p>Saved</p>
                <p>Popular </p>
                <p>Best Match</p>
            </div>
            <input className="int" type='text' placeholder="Alphabetically" />
        </div>
    )
}

export default Work2
