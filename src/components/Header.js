import React from 'react'
import './Header.css'
import logo from '../img/logo.svg'
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div className="header">
            <nav>
                <div>
                    <Link to='/'>
                        <img src={logo} alt='' className="logo" />
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



{/* <div className="header">
<Navbar collapseOnSelect expand="lg" bg="light" variant="light">
    <Navbar.Brand  className='mr-5 ml-5' href="/"><img src={logo} alt='' className="logo " /> </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className='mr-5'>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link eventKey={2} href="/about">
              About
        </Nav.Link>
        <Nav.Link eventKey={2} href="/course">
                Course
        </Nav.Link>
        <Nav.Link eventKey={2} href="/resource">
                Resource
        </Nav.Link>
        <Nav.Link eventKey={3} href="/contact">
                Contact us
        </Nav.Link>
        </Nav>
    </Navbar.Collapse>
    <button className='btn5'> ENROLL NOW</button>
</Navbar>
</div> */}