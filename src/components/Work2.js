import React from 'react'
import './Work2.css'
import search from '../img/search.svg'
const Work2 = () => {
    return (
        <div className="work2">
            <div className="work__input">
                <input type='text' placeholder="search course" />
                <img src={search} alt='' />
            </div>
            <div className="work__list2">
                <p>All</p>
                <p>Saved</p>
                
                <p>Popular </p>
                
                <p>Best Match</p>
            </div>
            <div className="work_input2">
                <input className="int" type='text' placeholder="Recency" />
                <input style={{ paddingLeft: '10px' }} className="int2" type='text' placeholder="Alphabetically" />
            </div>
        </div>
    )
    // style={{borderBottom:"1px solid orange"}}
}

export default Work2
