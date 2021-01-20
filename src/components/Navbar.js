import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="image img-fluid">
                <div className="navbar__text  ">
                    <h1 style={{color:'white'}}>Lorem Ipsum</h1>
                    <p>it is a long established fact that a reader will be distracted by the readable content of a page</p>
                    <button className='btn'>Enroll now</button>

                </div>
            </div>
        </div>
    )
}

export default Navbar
