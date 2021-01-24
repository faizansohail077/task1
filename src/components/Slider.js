import React from 'react'
import './Slider.css'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import aluminiPic from '../img/aluminiPic.png'
import layer from '../img/layer.png'
import layer1 from '../img/layer1.png'
import layer2 from '../img/layer2.png'
const Slider = () => {
    const slideImages=['../img/layer.png','../img/layer1.png','../img/layer2.png']
    return (
        <div className="slider">
            <div className="slider__data">
                
                <div className="success__work">
                    <img src={layer} alt='' />
                </div>    
                    <div className="success_text">
                        <span>
                            Meet Ishi Julie ...
                    </span>
                        <div className="name">
                            <h3  >Lorem Ipsum is simply dummy text of the printing and typesetting industry.and typesetting industry. </h3>
                            <p style={{ opacity: 0.4 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </p></div>
                    </div>
                    <div className="slider__Pic">
                        <img src={aluminiPic} alt='' />
                        
                        <div className="slider__div">
                            <button>
                                <img src={layer1} alt='' />
                            </button>
                            <button>
                                <img src={layer2} alt='' />
                            </button>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Slider
