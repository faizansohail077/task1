import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="image">
                <div className="navbar__text  ">
                    <div>
                        <h1 style={{color:'white',fontWeight:'bold'}}>Lorem Ipsum</h1>
                    </div>
                    <div>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page.it is a long established fact that a reader will be distracted by the readable content of a page.it is a long established fact that a reader will be distracted by the readable content of a page</p>
                    </div>
                    <div>
                        <button className='button1'> CONTACT US</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
