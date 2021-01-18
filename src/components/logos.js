import React from 'react'
import './logos.css'
import logo1 from '../img/logo1.png'
import logo2 from '../img/logo2.svg'
import logo3 from '../img/logo3.svg'
import logo4 from '../img/logo4.svg'
import logo5 from '../img/logo5.svg'
const Logos = () => {
    return (
        <div>
            <div className='logos'>
                <img src={logo1} alt='' />
                <img src={logo2} alt='' />
                <img src={logo4} alt='' />
                <img src={logo3} alt='' />
                <img src={logo5} alt='' />
            </div>
        </div>
    )
}

export default Logos
