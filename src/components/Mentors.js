import React from 'react'
import './Mentor.css'
import team1 from '../img/p2.png'
import team2 from '../img/p1.png'
import team3 from '../img/p3.png'



const Mentors = () => {
    return (
        <div >
            <h1 className='mentors__heading'>Mentors & Instructors</h1>
            <div className="mentors">
                <div className="mentor1" >
                    <div className='border1'>
                        <p></p>
                    </div>
                    <div className="border_img">
                        <img className='mentors__img' src={team1} alt='' />
                    </div>
                    <button className="btn6">Team Members</button>
                </div>
                <div className="mentor1" >
                    <div className='border1'>
                        <p></p>
                    </div>
                    <div className="border_img">
                        <img className='mentors__img' src={team2} alt='' />
                    </div>
                    <button className="btn6">Team Members</button>
                </div>
                <div className="mentor1" >
                    <div className='border1'>
                        <p></p>
                    </div>
                    <div className="border_img">
                        <img className='mentors__img' src={team3} alt='' />
                    </div>
                    <button className="btn6">Team Members</button>
                </div>

            </div>

        </div>
    )
}

export default Mentors




// <div >
// <div className="mentors">
// <div >
//     <img className='mentors__img' src={team1} alt=''/>
// </div>
// <div >
//     <img className='mentors__img' src={team2} alt=''/>
// </div>
// <div >
//     <img className='mentors__img' src={team3} alt=''/>
// </div>
// </div>
// </div>