import React from 'react'
import './Form.css'
const Form = () => {
    return (
        <div className='form '>
            <div className='form__image'>
                <div className="form__Text">
                </div>
               
                <div className='form1'>
                    <div className='margin'>
                    <h1 style={{color:'white',textAlign:'center',marginBottom:'20px'}} >Find the Right Course for you</h1>
                    <form>
                    <div className='form_input'>
                        <input placeholder='Enter Your' type='text' />
                        <input placeholder='Enter Your' type='text' />
                    </div>
                    <div className='form_input'>
                        <input placeholder='Enter Your' type='text' />
                        <input placeholder='Enter Your' type='text' />
                    </div>
                        <button className='button '>View Course</button>
                </form>
                </div>
                </div>
                <div>
                </div>
            </div>
        </div>
    )
}

export default Form
 {/* <form className='Form'>
                    <div className='form__left'>
                    <input placeholder='Enter Your FirstName' className='Form__input' type='text' />
                    <input placeholder='Enter Your LastName' className='Form__input' type='text' />
                    </div>
                    <div className='form__right'>
                    <input placeholder='Enter Your Email' className='Form__input' type='text' />
                    <input placeholder='Enter Your Address' className='Form__input' type='text' />
                    </div>
                </form> */}