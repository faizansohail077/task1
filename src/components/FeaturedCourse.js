import React from 'react'
import './FeaturedCourse.css'
import team2 from '../img/team2.png'

const FeaturedCourse = () => {
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Featured Course</h1>
            <div className='featuredCourse'>
                <div>
                    <img className='image2' src={team2} alt='' />
                    <p>dasdasdas</p>
                    <button className='btn'>car</button>
                </div>
                <div>
                    <img  className='image2' src={team2} alt='' />
                    <p>dasdasdas</p>
                    <button className='btn'>car</button>
                </div>
                <div>
                    <img  className='image2' src={team2} alt='' />
                    <p>dasdasdas</p>
                    <button className='btn'>car</button>
                </div>
            </div>
        </div>
    )
}

export default FeaturedCourse
