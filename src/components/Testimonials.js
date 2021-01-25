import React from 'react'
import './Testimonials.css'
import team3 from '../img/team3.png'
import test from '../img/test.png'
import Details from '../img/p3.png'


const Testimonials = () => {
    return (
        <div>
            <h1 style={{ textAlign: 'center',marginTop:'70px',marginBottom:'20px',fontSize:'50px' }}>Testimonials</h1>
            <div className='Testimonials'>
                <div className='img1'>
                    <img src={test} alt='' />
                </div>
                <div className='img2'>
                    <img src={Details} alt='' />
                    <div className="testi">
                        <h1 style={{marginLeft:'10px',fontSize:'30px'}}>Client Name</h1>
                        <p style={{marginLeft:'10px',color:'gray',opacity:0.7,lineHeight:1}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
                <div className='img3'>
                    <img src={test} alt='' />
                </div>
            </div>

        </div>
    )
}

export default Testimonials
