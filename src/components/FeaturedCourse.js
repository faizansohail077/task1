import React from 'react'
import './FeaturedCourse.css'
import team2 from '../img/team2.png'
import Details from '../img/c1.png'

const FeaturedCourse = () => {
    return (
        <div>
            <h1 style={{ textAlign: 'center',marginBottom:'20px' }}>Featured Course</h1>
            <div className='featuredCourse'>
            <div className='featuredCourse__div'>
                <div className="border2"><p></p></div>
                <div className="border_img2">
                    <img className='image2' src={Details} alt='' />
                    </div>
                    <p>Language Proficiency Course</p>
                    <button className='btn5'>Details</button>
                   
                </div>
                <div className='featuredCourse__div'>
                <div className="border2"><p></p></div>
                <div className="border_img2">
                    <img className='image2' src={Details} alt='' />
                    </div>
                    <p>Language Proficiency Course</p>
                    <button className='btn5'>Details</button>
                   
                </div>
                <div className='featuredCourse__div'>
                <div className="border2"><p></p></div>
                <div className="border_img2">
                    <img className='image2' src={Details} alt='' />
                    </div>
                    <p>Language Proficiency Course</p>
                    <button className='btn5'>Details</button>
                   
                </div>
            </div>
        </div>
    )
}

export default FeaturedCourse
