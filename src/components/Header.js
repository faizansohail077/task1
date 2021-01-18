import React from 'react'
import './Header.css'
import logo from '../img/logo.svg'
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <nav>
                <div><Link to='/'>
                    <img src={logo} alt='' className="logo" />
                    </Link>
                </div>
            
                    <ul className="nav-links">
                        <li>
                            <Link to="/"> Home</Link>
                        </li>
                        <li>
                            <Link to="/about"> About</Link>
                        </li>
                        <li>
                            <Link to="/course"> Courses</Link>
                        </li>
                        <li>
                            <Link to="/resource">  Resources</Link>
                        </li>
                        <li>
                            <Link to="/contact">  Contact Us</Link>
                        </li>
                    </ul>
                    <button className='btn'>Enroll now</button>
                
            </nav>
        </div>
    )
}

export default Header
