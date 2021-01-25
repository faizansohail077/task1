import React from 'react'
import './Header.css'
import logo from '../img/logo.svg'
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div className="header">
            <nav>
                <div className="logo">
                    <Link to='/'>
                        <img className="logo" src={logo} alt=''  />
                    </Link>
                </div>
                
                <ul className="nav-links">
                    <li>
                        <Link style={{ textDecoration: 'none',color:'black' }} to="/"> Home</Link>
                    </li>
                    <li>
                        <Link style={{ textDecoration: 'none',color:'black' }} to="/about"> About</Link>
                    </li>
                    <li>
                        <Link style={{ textDecoration: 'none',color:'black' }} to="/course"> Courses</Link>
                    </li>
                    <li>
                        <Link style={{ textDecoration: 'none',color:'black' }} to="/resource">  Resources</Link>
                    </li>
                    <li>
                        <Link style={{ textDecoration: 'none',color:'black' }} to="/contact">  Contact Us</Link>
                    </li>
                </ul>
                <button className='btn5'>Enroll now</button>

            </nav>
        </div>

    )
}

export default Header
