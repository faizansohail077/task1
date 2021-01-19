import React from 'react'
import './Form.css'
const Form = () => {
    return (
        <div className='form'>
            <div className='form__image'>
                <h1 className="form__Text">Find the righ course for you</h1>
                <form className='Form'>
                    <div className='form__left'>
                        <input placeholder='Enter Your FirstName' className='Form__input' type='text' />
                        <input placeholder='Enter Your LastName' className='Form__input' type='text' />
                    </div>
                    <div className='form__right'>
                        <input placeholder='Enter Your Email' className='Form__input' type='text' />
                        <input placeholder='Enter Your Address' className='Form__input' type='text' />
                    </div>
                    
                </form>
                          <div>
                        <button className='btn1 '>Enroll now</button>
                    </div>
            </div>
        </div>
    )
}

export default Form
