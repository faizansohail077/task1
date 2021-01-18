import React from 'react'
import './Footer.css'
import footer from '../img/footer.png'
import Wa from '../img/Wa.png'
import fb from '../img/fb.png'
import twit from '../img/twit.png'
import insta from '../img/insta.png'

const Footer = () => {
    return (
        <div className="footer">

                <div className='footer__left' >
                    <img className='footer__image' src={footer} alt='' />
                    <p className="footer__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type</p>
                </div>
                <div className="footer__left2">
                    <ul className="ul">
                        <li>GDPR</li>
                        <li>Performance</li>
                        <li>Disclaimer</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="footer__right2">
                    <ul className="ul">
                        <li>Terms & condition</li>
                        <li>Refund policy</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div>
                <ul className="ul2">
                        <img src={fb} alt='' />
                        <img src={Wa} alt='' />
                        <img src={twit} alt='' />
                        <img src={insta} alt='' />
                    </ul>
            </div>
        </div>
    )
}

export default Footer
