import React from 'react'
import './FeaturedCourse.css'
import team2 from '../img/team2.png'
import Details from '../img/Details.png'

const FeaturedCourse = () => {
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Featured Course</h1>
            <div className='featuredCourse'>
                <div className='featuredCourse__div'>
                    <img className='image2' src={Details} alt='' />
                   
                </div>
                <div className='featuredCourse__div'>
                    <img className='image2' src={Details} alt='' />
                   
                </div>
                <div className='featuredCourse__div'>
                    <img className='image2' src={Details} alt='' />
                   
                </div>
            </div>
        </div>
    )
}

export default FeaturedCourse
{/* <p style={{ marginRight: '70px' }}>Language  Profiency Course</p>
<button className='botton'>Details</button>
 <p style={{ marginRight: '70px' }}>Language  Profiency Course</p>
 <button className='botton'>Details</button>
 <p style={{ marginRight: '70px' }}>Language  Profiency Course</p>
 <button className='botton'>Details</button> */}