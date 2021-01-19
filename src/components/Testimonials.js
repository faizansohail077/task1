import React from 'react'
import './Testimonials.css'
import team3 from '../img/team3.png'
import test from '../img/test.png'


const Testimonials = () => {
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Testimonials</h1>
            <div className='Testimonials'>
                <div>
                    <img src={test} alt='' />
                </div>
                <div className='team3'>
                    <img src={team3} alt='' />
                    <div>
                        <h1>Client name</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
                <div>
                    <img src={test} alt='' />

                </div>
            </div>

        </div>
    )
}

export default Testimonials
