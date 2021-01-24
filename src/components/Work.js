import React from 'react'
import './Work.css'
import layer from '../img/Layer 63.png'

const Work = () => {
    return (
        <div className="work">
            <div className="work__pic">
                <div className="pic1">
                    <img className="pic" src={layer} alt='' />
                </div>
                <div className="work__heading">
                    <h1>How it works</h1>
                    <p className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
            </div>
            <div className='list1'>
                <div className="work__list">

                    <ul>
                        <li className='list'>Excellent Reviews</li>
                    </ul>
                    <ul>
                        <li className='list'>Over 100 years of experiance</li>
                    </ul>
                    <ul>
                        <li className='list'>clear result</li>
                    </ul>
                    <ul>
                        <li className='list'>Memoriable experience </li>
                    </ul>
                    </div>
                    
                    <div className='Border'>

                    </div>
                    <div className="worklist__text">
                        <p className="text">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.

                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.  
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
                    
                </div>
            </div>
        </div>
    )
}

export default Work
