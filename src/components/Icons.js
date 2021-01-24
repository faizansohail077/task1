import React from 'react'
import './Icons.css'
import icon1 from '../img/icon1.svg'
import icon2 from '../img/icon2.svg'
import icon3 from '../img/icon3.svg'
import icon4 from '../img/icon4.png'
import icon5 from '../img/icon5.png'

const Icons = () => {
    return (
        <div className="icons">
            <div className='picture'>
                <img src={icon1} alt='' />
                <div className='text'>
                    <p  >Learn English <br /> online </p>
                </div>
            </div>
            <div className='picture'>
                <img src={icon2} alt='' />

                <div className='text'>
                    <p className='text'>Small Learning <br /> groups </p>
                </div>

            </div>
            <div className='picture'>
                <img src={icon3} alt='' />
                <div className='text'>
                    <p className='text'>Experienced <br /> Trainer </p>
                </div>

            </div>
            <div className='picture'>
                <img src={icon4} alt='' />
                <div className='text'>
                    <p className='text'>Rated Excellent <br /> 1000+ Reviews </p>
                </div>
            </div>
            <div className='picture'>
                <img style={{width:'120px'}} src={icon5} alt='' />
                <div className='text'>
                    <p className='text'>Over 100 <br />Years Experience  </p>
                </div>
            </div>
        </div>
    )
}

export default Icons
