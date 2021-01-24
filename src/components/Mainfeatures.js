import React from 'react'
import './Mainfeatures.css'
import Layer1 from '../img/Layer 51.svg'
import Layer2 from '../img/Layer 47.svg'
import Layer3 from '../img/Layer 49.svg'
import Layer4 from '../img/Layer 50.svg'
const Mainfeatures = () => {
    return (
        <div className="mainfeatures">
            <div className="mainfeatures_work">
                <div className="image1">
                    <img src={Layer2} alt='' />
                </div>
                <div className="mainfeature-text">
                    <h1>Courses</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
            </div>
            <div className="mainfeatures_work">
                <div className="image1">
                    <img src={Layer1} alt='' />
                </div>
                <div className="mainfeature-text">
                    <h1>Courses</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
            </div>
            <div className="mainfeatures_work">
                <div className="image1">
                    <img src={Layer3} alt='' />
                </div>
                <div className="mainfeature-text">
                    <h1>Courses</h1>
                    <p >Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
            </div>
            <div className="mainfeatures_work">
                <div className="image1">
                    <img src={Layer4} alt='' />
                </div>
                <div className="mainfeature-text">
                    <h1>Courses</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
            </div>
        </div>
    )
}

export default Mainfeatures
