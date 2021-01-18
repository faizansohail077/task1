import React from 'react'
import './Mentor.css'
import team1 from '../img/team1.png'
import team2 from '../img/team2.png'
import team3 from '../img/team3.png'


const Mentors = () => {
    return (
        <div >
            <h1 className='mentors__heading'>Mentors & Instructors</h1>
            <div className="mentors">
            <div >
                <img className='mentors__img' src={team1} alt=''/>
            </div>
            <div >
                <img className='mentors__img' src={team2} alt=''/>
            </div>
            <div >
                <img className='mentors__img' src={team3} alt=''/>
            </div>
            </div>
        </div>
    )
}

export default Mentors
