import React from 'react'
import './Help.css'
import group1 from '../img/Group46.svg'
import group2 from '../img/Group 47.svg'
import group3 from '../img/Group 48.svg'
const Help = () => {
    return (
        <div className="help">
            <div className=' help__heading'>
                <h2>We are Always here to help you</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div className="help__logo">
                <div className='help__logoPic'>
                    <img src={group1} alt='' />
                    <div>
                        <h4>Phone</h4>
                        <p>Phone +92 xxxxxxxx</p>
                        <p>Phone +92 xxxxxxxx</p>
                    </div>
                </div>
                <div className='help__logoPic'>
                    <img src={group2} alt='' />
                    <div>
                        <h3>Address</h3>
                        <p>address xxxxxxxx</p>
                        <p>address xxxxxxxx</p>
                    </div>
                </div>

                <div className='help__logoPic'>
                    <img src={group3} alt='' />
                    <div>
                        <h4>Email</h4>
                        <p>Email xxxxxxxx</p>
                        <p>Email xxxxxxxx</p>
                    </div>
                </div>
            </div>
            <div className="contact">
                <div className="contact__img">
                    <div className="contant__text">
                        <h2>We are Always here to help you</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <form>
                        <div className='form__input'>
                            <input placeholder="Enter" type="text" />
                            <input placeholder="Enter" type="text" />
                            <input placeholder="Enter" type="text" />
                        </div>

                        <textarea className='input__field' placeholder="Enter" type="text" />
                        <button className='btn1'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Help
