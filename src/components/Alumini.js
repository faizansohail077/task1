import React from 'react'
import './Alumini.css'
import img from '../img/aluminiPic.png'
const Alumini = () => {
    return (
        <div>
            <div className="alumini">
                <img className="alumini__image" src={img} alt='' />

                <p className="alumini__text">
                    <span>Lorem Ipium</span><br />
                    <div className="alumini__text1">
                        Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply  </div>
                    <br />
                    <p style={{opacity:0.6,lineHeight:1.1}}>
                 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                 </p>
                </p>

            </div>
            <div className="alumini2">
                <p className="alumini__text2">
                    <span>Why Study at Blessed Academy</span><br />
                    <div className="alumini__text1">
                        Lorem Ipsum is simply dummy text of the printing.Lorem Ipsum is simply dummy text of the printing  Lorem Ipsum is simply </div>
                    <br />
                    <p style={{opacity:0.6,lineHeight:1.1}}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                 </p>
                </p>
                <img className="alumini__image" src={img} alt='' />
            </div>
        </div>
    )
}

export default Alumini
