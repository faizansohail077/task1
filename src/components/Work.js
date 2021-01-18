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
                <div>
                    <h1>How it works</h1>
                    <p className="text">hellosadasdandnsdnasdkdkjasbasjbdjdbsjkadasdjasndkasbdksbakbhellosadasdandnsdnasdkdkjasbasjbdjdbsjkadasdjasndkasbdksbakbhellosadasdandnsdnasdkdkjasbasjbdjdbsjkadasdjasndkasbdksbakb</p>
                </div>
            </div>
            <div className="work__list">
                <ul>
                    <li className='list'>Excellent Reviews</li>
                    <li className='list'>Over 100 years of experiance</li>
                    <li className='list'>clear result</li>
                    <li className='list'>Memoriable experience </li>
                    
                </ul>
                <div className='Border'>
                    
                </div>
            <div className="worklist__text">
                <p>
                hellosadasdandnsdnasdkdkjasbasjbdjdbsjkadasdjasndkasbdksbakbhellosadasdandnsdnasdkdkjasbasjbdjdbsjkadasdjasndkasbdksbakbhellosadasdandnsdnasdkdkjasbasjbdjdbsjkadasdjasndkasbdksbakb
                </p>
            </div>
            </div>
        </div>
    )
}

export default Work
